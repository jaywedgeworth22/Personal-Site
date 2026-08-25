/**
 * Server logs + APM.  Uses existing DD_* env vars.  On Vercel there is no
 * local Agent, so traces go agentless (DD_API_KEY + DD_SITE).  If
 * DD_AGENT_HOST is set (Coolify / Hetzner), traces go to that Agent instead.
 */
import { createRequire } from "node:module";
import {
  datadogEnvName,
  datadogFailClosedMessage,
  datadogService,
  datadogSite,
  datadogVersion,
  isDatadogRequired,
  missingServerDatadogKeys,
  readApiKey,
} from "./fail-closed";

type LogStatus = "info" | "warn" | "error";

const originalError = console.error.bind(console);
const originalWarn = console.warn.bind(console);

const globalRef = globalThis as typeof globalThis & {
  __personalSiteDatadogServer__?: boolean;
  __personalSiteDatadogConsole__?: boolean;
};

export function initDatadogServer(): void {
  if (globalRef.__personalSiteDatadogServer__) return;
  globalRef.__personalSiteDatadogServer__ = true;

  const missingServer = missingServerDatadogKeys();
  if (missingServer.length > 0) {
    if (isDatadogRequired()) {
      originalError(datadogFailClosedMessage(missingServer));
    }
    return;
  }

  const apiKey = readApiKey();
  if (!apiKey) {
    return;
  }

  applyDatadogProcessEnv();

  const useAgent = Boolean(process.env.DD_AGENT_HOST?.trim());

  try {
    // dd-trace reads DD_* at import time, so env aliases must be set first.
    const require = createRequire(import.meta.url);
    const tracer = require("dd-trace") as {
      init: (opts?: Record<string, unknown>) => unknown;
    };
    tracer.init({
      service: datadogService(),
      env: datadogEnvName(),
      version: datadogVersion(),
      logInjection: true,
      runtimeMetrics: false,
      plugins: true,
      hostname: useAgent ? process.env.DD_AGENT_HOST : undefined,
      port: useAgent ? process.env.DD_TRACE_AGENT_PORT || "8126" : undefined,
    });
  } catch (err) {
    originalError("dd-trace init failed:", err);
    return;
  }

  hookConsoleAndProcess();

  void sendServerLog("info", "Datadog server instrumentation started", {
    exporter: useAgent ? "agent" : "agentless",
    service: datadogService(),
  });
}

function applyDatadogProcessEnv(): void {
  const useAgent = Boolean(process.env.DD_AGENT_HOST?.trim());
  if (!useAgent && !process.env.DD_TRACE_EXPERIMENTAL_EXPORTER) {
    process.env.DD_TRACE_EXPERIMENTAL_EXPORTER = "agentless";
  }
  if (!process.env.DD_SERVICE) process.env.DD_SERVICE = datadogService();
  if (!process.env.DD_ENV) process.env.DD_ENV = datadogEnvName();
  if (!process.env.DD_VERSION) process.env.DD_VERSION = datadogVersion();
  if (!process.env.DD_SITE) process.env.DD_SITE = datadogSite();

  // Sample 20% of prod traces (fleet cost rule).  Errors stay visible.
  if (!process.env.DD_TRACE_SAMPLE_RATE && process.env.VERCEL_ENV === "production") {
    process.env.DD_TRACE_SAMPLE_RATE = "0.2";
  }
}

function hookConsoleAndProcess(): void {
  if (globalRef.__personalSiteDatadogConsole__) return;
  globalRef.__personalSiteDatadogConsole__ = true;

  console.error = (...args: unknown[]) => {
    originalError(...args);
    void sendServerLog("error", stringifyArgs(args));
  };
  console.warn = (...args: unknown[]) => {
    originalWarn(...args);
    void sendServerLog("warn", stringifyArgs(args));
  };

  process.on("uncaughtException", (error) => {
    originalError("uncaughtException", error);
    void sendServerLog("error", error.message, {
      error: { kind: error.name, message: error.message, stack: error.stack },
    });
  });
  process.on("unhandledRejection", (reason) => {
    originalError("unhandledRejection", reason);
    const message = reason instanceof Error ? reason.message : String(reason);
    void sendServerLog("error", message, { unhandledRejection: true });
  });
}

function stringifyArgs(args: unknown[]): string {
  return args
    .map((arg) => {
      if (arg instanceof Error) return arg.stack || arg.message;
      if (typeof arg === "string") return arg;
      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(" ");
}

export async function sendServerLog(
  status: LogStatus,
  message: string,
  extra: Record<string, unknown> = {},
): Promise<void> {
  const apiKey = readApiKey();
  if (!apiKey) {
    return;
  }

  const site = datadogSite();
  const url = `https://http-intake.logs.${site}/api/v2/logs`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": apiKey,
      },
      body: JSON.stringify([
        {
          ddsource: "nodejs",
          ddtags: `env:${datadogEnvName()},service:${datadogService()},version:${datadogVersion()}`,
          hostname: process.env.VERCEL_URL || datadogService(),
          service: datadogService(),
          status,
          message,
          ...extra,
        },
      ]),
    });
    if (!response.ok) {
      originalWarn(`Datadog logs intake failed: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    originalWarn("Datadog logs intake request failed:", err);
  }
}

initDatadogServer();
