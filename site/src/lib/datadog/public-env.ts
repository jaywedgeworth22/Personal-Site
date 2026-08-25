/**
 * Public RUM fields only.  Vite `define` injects the existing DD_* names at
 * build time.  Never put DD_API_KEY here.
 */
import { DD_SITE_EXISTING, datadogService } from "./fail-closed";

export type DatadogRumPublicEnv = {
  applicationId: string;
  clientToken: string;
  site: string;
  service: string;
  env: string;
  version: string;
  failClosed: boolean;
};

function readDefined(value: string | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

export function readDatadogRumPublicEnv(): DatadogRumPublicEnv {
  return {
    applicationId: readDefined(import.meta.env.DD_APPLICATION_ID),
    clientToken: readDefined(import.meta.env.DD_CLIENT_TOKEN),
    site: readDefined(import.meta.env.DD_SITE) || DD_SITE_EXISTING,
    service: readDefined(import.meta.env.DD_SERVICE) || datadogService({}),
    env: readDefined(import.meta.env.DD_ENV),
    version: readDefined(import.meta.env.DD_VERSION),
    failClosed: import.meta.env.DD_FAIL_CLOSED === "1",
  };
}
