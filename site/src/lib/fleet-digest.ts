export type RepoCode =
  | "ST"
  | "CT"
  | "UM"
  | "DD"
  | "AR"
  | "CL"
  | "PS"
  | "shared"
  | "fleet"
  | "other";

export type DigestItem = {
  repo: RepoCode;
  title: string;
  href?: string;
  agent?: string;
};

export type DigestSection = {
  kind: "prs" | "opened" | "closed" | "effort";
  label: string;
  items: DigestItem[];
};

export type DigestDay = {
  date: string;
  summary?: string;
  sections: DigestSection[];
};

export type FleetDigest = {
  generated?: string;
  days: DigestDay[];
  source: string;
};

const REPO_MAP: Record<string, RepoCode> = {
  ST: "ST",
  CT: "CT",
  UM: "UM",
  DD: "DD",
  AR: "AR",
  CL: "CL",
  PS: "PS",
  shared: "shared",
  fleet: "fleet",
  SHARED: "shared",
  FLEET: "fleet",
  CTS: "shared",
  AFL: "fleet",
};

const SECTION_MAP: Record<string, DigestSection["kind"]> = {
  "merged prs": "prs",
  "issues closed": "closed",
  "issues opened": "opened",
  "effort board": "effort",
};

function stripMd(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .trim();
}

function parseItem(line: string): DigestItem | null {
  const raw = line.replace(/^-+\s*/, "").trim();
  if (!raw) return null;

  const linkMatch = raw.match(/\[#(\d+)\]\((https?:\/\/[^)]+)\)/);
  const href = linkMatch?.[2];
  const num = linkMatch?.[1];

  const repoMatch = raw.match(/\*\*(ST|CT|UM|DD|AR|CL|PS|shared|fleet|SHARED|FLEET|CTS|AFL)\*\*/i);
  const repoKey = repoMatch?.[1]?.toUpperCase() ?? "other";
  const repo = REPO_MAP[repoKey] ?? REPO_MAP[repoMatch?.[1] ?? ""] ?? "other";

  // Monet / Renoir / Fable collapse to Claude on personal site badges too
  let agentMatch = raw.match(/`(Monet|Renoir|Fable|Claude|Grok|Codex|Cursor|AG|Gemini)[^`]*`/i);
  let agent = agentMatch?.[1];
  if (agent && /^(monet|renoir|fable)$/i.test(agent)) {
    agent = "Claude";
  }

  let title = raw
    .replace(/\*\*(ST|CT|UM|DD|AR|CL|PS|shared|fleet|SHARED|FLEET|CTS|AFL)\*\*/i, "")
    .replace(/`[^`]+`/g, "")
    .replace(/\[#\d+\]\([^)]+\)/g, num ? `#${num}` : "")
    .replace(/_\(by [^)]+\)_/g, "")
    .replace(/^[:\s—-]+/, "")
    .trim();

  // Surface-level name cleanup for collapsed seats
  title = title
    .replace(/\bMonet\b/gi, "Claude")
    .replace(/\bRenoir\b/gi, "Claude")
    .replace(/\bFable\b/gi, "Claude");

  title = stripMd(title);
  if (!title) return null;

  return { repo, title, href, agent };
}

/** Parse fleet digest.md into structured days (latest-first). Stops after maxDays. */
export function parseFleetDigest(
  md: string,
  source: string,
  maxDays = 5,
): FleetDigest {
  const lines = md.split(/\r?\n/);
  const days: DigestDay[] = [];
  let generated: string | undefined;
  let current: DigestDay | null = null;
  let section: DigestSection | null = null;

  for (const line of lines) {
    if (!generated) {
      const gen = line.match(/Generated\s+(.+?)(?:\s*·|$)/i);
      if (gen) generated = gen[1]?.trim();
    }

    const dayMatch = line.match(/^##\s+(\d{4}-\d{2}-\d{2})\s*$/);
    if (dayMatch) {
      if (current) {
        days.push(current);
        if (days.length >= maxDays) {
          current = null;
          break;
        }
      }
      current = { date: dayMatch[1]!, sections: [] };
      section = null;
      continue;
    }

    if (!current) continue;

    const trimmed = line.trim();
    if (trimmed.startsWith("*") && trimmed.endsWith("*") && trimmed.includes("PR")) {
      current.summary = stripMd(trimmed.replace(/^\*|\*$/g, ""));
      continue;
    }

    const h3 = line.match(/^###\s+(.+)\s*$/);
    if (h3) {
      const label = h3[1]!.trim();
      const kind = SECTION_MAP[label.toLowerCase()] ?? "effort";
      section = { kind, label, items: [] };
      current.sections.push(section);
      continue;
    }

    if (line.startsWith("- ") && section) {
      if (section.items.length >= 40) continue;
      const item = parseItem(line);
      if (item) section.items.push(item);
    }
  }

  if (current && days.length < maxDays) days.push(current);

  return { generated, days, source };
}

export function repoLabel(code: RepoCode): string {
  switch (code) {
    case "ST":
      return "Socratic.Trade";
    case "CT":
      return "Congress.Trade";
    case "UM":
      return "Usage-Monitor";
    case "DD":
      return "DealDex";
    case "AR":
      return "Autorotate";
    case "CL":
      return "ContactLogo";
    case "PS":
      return "Personal-Site";
    case "shared":
      return "congress-trading-shared";
    case "fleet":
      return "ai-fleet-coordinator";
    default:
      return "Repo";
  }
}

export const DIGEST_URL =
  "https://jaywedgeworth22.github.io/ai-fleet-coordinator/digest.md";
