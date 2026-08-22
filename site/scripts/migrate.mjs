#!/usr/bin/env node
/**
 * Build-time migrate stub.  Runtime applies migrations/*.sql via src/lib/db.ts.
 * No-op when DATABASE_URL is unset (PGLite on personal Vercel).
 */
const url = (process.env.DATABASE_URL || "").trim();
if (!url) {
  console.log("[migrate] DATABASE_URL unset — skip (PGLite applies at runtime).");
  process.exit(0);
}
console.log(
  "[migrate] DATABASE_URL is set — Neon path applies schema on first query.",
);
process.exit(0);
