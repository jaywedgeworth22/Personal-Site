#!/usr/bin/env node
/**
 * Static + unit checks for Personal-Site Datadog instrumentation.
 * No secrets.  Does not call Datadog.  Safe for GitHub Actions verify.
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function mustExist(rel) {
  readFileSync(join(root, rel));
}

function mustMatch(rel, pattern) {
  const text = readFileSync(join(root, rel), "utf8");
  if (!pattern.test(text)) {
    throw new Error(`${rel} does not match ${pattern}`);
  }
}

function mustNotMatch(rel, pattern) {
  const text = readFileSync(join(root, rel), "utf8");
  if (pattern.test(text)) {
    throw new Error(`${rel} unexpectedly matches ${pattern}`);
  }
}

mustExist("site/src/lib/datadog/fail-closed.ts");
mustExist("site/src/lib/datadog/server.server.ts");
mustExist("site/src/lib/datadog/rum.ts");
mustExist("site/src/lib/datadog/DatadogRum.tsx");
mustExist("static/index.html");
mustExist("AGENTS.md");
mustExist("docs/EFFORT-LOG.md");

mustMatch("static/index.html", /Earlier work included/);
mustMatch("site/src/lib/datadog/fail-closed.ts", /Datadog fail-closed/);
mustMatch("site/src/lib/datadog/fail-closed.ts", /DD_API_KEY/);
mustMatch("site/src/lib/datadog/fail-closed.ts", /DD_APPLICATION_ID/);
mustMatch("site/src/lib/datadog/fail-closed.ts", /DD_CLIENT_TOKEN/);
mustMatch("site/src/lib/datadog/fail-closed.ts", /Never throws/);
mustMatch("site/src/lib/datadog/rum.ts", /@datadog\/browser-rum/);
mustMatch("site/src/lib/datadog/rum.ts", /sessionReplaySampleRate: 0/);
mustNotMatch("site/src/lib/datadog/rum.ts", /throw new Error\(datadogFailClosedMessage/);
mustMatch("site/src/lib/datadog/server.server.ts", /dd-trace/);
mustMatch("site/src/lib/datadog/server.server.ts", /agentless/);
mustNotMatch("site/src/lib/datadog/server.server.ts", /if \(isDatadogRequired\(\)\) throw/);
mustMatch("site/src/routes/__root.tsx", /DatadogRum/);
mustMatch("site/src/lib/error-component.tsx", /reportVisibleError/);
mustMatch("site/src/lib/error-component.tsx", /error\.message/);

// No invented secrets in git.
mustNotMatch("site/src/lib/datadog/fail-closed.ts", /[a-f0-9]{32}/);
mustNotMatch("site/src/lib/datadog/rum.ts", /pub[a-f0-9]{20,}/i);
mustNotMatch("site/vite.config.ts", /DD_API_KEY.{0,20}["'][a-zA-Z0-9]{8,}/);

const failClosed = join(root, "site/src/lib/datadog/fail-closed.ts");
execFileSync(
  process.execPath,
  [
    "--experimental-strip-types",
    "--eval",
    `
    import {
      assertDatadogKeysOrThrow,
      datadogSite,
      isDatadogRequired,
      missingDatadogKeys,
      missingRumDatadogKeys,
      missingServerDatadogKeys,
    } from ${JSON.stringify(failClosed)};

    if (isDatadogRequired({})) throw new Error("local must not require Datadog");
    if (!isDatadogRequired({ VERCEL_ENV: "production" })) throw new Error("production must require Datadog");
    if (!isDatadogRequired({ DD_FAIL_CLOSED: "1" })) throw new Error("DD_FAIL_CLOSED=1 must require Datadog");

    const missing = missingDatadogKeys({});
    if (!missing.includes("DD_API_KEY") || !missing.includes("DD_APPLICATION_ID")) {
      throw new Error("empty env must report missing API + RUM keys");
    }
    if (missing.includes("DD_SITE")) {
      throw new Error("DD_SITE has a default and is not a boot key");
    }
    if (missingServerDatadogKeys({}).join() !== "DD_API_KEY") {
      throw new Error("server boot key is API key only");
    }
    if (missingRumDatadogKeys("", "").length !== 2) {
      throw new Error("RUM stays dark without both intake vars");
    }
    if (datadogSite({}).includes("us5") === false) {
      throw new Error("unset DD_SITE must default to the existing us5 site");
    }

    const complete = {
      DD_API_KEY: "placeholder-not-a-real-key",
      DD_APPLICATION_ID: "app-id",
      DD_CLIENT_TOKEN: "client-token",
    };
    if (missingDatadogKeys(complete).length !== 0) {
      throw new Error("complete env should have no missing keys");
    }

    // Same env as a Vercel Production build with keys not attached.
    assertDatadogKeysOrThrow({ VERCEL_ENV: "production" });
    assertDatadogKeysOrThrow({ VERCEL_ENV: "production", DD_API_KEY: "placeholder-not-a-real-key" });
    assertDatadogKeysOrThrow({});
    console.log("datadog fail-closed unit checks ok");
    `,
  ],
  { stdio: "inherit" },
);

console.log("verify-datadog ok");
