export type TestFlightLink = {
  platform: "iOS" | "macOS" | "Client (iOS)" | "Local (iOS)";
  url: string;
};

export type Project = {
  key: string;
  name: string;
  blurb: string;
  href: string;
  tags: readonly string[];
  icon?: string;
  acronym?: string;
  testflight?: readonly TestFlightLink[];
};

export const site = {
  name: "Jay Wedgeworth",
  /** Legal / formal name for Terms and formal docs */
  legalName: "John Wedgeworth Ⅳ (aka Jay Wedgeworth)",
  entity: "John Wedgeworth Ⅳ (aka Jay Wedgeworth)",
  title: "Developer • Modeler • Trader",
  location: "Houston, TX",
  email: "mail@jays.services",
  /** Primary domain (also served on jaywedgeworth.com) */
  domain: "jays.services",
  domains: ["jays.services", "jaywedgeworth.com"] as const,
  ogImage:
    "https://cdn.myportfolio.com/b0e28c58-4665-4144-92af-be86ffe7c576/580ae635-0852-46ab-93a9-0b63612c9488_rwc_0x0x1289x864x1289.png?h=ee5eb6a7bc277f48f2c0c473556d4d06",
  tagline: "Building agentic trading systems with multi-agent engineering fleets.",
  about: [
    "Recent work includes developing applications for market analysis, agentic trading, optimizing API/LLM usage, and AI fleet coordination.",
    "Earlier work included 3D photogrammetry, aerial videography, managing construction projects with a SpaceX contractor, municipal lobbying and government relations, VoIP communication, and assisting the Visual Impairment and Intracranial Pressure team at NASA.",
    "Studied medicine at UTHealth San Antonio School of Medicine and UTRGV, public health at UTHealth Houston and George Washington University, and biochemistry at Baylor University.",
  ],
  social: [
    { id: "github", label: "GitHub", href: "https://github.com/jaywedgeworth22" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/JayWedgeworth" },
    {
      id: "doximity",
      label: "Doximity",
      href: "https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view",
    },
    { id: "sketchfab", label: "Sketchfab", href: "https://sketchfab.com/Spaceport3D" },
    { id: "vimeo", label: "Vimeo", href: "http://vimeo.com/Advocacy" },
    { id: "facebook", label: "Facebook", href: "https://facebook.com/JayWedgeworth" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/JayWedgeworth" },
    { id: "x", label: "X", href: "https://twitter.com/JayWedgeworth" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/spaceport3d" },
    { id: "email", label: "Email", href: "mailto:mail@jays.services" },
  ],
  projects: [
    {
      key: "st",
      name: "Socratic Trade",
      blurb:
        "Agentic trading console for Alpaca, Tradier, and Robinhood — real broker paper/sandbox and live accounts.  Live at SocraticTrade.com, plus iOS.",
      href: "https://github.com/jaywedgeworth22/Socratic.Trade",
      tags: ["TypeScript", "Agents", "Markets", "iOS"],
      icon: "/app-icons/st.png",
      acronym: "ST",
      testflight: [
        { platform: "iOS", url: "https://testflight.apple.com/join/nUPgpE4c" },
      ],
    },
    {
      key: "ct",
      name: "Congress.Trade",
      blurb:
        "Public STOCK Act disclosures from the House, Senate, and Executive Branch.  Live at Congress.Trade, plus iOS.",
      href: "https://github.com/jaywedgeworth22/Congress.Trade",
      tags: ["Markets", "Data", "Web", "iOS"],
      icon: "/app-icons/ct.png",
      acronym: "CT",
      testflight: [
        { platform: "iOS", url: "https://testflight.apple.com/join/VNUEU6Ge" },
      ],
    },
    {
      key: "um",
      name: "Usage Monitor",
      blurb:
        "Tracks API usage, balances, credits, and costs via poller snapshots and OTLP metrics.  Live at usage.jays.services, plus iOS.",
      href: "https://github.com/jaywedgeworth22/Usage-Monitor",
      tags: ["Ops", "Billing", "Dashboard", "iOS"],
      icon: "/app-icons/um.png",
      acronym: "UM",
      testflight: [
        { platform: "Client (iOS)", url: "https://testflight.apple.com/join/KPq42UrC" },
        { platform: "Local (iOS)", url: "https://testflight.apple.com/join/YXZGGeUs" },
      ],
    },
    {
      key: "dd",
      name: "DealDex.net",
      blurb:
        "Pokémon listing desk scoring eBay and Mercari Buy It Now singles against TCGPlayer and other marketplaces.  Native Android and iOS, web at DealDex.net.",
      href: "https://github.com/jaywedgeworth22/DealDex",
      tags: ["Markets", "Android", "iOS", "Web"],
      icon: "/app-icons/dd.png",
      acronym: "DD",
    },
    {
      key: "ar",
      name: "Autorotate.Codes",
      blurb:
        "Zero-plaintext multi-platform secret rotation and credential lifecycle across web, iOS, macOS, and Android.  Web at Autorotate.Codes.",
      href: "https://github.com/jaywedgeworth22/Autorotate",
      tags: ["Security", "macOS", "iOS", "Crypto"],
      icon: "/app-icons/ar.png",
      acronym: "AR",
      testflight: [
        { platform: "iOS", url: "https://testflight.apple.com/join/bZ7vntkJ" },
        { platform: "macOS", url: "https://testflight.apple.com/join/5yDXA8Vk" },
      ],
    },
    {
      key: "cl",
      name: "ContactLogo",
      blurb:
        "Brand icons for your address book with review-first logo matching.  Native macOS, iOS, Android, and web at ContactLogo.com.",
      href: "https://github.com/jaywedgeworth22/ContactLogo",
      tags: ["macOS", "iOS", "Android", "Web"],
      icon: "/app-icons/cl.png",
      acronym: "CL",
      testflight: [
        { platform: "iOS", url: "https://testflight.apple.com/join/HRzFDeA1" },
        { platform: "macOS", url: "https://testflight.apple.com/join/xsPB27gf" },
      ],
    },
    {
      key: "ps",
      name: "Personal Site",
      blurb:
        "Personal portfolio site and live agent activity surface at jays.services.",
      href: "https://github.com/jaywedgeworth22/Personal-Site",
      tags: ["TypeScript", "Vite", "Web"],
      icon: "/app-icons/ps.png",
      acronym: "PS",
    },
    {
      key: "shared",
      name: "congress-trading-shared",
      blurb:
        "Shared TypeScript contracts, Zod schemas, constants, and utilities for cross-app integration (shared dependency).",
      href: "https://github.com/jaywedgeworth22/congress-trading-shared",
      tags: ["TypeScript", "Zod", "Cross-App", "Package"],
      acronym: "CTS",
    },
    {
      key: "fleet",
      name: "AI Fleet Coordinator",
      blurb:
        "Mac-hosted multi-agent coding fleet coordination: live board at mac.jays.services, Slack #agent-sync, daily activity digests at activity.jays.services.",
      href: "https://github.com/jaywedgeworth22/ai-fleet-coordinator",
      tags: ["Agents", "CI", "Ops"],
      icon: "/app-icons/fleet.png",
      acronym: "AFC",
    },
    {
      key: "bf",
      name: "BotFleet.app",
      blurb:
        "Agent desktop companion and local runtime manager.  Native macOS and iOS.",
      href: "https://github.com/jaywedgeworth22/BotFleet",
      tags: ["macOS", "iOS", "Agents"],
      icon: "/app-icons/fleet.png",
      acronym: "BF",
      testflight: [
        { platform: "iOS", url: "https://testflight.apple.com/join/ER6sPNMh" },
        { platform: "macOS", url: "https://testflight.apple.com/join/cQnDtFse" },
      ],
    },
    {
      key: "ops",
      name: "Fleet Ops",
      blurb:
        "Private fleet infrastructure operations, host inventory, and service orchestration.",
      href: "https://github.com/jaywedgeworth22/fleet-ops",
      tags: ["Ops", "Infra"],
      acronym: "OPS",
    },
  ] satisfies Project[],
  appIcons: {
    ST: "/app-icons/st.png",
    CT: "/app-icons/ct.png",
    UM: "/app-icons/um.png",
    DD: "/app-icons/dd.png",
    AR: "/app-icons/ar.png",
    CL: "/app-icons/cl.png",
    PS: "/app-icons/ps.png",
    CTS: "/app-icons/fleet.png",
    AFC: "/app-icons/fleet.png",
    BF: "/app-icons/fleet.png",
    OPS: "/app-icons/fleet.png",
    fleet: "/app-icons/fleet.png",
  } as const,
  testflight: [
    {
      name: "ContactLogo (iOS)",
      appName: "ContactLogo",
      platform: "iOS",
      url: "https://testflight.apple.com/join/HRzFDeA1",
      icon: "/app-icons/cl.png",
      blurb: "Brand icons for address book contacts.",
    },
    {
      name: "ContactLogo for Mac",
      appName: "ContactLogo",
      platform: "macOS",
      url: "https://testflight.apple.com/join/xsPB27gf",
      icon: "/app-icons/cl.png",
      blurb: "Native macOS menu bar and batch contact logo updater.",
    },
    {
      name: "Autorotate.Codes (iOS)",
      appName: "Autorotate",
      platform: "iOS",
      url: "https://testflight.apple.com/join/bZ7vntkJ",
      icon: "/app-icons/ar.png",
      blurb: "Zero-plaintext credential rotation on mobile.",
    },
    {
      name: "Autorotate for Mac",
      appName: "Autorotate",
      platform: "macOS",
      url: "https://testflight.apple.com/join/5yDXA8Vk",
      icon: "/app-icons/ar.png",
      blurb: "Native macOS secret manager and rotation client.",
    },
    {
      name: "Socratic Trade (iOS)",
      appName: "Socratic Trade",
      platform: "iOS",
      url: "https://testflight.apple.com/join/nUPgpE4c",
      icon: "/app-icons/st.png",
      blurb: "Agentic trading console for broker sandbox and live.",
    },
    {
      name: "Congress.Trade (iOS)",
      appName: "Congress.Trade",
      platform: "iOS",
      url: "https://testflight.apple.com/join/VNUEU6Ge",
      icon: "/app-icons/ct.png",
      blurb: "Capitol Hill STOCK Act disclosures and trade tracker.",
    },
    {
      name: "Usage Client Monitor (iOS)",
      appName: "Usage Monitor",
      platform: "iOS",
      url: "https://testflight.apple.com/join/KPq42UrC",
      icon: "/app-icons/um.png",
      blurb: "Mobile dashboard for API costs, credits, and usage.",
    },
    {
      name: "Usage Local Monitor (iOS)",
      appName: "Usage Monitor",
      platform: "iOS",
      url: "https://testflight.apple.com/join/YXZGGeUs",
      icon: "/app-icons/um.png",
      blurb: "Local machine usage and daemon metric telemetry.",
    },
    {
      name: "BotFleet (iOS)",
      appName: "BotFleet",
      platform: "iOS",
      url: "https://testflight.apple.com/join/ER6sPNMh",
      icon: "/app-icons/fleet.png",
      blurb: "Multi-agent coding fleet status and companion app.",
    },
    {
      name: "BotFleet for Mac",
      appName: "BotFleet",
      platform: "macOS",
      url: "https://testflight.apple.com/join/cQnDtFse",
      icon: "/app-icons/fleet.png",
      blurb: "Native macOS agent desktop runner and workspace manager.",
    },
  ] as const,
  media: {
    sketchfab:
      "https://sketchfab.com/models/33cd23b2245b422e926b37d2172e3e4e/embed",
    youtube: "https://www.youtube.com/embed/GkrkEgaQqcg",
  },
  fleet: {
    html: "https://jaywedgeworth22.github.io/ai-fleet-coordinator/",
    markdown: "https://jaywedgeworth22.github.io/ai-fleet-coordinator/digest.md",
    icsDaily:
      "https://jaywedgeworth22.github.io/ai-fleet-coordinator/calendar/daily-digest.ics",
    icsCommits:
      "https://jaywedgeworth22.github.io/ai-fleet-coordinator/calendar/agent-activity.ics",
  },
} as const;

export type SocialId = (typeof site.social)[number]["id"];
