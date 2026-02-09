// ============================================================
// Nächste Steps: Lead-Generierung, Kampagnen-Zuordnung & Rollout
// Basierend auf latuszek-cold-email-kampagnen.md + antworten-latuszek.md
// ============================================================

// ──────────────────────────────────────────────
// A) Erweiterte Zielgruppe (Empfehlung)
// ──────────────────────────────────────────────

export interface IndustryTarget {
  name: string;
  priority: "Hoch" | "Mittel" | "Basis";
  share: string;
  note?: string;
}

export const expandedTargetGroup = {
  position: "GmbH/UG Gesellschafter-Geschäftsführer",
  companySize: "1–50 Mitarbeiter",
  geography: "Deutschland (DACH)",
  revenue: "€500K – €5M+",
  industries: [
    { name: "IT / Software / Tech", priority: "Hoch" as const, share: "32%", note: "Größte Einzelbranche unter Käufern" },
    { name: "Bau / Immobilien", priority: "Hoch" as const, share: "23%", note: "Synergien mit Immobilien-Investments" },
    { name: "Beratung / Agentur / Marketing", priority: "Hoch" as const, share: "18%", note: "Oft multiple GFs pro Firma" },
    { name: "E-Commerce / Handel", priority: "Mittel" as const, share: "14%", note: "Digital-affin, schnelle Entscheider" },
    { name: "Handwerk / Produktion", priority: "Mittel" as const, share: "13%", note: "Hohe Gewinne, wenig Optimierung" },
    { name: "Manufacturing / Logistics", priority: "Basis" as const, share: "—", note: "Bisherige Zielgruppe beibehalten" },
  ],
  companyTypes: ["GmbH", "UG (haftungsbeschränkt)", "Holding-GmbH"],
  traits: [
    "Geschäftsführer & Gesellschafter (mind. 10% Anteil)",
    "Monatlicher Gewinn ab €5.000+",
    "Frustriert mit reaktivem Steuerberater",
    "Offen für spezialisierte Beratung",
    "1–5 Gesellschaften",
  ],
  triggerEvents: [
    { trigger: "Neugründung (< 5 Jahre)", reason: "5-Jahres-Regel als natürlicher Trigger-Punkt" },
    { trigger: "Handelsregister-Änderung", reason: "GF-Wechsel, Gesellschafter-Austritt = Handlungsdruck" },
    { trigger: "Partnerauskauf / Scheidung", reason: "Erhöhter Handlungsdruck, sofortiger Bedarf" },
    { trigger: "Jahresabschluss veröffentlicht", reason: "Bundesanzeiger-Daten für Personalisierung nutzen" },
    { trigger: "Auswanderungspläne", reason: "Wegzugsteuer-Thematik als dringender Hook" },
  ],
};

// ──────────────────────────────────────────────
// B) Lead-Generierung: Quellen & Tools
// ──────────────────────────────────────────────

export interface LeadSource {
  name: string;
  type: "Datenquelle" | "Kanal";
  description: string;
  personalizationAngle: string;
  priority: "Primär" | "Sekundär" | "Ergänzend";
}

export const leadSources: LeadSource[] = [
  {
    name: "Handelsregister",
    type: "Datenquelle",
    description: "GF-Wechsel, Gesellschafter-Austritte, Neugründungen, Kapitalerhöhungen – liefert Trigger-Events in Echtzeit.",
    personalizationAngle: "\"Ich habe die Änderung im Handelsregister gesehen...\"",
    priority: "Primär",
  },
  {
    name: "Bundesanzeiger",
    type: "Datenquelle",
    description: "Veröffentlichte Jahresabschlüsse mit Umsatz, Gewinn, Bilanzsumme – zeigt wirtschaftliche Stärke.",
    personalizationAngle: "\"Ich habe gesehen, dass {{Firmenname}} im letzten Jahr gewachsen ist...\"",
    priority: "Primär",
  },
  {
    name: "LinkedIn",
    type: "Kanal",
    description: "Profilbesuche, Connection Requests, Post-Engagement. Sekundärkanal für Multi-Touch (+287% Response Rate).",
    personalizationAngle: "\"Ich habe Ihren Post über [Thema] gesehen...\"",
    priority: "Primär",
  },
  {
    name: "Unternehmenswebsites",
    type: "Datenquelle",
    description: "Team-Seiten, News, Produkte/Dienstleistungen – für Branchen- und Firmenrecherche.",
    personalizationAngle: "Branchenspezifische Referenz im E-Mail-Opener",
    priority: "Sekundär",
  },
  {
    name: "Google News / Pressemitteilungen",
    type: "Datenquelle",
    description: "Aktuelle Erwähnungen, Auszeichnungen, Expansion – liefert tagesaktuelle Personalisierung.",
    personalizationAngle: "\"Gratulation zu [Ereignis]...\"",
    priority: "Ergänzend",
  },
  {
    name: "XING",
    type: "Kanal",
    description: "Firmenprofile, Mitarbeiterzahlen – besonders stark im deutschen Mittelstand.",
    personalizationAngle: "Unternehmensgröße und Branche verifizieren",
    priority: "Ergänzend",
  },
];

export interface OutreachTool {
  name: string;
  type: string;
  note: string;
  features: string[];
}

export const outreachTools: OutreachTool[] = [
  {
    name: "Woodpecker.co",
    type: "E-Mail-Outreach",
    note: "Beste DSGVO-Compliance für DACH. Empfohlen.",
    features: ["Auto Follow-ups", "A/B-Tests", "Deliverability-Monitoring", "DSGVO-konform"],
  },
  {
    name: "Instantly.ai",
    type: "E-Mail-Outreach",
    note: "Budget-Option ($37/Monat), unlimited Accounts.",
    features: ["Unlimited E-Mail-Accounts", "Lead-Warmup", "Sequenzen", "Analytics"],
  },
  {
    name: "Warmy.io",
    type: "Domain-Warmup",
    note: "KI-basiertes Warmup mit deutscher Sprachunterstützung.",
    features: ["Automatisches Warmup", "Deliverability-Score", "Deutsche ISP-Optimierung"],
  },
];

// ──────────────────────────────────────────────
// C) Kampagnen-Zuordnung nach Segment
// ──────────────────────────────────────────────

export interface CampaignMapping {
  campaignId: number;
  campaignName: string;
  framework: string;
  bestFor: string[];
  idealSegments: string[];
  warmthLevel: "Kalt" | "Lauwarm" | "Warm";
  expectedResponseRate: string;
}

export const campaignMappings: CampaignMapping[] = [
  {
    campaignId: 1,
    campaignName: "Der Steuer-Weckruf",
    framework: "PAS (Problem → Agitation → Solution)",
    bestFor: ["Faktenorientierte GFs", "Erstansprache mit Zahlen", "GFs mit hohem Gewinn"],
    idealSegments: ["IT / Software", "Bau / Immobilien", "Neugründer"],
    warmthLevel: "Kalt",
    expectedResponseRate: "8–12%",
  },
  {
    campaignId: 2,
    campaignName: "Der Beweis",
    framework: "BAB (Before → After → Bridge) + Social Proof",
    bestFor: ["Risikoscheue GFs", "GFs die Partner-Zustimmung brauchen", "Vertrauensbasierte Entscheider"],
    idealSegments: ["Beratung / Agenturen", "Handwerk / Produktion", "Weibliche GFs"],
    warmthLevel: "Lauwarm",
    expectedResponseRate: "10–15%",
  },
  {
    campaignId: 3,
    campaignName: "Die Herausforderung",
    framework: "Curiosity Gap / Challenge",
    bestFor: ["Digital-affine GFs", "Steuerberater-Frustrierte", "Selbstständig-Denkende"],
    idealSegments: ["IT / Software", "E-Commerce", "Kleinstunternehmen (1–10 MA)"],
    warmthLevel: "Kalt",
    expectedResponseRate: "6–10%",
  },
];

// ──────────────────────────────────────────────
// D) Multi-Channel-Sequenz (10 Tage)
// ──────────────────────────────────────────────

export interface SequenceStep {
  day: number;
  channel: "LinkedIn" | "E-Mail";
  action: string;
  detail: string;
}

export const multiChannelSequence: SequenceStep[] = [
  { day: 0, channel: "LinkedIn", action: "Profil besuchen", detail: "Sichtbar das Profil ansehen – erzeugt Neugier beim Prospect." },
  { day: 1, channel: "LinkedIn", action: "Connection Request", detail: "Kurze Nachricht: 'Verbinde mich gerne mit GmbH-Geschäftsführern aus {{Branche}}.'" },
  { day: 2, channel: "E-Mail", action: "Mail 1 – Erstansprache", detail: "Gewählte Kampagne starten. LinkedIn dabei NICHT erwähnen." },
  { day: 5, channel: "E-Mail", action: "Mail 2 – Follow-up", detail: "Neuer Wert/Angle. Nicht auf Mail 1 referenzieren." },
  { day: 7, channel: "LinkedIn", action: "Post liken/kommentieren", detail: "Sichtbarkeit erhöhen ohne direkte Nachricht." },
  { day: 10, channel: "E-Mail", action: "Mail 3 – Breakup", detail: "Letzte Mail mit offenem Ende. 'Kein Problem falls nicht relevant.'" },
];

// ──────────────────────────────────────────────
// E) Technisches Setup & Domain-Warmup
// ──────────────────────────────────────────────

export interface WarmupWeek {
  week: number;
  volume: string;
  mix: string;
  note: string;
}

export const warmupPlan: WarmupWeek[] = [
  { week: 1, volume: "10–20 Mails/Tag", mix: "100% warme Kontakte", note: "Nur interne/bekannte Kontakte anschreiben" },
  { week: 2, volume: "30–50 Mails/Tag", mix: "80% warm, 20% Prospects", note: "Erste kalte Mails einfügen" },
  { week: 3, volume: "75–100 Mails/Tag", mix: "50/50", note: "Volumen weiter steigern" },
  { week: 4, volume: "150–200 Mails/Tag", mix: "20% warm, 80% Prospects", note: "Volles Kampagnen-Volumen erreicht" },
];

export interface ChecklistItem {
  item: string;
  description: string;
}

export const deliverabilityChecklist: ChecklistItem[] = [
  { item: "Separate Sending-Domain", description: "z.B. mail.latuszek-partner.de – schützt die Hauptdomain" },
  { item: "SPF-Record", description: "Autorisiert den Mailserver zum Versand" },
  { item: "DKIM-Signatur", description: "Kryptographische Signatur für Authentizität" },
  { item: "DMARC-Policy", description: "Regelt Umgang mit fehlgeschlagener Authentifizierung" },
  { item: "Reverse DNS (PTR)", description: "IP-Adresse zeigt zurück auf Domain" },
  { item: "Plain-Text Format", description: "Kein HTML – HTML triggert Spam-Filter in DE" },
  { item: "Professionelles Foto in Signatur", description: "90x90px Headshot, +77% Response Rate" },
];

// ──────────────────────────────────────────────
// F) Timing & Beste Monate
// ──────────────────────────────────────────────

export const timingStrategy = {
  bestMonths: [
    { month: "Oktober", reason: "Jahresend-Planung startet, GFs denken an Steueroptimierung" },
    { month: "November", reason: "Letzter Monat für steuerliche Gestaltungen im laufenden Jahr" },
    { month: "Januar", reason: "Neujahrsvorsätze, Steuererklärung steht an" },
    { month: "Februar", reason: "Steuererklärungssaison in vollem Gange" },
  ],
  avoidMonths: ["Juni–August (Urlaubszeit)", "Dezember (Feiertage)"],
  bestDays: "Dienstag und Mittwoch",
  bestTime: "9:00–11:00 Uhr",
  germanISPNotes: [
    "GMX/Web.de: Max ~60 Mails/Stunde, aggressives Rate-Limiting",
    "T-Online: Strenge Blacklist-Prüfung",
    ".de-Domains werden mehr vertraut als .com bei deutschen Empfängern",
  ],
};

// ──────────────────────────────────────────────
// G) KPIs & erwartete Ergebnisse
// ──────────────────────────────────────────────

export interface KPI {
  metric: string;
  target: string;
  note: string;
}

export const expectedKPIs: KPI[] = [
  { metric: "Open Rate", target: "45–65%", note: "Durch Personalisierung und kurze Betreffs" },
  { metric: "Response Rate", target: "8–15%", note: "Interest-CTA statt Meeting-CTA" },
  { metric: "Positive Response Rate", target: "4–8%", note: "Davon ca. 50% echtes Interesse" },
  { metric: "Meeting Booking Rate", target: "3–5%", note: "Von allen angeschriebenen Kontakten" },
  { metric: "Sales Cycle", target: "~60 Tage", note: "Vom Erstkontakt bis Abschluss" },
  { metric: "Multi-Channel Uplift", target: "+287%", note: "LinkedIn + E-Mail vs. nur E-Mail" },
];

// ──────────────────────────────────────────────
// H) Statistiken für die Seite
// ──────────────────────────────────────────────

export const nextStepsStats = {
  leadSources: "6",
  multiChannelUplift: "+287%",
  salesCycle: "60",
  responseRate: "8–15%",
};
