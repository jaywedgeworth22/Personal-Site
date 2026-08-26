import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";
import { datadogFailClosedMessage } from "./fail-closed";
import { readDatadogRumPublicEnv } from "./public-env";

let rumStarted = false;

export function initDatadogRum(): void {
  if (typeof window === "undefined" || rumStarted) return;

  const cfg = readDatadogRumPublicEnv();
  const missing: string[] = [];
  if (!cfg.applicationId) missing.push("DD_APPLICATION_ID");
  if (!cfg.clientToken) missing.push("DD_CLIENT_TOKEN");
  if (!cfg.site) missing.push("DD_SITE");

  if (missing.length > 0) {
    // Stay dark.  Throwing in the root useEffect is an unhandled
    // rejection on every page when failClosed is baked and RUM is
    // incomplete (same class as Usage-Monitor #1342).
    console.error(datadogFailClosedMessage(missing));
    return;
  }

  rumStarted = true;

  datadogRum.init({
    applicationId: cfg.applicationId,
    clientToken: cfg.clientToken,
    site: cfg.site,
    service: cfg.service,
    env: cfg.env,
    version: cfg.version,
    sessionSampleRate: 100,
    // Replay is extra spend.  Keep it off.
    sessionReplaySampleRate: 0,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
    allowedTracingUrls: [
      { match: /https:\/\/([a-z0-9-]+\.)?jays\.services/, propagatorTypes: ["datadog"] },
      { match: /https:\/\/([a-z0-9-]+\.)?jaywedgeworth\.com/, propagatorTypes: ["datadog"] },
      {
        match: /https:\/\/personal-site(?:-[a-z0-9-]+)?-jayw\.vercel\.app/,
        propagatorTypes: ["datadog"],
      },
    ],
  });

  datadogLogs.init({
    clientToken: cfg.clientToken,
    site: cfg.site,
    service: cfg.service,
    env: cfg.env,
    version: cfg.version,
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
  });
}

export function reportVisibleError(error: unknown): void {
  if (typeof window === "undefined") return;
  try {
    initDatadogRum();
    datadogRum.addError(error);
    if (error instanceof Error) {
      datadogLogs.logger.error(error.message, { error });
    } else {
      datadogLogs.logger.error(String(error));
    }
  } catch (reportError) {
    console.error("Datadog RUM error report failed:", reportError);
    console.error(error);
  }
}

export function startDatadogView(pathname: string): void {
  if (typeof window === "undefined") return;
  try {
    initDatadogRum();
    datadogRum.startView({ name: pathname || "/" });
  } catch (err) {
    console.error("Datadog RUM startView failed:", err);
  }
}
