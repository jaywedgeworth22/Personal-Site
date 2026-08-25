/**
 * Shared Datadog key checks.  No secret values live here — only env names.
 *
 * Fleet env vars (reuse, do not invent):
 *   DD_API_KEY, DD_SITE, DD_SERVICE, DD_ENV, DD_VERSION,
 *   DD_APPLICATION_ID, DD_CLIENT_TOKEN,
 *   DD_AGENT_HOST, DD_TRACE_AGENT_PORT,
 *   DATADOG_API_KEY (alias for DD_API_KEY)
 *
 * Missing keys stay dark (log + skip).  They must not throw on Vite config,
 * Vercel production builds, or SSR boot.  #19 failed Production that way.
 */

export const DD_SERVICE_DEFAULT = "personal-site";
export const DD_SITE_EXISTING = "us5.datadoghq.com";

export const REQUIRED_SERVER_DATADOG_KEYS = ["DD_API_KEY"] as const;
export const REQUIRED_RUM_DATADOG_KEYS = ["DD_APPLICATION_ID", "DD_CLIENT_TOKEN"] as const;

/** Labels + intake names.  SITE defaults to us5 and is not a boot key. */
export const REQUIRED_DATADOG_KEYS = [
  ...REQUIRED_SERVER_DATADOG_KEYS,
  ...REQUIRED_RUM_DATADOG_KEYS,
] as const;

export type DatadogEnv = Record<string, string | undefined>;

export function readApiKey(env: DatadogEnv = process.env): string {
  return (env.DD_API_KEY || env.DATADOG_API_KEY || "").trim();
}

export function isDatadogRequired(env: DatadogEnv = process.env): boolean {
  return env.VERCEL_ENV === "production" || env.DD_FAIL_CLOSED === "1";
}

export function missingServerDatadogKeys(env: DatadogEnv = process.env): string[] {
  return readApiKey(env) ? [] : ["DD_API_KEY"];
}

export function missingRumDatadogKeys(applicationId: string, clientToken: string): string[] {
  const missing: string[] = [];
  if (!applicationId.trim()) missing.push("DD_APPLICATION_ID");
  if (!clientToken.trim()) missing.push("DD_CLIENT_TOKEN");
  return missing;
}

export function missingDatadogKeys(env: DatadogEnv = process.env): string[] {
  const missing = missingServerDatadogKeys(env);
  missing.push(
    ...missingRumDatadogKeys(env.DD_APPLICATION_ID ?? "", env.DD_CLIENT_TOKEN ?? ""),
  );
  return missing;
}

export function datadogFailClosedMessage(missing: string[]): string {
  return (
    "Datadog fail-closed: missing " +
    missing.join(", ") +
    ".  Instrumentation stays dark.  Reuse the existing Datadog account env vars.  Do not invent keys."
  );
}

/**
 * Production (or DD_FAIL_CLOSED=1) logs when existing Datadog keys are
 * missing.  Never throws — a missing RUM pair or API key must not fail
 * `vite build` or take down jays.services.
 */
export function assertDatadogKeysOrThrow(env: DatadogEnv = process.env): void {
  if (!isDatadogRequired(env)) return;
  const missing = missingDatadogKeys(env);
  if (missing.length > 0) {
    console.error(datadogFailClosedMessage(missing));
  }
}

export function datadogService(env: DatadogEnv = process.env): string {
  return env.DD_SERVICE?.trim() || DD_SERVICE_DEFAULT;
}

export function datadogEnvName(env: DatadogEnv = process.env): string {
  return env.DD_ENV?.trim() || env.VERCEL_ENV?.trim() || env.NODE_ENV?.trim() || "development";
}

export function datadogVersion(env: DatadogEnv = process.env): string {
  return env.DD_VERSION?.trim() || env.VERCEL_GIT_COMMIT_SHA?.trim() || "unknown";
}

export function datadogSite(env: DatadogEnv = process.env): string {
  return env.DD_SITE?.trim() || DD_SITE_EXISTING;
}
