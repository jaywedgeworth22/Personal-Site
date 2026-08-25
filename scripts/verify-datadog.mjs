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
mustMatch("site/src/lib/datadog/rum.ts", /@datadog\/browser-rum/);
mustMatch("site/src/lib/datadog/rum.ts", /sessionReplaySampleRate: 0/);
mustMatch("site/src/lib/datadog/server.server.ts", /dd-trace/);
mustMatch("site/src/lib/datadog/server.server.ts", /agentless/);
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
    import { assertDatadogKeysOrThrow, isDatadogRequired, missingDatadogKeys } from ${JSON.stringify(failClosed)};

    if (isDatadogRequired({})) throw new Error("local must not require Datadog");
    if (!isDatadogRequired({ VERCEL_ENV: "production" })) throw new Error("production must require Datadog");
    if (!isDatadogRequired({ DD_FAIL_CLOSED: "1" })) throw new Error("DD_FAIL_CLOSED=1 must require Datadog");

    const missing = missingDatadogKeys({});
    if (!missing.includes("DD_API_KEY") || !missing.includes("DD_SITE")) {
      throw new Error("empty env must report missing keys");
    }

    const complete = {
      DD_API_KEY: "placeholder-not-a-real-key",
      DD_SITE: "us5.datadoghq.com",
      DD_APPLICATION_ID: "app-id",
      DD_CLIENT_TOKEN: "client-token",
    };
    if (missingDatadogKeys(complete).length !== 0) {
      throw new Error("complete env should have no missing keys");
    }

    let threw = false;
    try {
      assertDatadogKeysOrThrow({ VERCEL_ENV: "production" });
    } catch (err) {
      threw = String(err).includes("Datadog fail-closed");
    }
    if (!threw) throw new Error("production without keys must throw fail-closed");

    assertDatadogKeysOrThrow({});
    console.log("datadog fail-closed unit checks ok");
    `,
  ],
  { stdio: "inherit" },
);

console.log("verify-datadog ok");
