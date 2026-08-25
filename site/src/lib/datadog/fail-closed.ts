/**
 * Shared Datadog key checks.  No secret values live here — only env names.
 *
 * Fleet env vars (reuse, do not invent):
 *   DD_API_KEY, DD_SITE, DD_SERVICE, DD_ENV, DD_VERSION,
 *   DD_APPLICATION_ID, DD_CLIENT_TOKEN,
 *   DD_AGENT_HOST, DD_TRACE_AGENT_PORT,
 *   DATADOG_API_KEY (alias for DD_API_KEY)
 */

export const DD_SERVICE_DEFAULT = "personal-site";
export const DD_SITE_EXISTING = "us5.datadoghq.com";

export const REQUIRED_DATADOG_KEYS = [
  "DD_API_KEY",
  "DD_SITE",
  "DD_APPLICATION_ID",
  "DD_CLIENT_TOKEN",
] as const;

export type DatadogEnv = Record<string, string | undefined>;

export function readApiKey(env: DatadogEnv = process.env): string {
  return (env.DD_API_KEY || env.DATADOG_API_KEY || "").trim();
}

export function isDatadogRequired(env: DatadogEnv = process.env): boolean {
  return env.VERCEL_ENV === "production" || env.DD_FAIL_CLOSED === "1";
}

export function missingDatadogKeys(env: DatadogEnv = process.env): string[] {
  const missing: string[] = [];
  if (!readApiKey(env)) missing.push("DD_API_KEY");
  if (!env.DD_SITE?.trim()) missing.push("DD_SITE");
  if (!env.DD_APPLICATION_ID?.trim()) missing.push("DD_APPLICATION_ID");
  if (!env.DD_CLIENT_TOKEN?.trim()) missing.push("DD_CLIENT_TOKEN");
  return missing;
}

export function datadogFailClosedMessage(missing: string[]): string {
  return (
    "Datadog fail-closed: missing " +
    missing.join(", ") +
    ".  Reuse the existing Datadog account env vars.  Do not invent keys."
  );
}

/**
 * Production (or DD_FAIL_CLOSED=1) refuses to start without the existing
 * Datadog keys.  Local / CI / preview skip so `npm run dev` and GitHub
 * verify still work without secrets.
 */
export function assertDatadogKeysOrThrow(env: DatadogEnv = process.env): void {
  if (!isDatadogRequired(env)) return;
  const missing = missingDatadogKeys(env);
  if (missing.length > 0) {
    throw new Error(datadogFailClosedMessage(missing));
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
