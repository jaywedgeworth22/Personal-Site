import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * Invisible mount.  No Designer UX change — this only starts RUM + browser logs.
 */
export function DatadogRum() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    void import("./rum")
      .then((mod) => {
        mod.initDatadogRum();
        mod.startDatadogView(pathname);
      })
      .catch((err: unknown) => {
        console.error("Datadog RUM boot failed:", err);
      });
  }, [pathname]);

  return null;
}
