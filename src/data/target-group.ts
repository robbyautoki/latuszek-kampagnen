// ============================================================
// Zielgruppe-Daten: Latuszek Definition vs. Transkript-Realität
// Basierend auf 22 Käufer-Transkripten + 266 Gesamtgesprächen
// ============================================================

export interface IndustryData {
  name: string;
  share: number;
  examples?: string;
}

export interface GapItem {
  dimension: string;
  latuszek: string;
  realitaet: string;
  gapPercent: number;
  gapLabel: string;
  recommendation: string;
}

export interface ExpansionSuggestion {
  title: string;
  potential: "Hoch" | "Mittel-Hoch" | "Mittel" | "Nische";
  reason: string;
  action: string;
  estimatedReach: string;
}

// ──────────────────────────────────────────────
// A) Latuszeks aktuelle Definition
// ──────────────────────────────────────────────

export const currentTargetGroup = {
  position: "GmbH Gesellschafter-Geschäftsführer (GGF)",
  department: "C-Level",
  companySize: "Midmarket, 11–50 Mitarbeiter",
  geography: "Deutschland",
  industries: ["Manufacturing", "Logistics"],
  traits: [
    "Gestandene Familienväter",
    "Langjähriger Geschäftsführer",
    "Steuerlich optimierungsbereit",
    "Frustriert vom eigenen Steuerberater",
    "Hohe monatliche Liquidität / Gewinn",
    "Wenig Zeit für komplexe Eigenlösungen",
    "Offen für digitale Kommunikation & Beratung",
  ],
};

// ──────────────────────────────────────────────
// B) Tatsächliches Käufer-Profil (Transkripte)
// ──────────────────────────────────────────────

export const actualBuyerIndustries: IndustryData[] = [
  { name: "IT / Software / Tech", share: 32, examples: "IT-Beratung, Systemhäuser, Holding-Strukturen" },
  { name: "Bau / Immobilien", share: 23, examples: "Industriebau, Montagebau, PV-Anlagen" },
  { name: "Beratung / Agentur / Marketing", share: 18, examples: "Werbeagenturen, PR, Design" },
  { name: "E-Commerce / Handel", share: 14, examples: "Online-Handel, Nischen-E-Commerce" },
  { name: "Handwerk / Produktion", share: 13, examples: "KfZ, Elektro, Gebäudereinigung" },
];

export const detailedIndustries: string[] = [
  "IT-Dienstleistung & Systemhäuser",
  "Werbeagenturen & Design",
  "Veranstaltungstechnik & Events",
  "Leuchtwerbung & Schilder (B2B)",
  "Industriebau & Montagebau",
  "Elektrotechnik & Nukleartechnik",
  "PV-Anlagen & Elektroinstallation",
  "KfZ-Betriebe & Werkstätten",
  "Gebäudereinigung & Facility",
  "Transport & Logistik",
  "Stempel & Prägung / Nischen-E-Commerce",
  "Dienstleistung (allgemein)",
];

export const actualBuyerProfile = {
  ageRange: "35–55 Jahre",
  companySize: "1–30 Mitarbeiter",
  revenue: "€500K – €5M+",
  companiesPerBuyer: "2–5 GmbHs",
  monthlyInvestment: "€500 – €2.500",
  genderSplit: { male: 77, female: 23 },
  companyTypes: ["GmbH", "UG (haftungsbeschränkt)", "Holding-GmbH", "GbR (Immobilien)"],
  psychographics: [
    "Erfolgsorientiert mit hohem Anspruch an sich selbst",
    "Offen für spezialisierte Beratung, unzufrieden mit Standardlösungen",
    "Langfristig denkend, bereit in Strukturen zu investieren",
    "Frustriert mit reaktivem Steuerberater, wünscht proaktiven Partner",
    "Vertrauensbasiert: entscheidet über Kompetenz, nicht über Preis",
    "Oft bereits private ETF/Aktien-Erfahrung vorhanden",
    "Immobilien als zweites Standbein weit verbreitet",
  ],
  discoveryChannels: [
    { channel: "Social Media / Werbeanzeigen", share: 45 },
    { channel: "YouTube", share: 25 },
    { channel: "Empfehlung / Mundpropaganda", share: 20 },
    { channel: "Instagram", share: 10 },
  ],
};

// ──────────────────────────────────────────────
// C) Gap-Analyse: Definition vs. Realität
// ──────────────────────────────────────────────

export const gapAnalysis: GapItem[] = [
  {
    dimension: "Branchen",
    latuszek: "Manufacturing, Logistics",
    realitaet: "12+ Branchen – IT ist #1 mit 32%",
    gapPercent: 83,
    gapLabel: "83% der Käufer kommen NICHT aus Manufacturing/Logistics",
    recommendation: "Alle Branchen mit GmbH-Geschäftsführern ansprechen, insbesondere IT, Bau und Beratung",
  },
  {
    dimension: "Unternehmensgröße",
    latuszek: "Midmarket, 11–50 Mitarbeiter",
    realitaet: "1–30 Mitarbeiter (Schwerpunkt bei 1–10)",
    gapPercent: 60,
    gapLabel: "Über 60% der Käufer haben weniger als 10 Mitarbeiter",
    recommendation: "Solo-GFs und Kleinstunternehmen (1–10 MA) aktiv in Kampagnen einbeziehen",
  },
  {
    dimension: "Geschlecht",
    latuszek: "Gestandene Familienväter",
    realitaet: "23% der Käufer sind Frauen",
    gapPercent: 23,
    gapLabel: "Fast 1/4 der Käufer wird durch männliche Ansprache ausgeschlossen",
    recommendation: "Geschlechterneutrale Ansprache, Frauen als GF gezielt ansprechen",
  },
  {
    dimension: "Unternehmensform",
    latuszek: "GmbH",
    realitaet: "GmbH, UG, Holding, GbR – diverse Strukturen",
    gapPercent: 35,
    gapLabel: "35% der Käufer haben auch UGs, Holdings oder GbRs",
    recommendation: "UG-Gründer und Holding-Strukturen als erweiterte Zielgruppe aufnehmen",
  },
  {
    dimension: "Lebenssituation",
    latuszek: "Etabliert, langfristig",
    realitaet: "Neugründer, Auswanderer, Scheidungsfälle, Partner-Auskäufe",
    gapPercent: 40,
    gapLabel: "40% der Käufer befinden sich in einer Umbruch-Situation",
    recommendation: "Trigger-Events wie Neugründung, Partnerauskauf oder Scheidung als Anlass nutzen",
  },
];

// ──────────────────────────────────────────────
// D) Erweiterungsvorschläge
// ──────────────────────────────────────────────

export const expansionSuggestions: ExpansionSuggestion[] = [
  {
    title: "IT & Software-Branche priorisieren",
    potential: "Hoch",
    reason: "32% aller Käufer kommen aus IT/Software – die größte Einzelbranche. Oft mit Holding-Strukturen und mehreren GmbHs. Hohe Digital-Affinität = leicht erreichbar über Online-Kanäle.",
    action: "Separate Cold-Email-Kampagne für IT-GFs mit branchenspezifischer Sprache. Betreffzeile: '{{Firmenname}} + Steuerstruktur'. Angle: Holding-Optimierung und ETF-Depot als Tech-affiner Ansatz.",
    estimatedReach: "+40–60% mehr potenzielle Leads",
  },
  {
    title: "Bau & Immobilien-Branche gezielt ansprechen",
    potential: "Hoch",
    reason: "23% der Käufer. Oft zusätzlich private Immobilien-Investments. Synergien mit IAB (Investitionsabzugsbetrag) und Abschreibungen. Hohe Gewinne durch Baukonjunktur.",
    action: "Immobilien-Angle in Kampagnen integrieren. Kombination aus Steueroptimierung und Vermögensaufbau über Immobilien + ETF-Depot betonen.",
    estimatedReach: "+25–35% mehr potenzielle Leads",
  },
  {
    title: "Beratung, Agenturen & Freelancer-GmbHs",
    potential: "Mittel-Hoch",
    reason: "18% der Käufer. Oft 3+ Gesellschafter als GFs mit je eigener Optimierungsmöglichkeit. Multiple GmbHs und Holdingstrukturen verbreitet.",
    action: "Holding-Thematik und '3 GFs = 3x Steuerersparnis' als Messaging-Angle. LinkedIn als primärer Kanal für Agentur-GFs.",
    estimatedReach: "+20–30% mehr potenzielle Leads",
  },
  {
    title: "Kleinstunternehmen (1–10 MA) einbeziehen",
    potential: "Hoch",
    reason: "Viele Käufer haben unter 10 Mitarbeiter, teils sogar Solo-GFs. Oft höhere Gewinnmargen pro Kopf. Die aktuelle Zielgruppe '11–50 MA' schließt diese aus.",
    action: "Messaging anpassen: 'Für jeden GmbH-Geschäftsführer – ob 1 oder 50 Mitarbeiter'. Lead-Listen um Unternehmen mit 1–10 MA erweitern.",
    estimatedReach: "+100–200% mehr Adressen verfügbar",
  },
  {
    title: "Weibliche Geschäftsführerinnen ansprechen",
    potential: "Mittel",
    reason: "23% der tatsächlichen Käufer sind Frauen. Die aktuelle Ansprache ('Familienväter') schließt sie sprachlich aus. Weibliche GFs sind oft besonders loyal und empfehlungsfreudig.",
    action: "Geschlechterneutrale Formulierungen in allen Kampagnen. Mindestens 1 weibliches Testimonial prominent einsetzen. Variable {{Anrede}} konsequent nutzen.",
    estimatedReach: "+15–25% größerer adressierbarer Markt",
  },
  {
    title: "UG-Gründer & Neugründungen (< 5 Jahre)",
    potential: "Mittel",
    reason: "Mehrere Käufer haben UGs oder erst kürzlich gegründete GmbHs. Die 5-Jahres-Regel ist ein natürlicher Trigger-Punkt. Früh starten = exponentiell mehr sparen.",
    action: "Kampagne für Neugründer mit Angle: 'Die ersten 5 Jahre richtig nutzen'. Handelsregister-Neugründungen als Lead-Quelle nutzen.",
    estimatedReach: "+30–50% mehr Leads durch Neugründungen",
  },
  {
    title: "GFs in Umbruch-Situationen gezielt erreichen",
    potential: "Mittel-Hoch",
    reason: "Partnerauskäufe, Scheidungen, Auswanderungspläne – 40% der Käufer befinden sich in einer solchen Umbruchsituation. Diese haben erhöhten Handlungsdruck.",
    action: "Trigger-basierte Ansprache: Handelsregister-Änderungen (GF-Wechsel, Gesellschafter-Austritt) als Lead-Signal nutzen.",
    estimatedReach: "+20% hochqualifizierte Leads mit Dringlichkeit",
  },
  {
    title: "GFs mit bestehenden Versicherungslösungen",
    potential: "Hoch",
    reason: "Fast alle Käufer hatten vorher teure Allianz/Helvetia/R+V-Verträge mit schlechter Performance. Der Vergleich 'alt vs. neu' ist der stärkste Conversion-Trigger.",
    action: "In Kampagnen explizit Vergleich anbieten: 'Wie schneidet Ihre aktuelle Direktversicherung ab?' Rechner oder Vergleichstool als Lead-Magnet.",
    estimatedReach: "+35% höhere Conversion durch konkreten Vergleichswert",
  },
];

// ──────────────────────────────────────────────
// E) Statistiken für die Seite
// ──────────────────────────────────────────────

export const targetGroupStats = {
  buyersAnalyzed: 22,
  totalConversations: 266,
  industriesFound: "12+",
  femalePercentage: "23%",
  outsideTargetGroup: "83%",
  avgMonthlyInvestment: "€1.500",
  avgProfit: "€100K–€200K",
  companySizeMode: "1–10 MA",
};
