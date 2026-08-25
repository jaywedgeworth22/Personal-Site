export type Project = {
  key: string;
  name: string;
  blurb: string;
  href: string;
  tags: readonly string[];
  icon?: string;
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
        "A trading console for real broker accounts.  Live at socratictrade.com.",
      href: "https://github.com/jaywedgeworth22/Socratic.Trade",
      tags: ["TypeScript", "Agents", "Markets", "iOS"],
      icon: "/app-icons/st.png",
    },
    {
      key: "ct",
      name: "Congress.Trade",
      blurb:
        "A public dashboard of STOCK Act disclosures from the House, Senate, and Executive Branch.  Web at congress.trade, plus iOS.",
      href: "https://github.com/jaywedgeworth22/Congress.Trade",
      tags: ["Markets", "Data", "Web"],
      icon: "/app-icons/ct.png",
    },
    {
      key: "um",
      name: "Usage Monitor",
      blurb:
        "Tracks usage, balances, credits, and costs across the services you use.  Web at usage.jays.services, plus iOS.",
      href: "https://github.com/jaywedgeworth22/Usage-Monitor",
      tags: ["Ops", "Billing", "Dashboard", "iOS"],
      icon: "/app-icons/um.png",
    },
    {
      key: "dd",
      name: "DealDex",
      blurb:
        "A Pokémon listing desk.  Scan eBay and Mercari Buy It Now singles, then score asks against TCGPlayer and other marketplaces.  Native Android and iOS.  Web at dealdex.net.",
      href: "https://github.com/jaywedgeworth22/DealDex",
      tags: ["Markets", "Android", "iOS", "Web"],
      icon: "/app-icons/dd.png",
    },
    {
      key: "cl",
      name: "ContactLogo",
      blurb:
        "Brand icons for your address book.  You review each match before it is written.  Available on macOS, iOS, and the web.  Site at contactlogo.com.",
      href: "https://github.com/jaywedgeworth22/ContactLogo",
      tags: ["macOS", "iOS", "Web"],
      icon: "/app-icons/cl.png",
    },
    {
      key: "fleet",
      name: "AI Fleet Coordinator",
      blurb:
        "A public daily log of the AI coding team that builds the apps above.",
      href: "https://github.com/jaywedgeworth22/ai-fleet-coordinator",
      tags: ["Agents", "CI", "Ops"],
      icon: "/app-icons/fleet.png",
    },
  ] satisfies Project[],
  appIcons: {
    ST: "/app-icons/st.png",
    CT: "/app-icons/ct.png",
    UM: "/app-icons/um.png",
    DD: "/app-icons/dd.png",
    CL: "/app-icons/cl.png",
    fleet: "/app-icons/fleet.png",
  } as const,
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
