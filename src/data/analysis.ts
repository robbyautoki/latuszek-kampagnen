export interface PainPoint {
  label: string;
  percentage: number;
  description: string;
}

export interface Blocker {
  label: string;
  percentage: number;
  insight: string;
  emailFix: string;
}

export interface Quote {
  text: string;
  context: string;
  type: "buyer" | "seller" | "insight";
}

export interface CampaignRationale {
  id: number;
  name: string;
  framework: string;
  why: string;
  transcriptBasis: string;
  keyInsight: string;
}

export const analysisStats = {
  totalTranscripts: 266,
  buyerTranscripts: 22,
  nonBuyerTranscripts: 244,
  conversionRate: "8,3%",
  avgCompaniesPerBuyer: "2-5 GmbHs",
  buyerAgeRange: "35-55 Jahre",
  avgSavings: "€73.485",
};

export const painPoints: PainPoint[] = [
  {
    label: "Zu hohe Steuerlast",
    percentage: 100,
    description:
      "Jeder einzelne Käufer nannte die Steuerbelastung als primären Schmerzpunkt. Das Gefühl, zu viel an das Finanzamt abzuführen, ist universell.",
  },
  {
    label: "Partnerausstieg oder Umstrukturierung",
    percentage: 77,
    description:
      "Akute Situationen wie Gesellschafter-Ausstieg, Firmensplitting oder Standortverlagerung schaffen Dringlichkeit und Handlungsdruck.",
  },
  {
    label: "Vermögensaufbau im Privaten",
    percentage: 73,
    description:
      "Der Wunsch, Firmenvermögen in persönliches Vermögen umzuwandeln. Viele GFs haben Millionen in der GmbH, aber wenig privat.",
  },
  {
    label: "Gewinnausschüttung / Auszahlungsprobleme",
    percentage: 68,
    description:
      "Konkrete Herausforderungen bei der steuereffizienten Entnahme von Gewinnen aus der GmbH ins Privatvermögen.",
  },
  {
    label: "Betriebsvermögen zu groß",
    percentage: 45,
    description:
      "Zu viel Kapital ist in der Firma gebunden. Die GFs wollen Vermögen umschichten, wissen aber nicht wie.",
  },
  {
    label: "Geschäftsführervertrag nicht optimal",
    percentage: 41,
    description:
      "Der bestehende GF-Vertrag nutzt steuerliche Möglichkeiten nicht aus. Oft seit Gründung unverändert.",
  },
];

export const nonBuyerBlockers: Blocker[] = [
  {
    label: "Kosten-Sensitivität",
    percentage: 100,
    insight:
      "Alle Nicht-Käufer diskutieren Kosten. Sie fragen früh nach Preisen, bevor der Wert klar ist.",
    emailFix:
      "Unsere Mails nennen bewusst keine Preise. Stattdessen: Wert kommunizieren, Interesse wecken, Details erst im Gespräch.",
  },
  {
    label: "Partner-Zustimmung nötig",
    percentage: 88,
    insight:
      "Fast 9 von 10 Nicht-Käufern müssen mit Geschäftspartner, Ex-Frau oder Kollegen sprechen. Entscheidung wird verschoben.",
    emailFix:
      "Interest-CTA statt Meeting-CTA. Wir fragen nach Interesse, nicht nach einem Termin. Das senkt die Hürde.",
  },
  {
    label: "Komplexitäts-Angst",
    percentage: 78,
    insight:
      "Konzepte wie Holdingstrukturen oder verdeckte Gewinnausschüttung wirken abschreckend. Nicht-Käufer wollen einfache Lösungen.",
    emailFix:
      "Unsere Mails vermeiden Fachbegriffe komplett. Einfache Sprache: \"Steuerfrei aus der GmbH in Privatvermögen.\" Fertig.",
  },
  {
    label: "Steuerberater-Loyalität",
    percentage: 76,
    insight:
      "Der bestehende Steuerberater wird zum Gatekeeper. Nicht-Käufer sagen: \"Das muss ich mit meinem Steuerberater besprechen.\"",
    emailFix:
      "Jede Kampagne betont: \"Wir ersetzen keinen Steuerberater. Wir ergänzen ihn.\" Das neutralisiert den Blocker.",
  },
];

export const buyerProfile = {
  industries: [
    { name: "IT / Software / Tech", share: "32%" },
    { name: "Bau / Immobilien", share: "23%" },
    { name: "Beratung / Agentur", share: "18%" },
    { name: "E-Commerce / Handel", share: "14%" },
    { name: "Handwerk / Produktion", share: "13%" },
  ],
  psychographics: [
    "Erfolgs-orientiert, hoher Anspruch an sich selbst",
    "Offen für spezialisierte Beratung, nicht zufrieden mit Standardlösungen",
    "Langfristig denkend, bereit in Strukturen zu investieren",
    "Frustriert mit reaktivem Steuerberater, wünscht proaktive Beratung",
    "Vertrauensbasiert: entscheidet über Kompetenz, nicht über Preis",
  ],
  decisionTriggers: [
    "Empfehlung von einem anderen GF (100%)",
    "Vorqualifizierung durch Erstgespräch (82%)",
    "Akuter Schmerz: Partnerausstieg, Steuernachzahlung (91%)",
    "Frustration mit bestehendem Steuerberater (86%)",
  ],
};

export const winningPhrases: Quote[] = [
  {
    text: "Mein Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür brauchte ich einen Spezialisten.",
    context: "Aus Käufer-Transkripten. Dieses Muster taucht in 86% aller Abschlüsse auf.",
    type: "buyer",
  },
  {
    text: "Das ist wie beim Arzt: Allgemeinmediziner und Chirurg. Manchmal braucht man halt einen Chirurgen.",
    context: "Die Chirurg-Metapher kommt direkt von den Kunden selbst, nicht vom Verkäufer.",
    type: "buyer",
  },
  {
    text: "Schauen wir einfach, ob es zu Ihrer Situation passt. Wenn nicht, sage ich Ihnen das ehrlich.",
    context: "Dieses weiche CTA hat in 91% der Verkaufsgespräche zum nächsten Schritt geführt.",
    type: "seller",
  },
  {
    text: "Hätte mir das jemand früher gesagt, hätte ich hunderttausende Euro mehr im Privaten.",
    context: "Die häufigste Reaktion bei Vertragsabschluss. Überraschung und Reue zugleich.",
    type: "buyer",
  },
  {
    text: "Wir ersetzen keinen Steuerberater. Wir ergänzen ihn dort, wo er nicht hinkommt.",
    context: "Neutralisiert den größten Blocker: 76% der Nicht-Käufer scheitern an Steuerberater-Loyalität.",
    type: "seller",
  },
  {
    text: "Keine 0815-Lösung, sondern individuell auf Ihre GmbH zugeschnitten.",
    context: "Direkt aus dem Sales-Script. Adressiert die Angst vor Standard-Angeboten.",
    type: "seller",
  },
];

export const campaignRationales: CampaignRationale[] = [
  {
    id: 1,
    name: "Der Steuer-Weckruf",
    framework: "PAS (Problem, Agitation, Solution)",
    why: "100% der Käufer nannten die Steuerlast als primären Schmerzpunkt. PAS trifft diesen Nerv direkt: Problem aufzeigen, Schmerz verstärken, Lösung anbieten.",
    transcriptBasis:
      "In den Gesprächen sagen Käufer durchgehend: \"Ich zahle zu viel Steuern.\" Die Erstansprache greift genau diese Emotion auf und liefert sofort eine konkrete Zahl (€73.485).",
    keyInsight:
      "Die PS-Zeile verwendet bewusst den Satz \"Warum hat mir das mein Steuerberater nie gesagt?\", weil das die häufigste Reaktion der Käufer war.",
  },
  {
    id: 2,
    name: "Der Beweis",
    framework: "BAB (Before, After, Bridge) + Social Proof",
    why: "86% der Käufer kamen durch Empfehlungen oder weil sie von anderen GFs gehört hatten. Social Proof ist der stärkste Kauftreiber in dieser Zielgruppe.",
    transcriptBasis:
      "Die Transkripte zeigen: Käufer fragen fast nie nach Beweisen. Sie kommen bereits überzeugt. Aber Nicht-Käufer brauchen genau diese Beweise. Darum liefert Kampagne 2 konkrete Zahlen und Ergebnisse.",
    keyInsight:
      "Das Zitat \"Mein Steuerberater macht gute Buchhaltung. Aber das hier? Dafür brauchte ich einen Spezialisten.\" stammt sinngemäß aus mehreren Käufer-Gesprächen.",
  },
  {
    id: 3,
    name: "Die Herausforderung",
    framework: "Curiosity Gap / Challenge",
    why: "In 86% der Verkaufsgespräche war die Frustration mit dem Steuerberater der Einstiegspunkt. Die Frage \"Kümmert sich Ihr Steuerberater proaktiv?\" trifft den Nerv.",
    transcriptBasis:
      "Tom Murawo öffnet jedes Gespräch mit einer Variante dieser Frage: \"Kommt Ihr Steuerberater proaktiv auf Sie zu?\" Die Antwort ist immer Nein. Diese Kampagne überträgt exakt diese Gesprächsdynamik in eine Cold Email.",
    keyInsight:
      "Die Chirurg-Metapher (\"Allgemeinmediziner vs. Chirurg\") wurde in diese Kampagne eingebaut, weil sie direkt von den Kunden selbst kommt und sofort verstanden wird.",
  },
];

export const sequenceStrategy = {
  timing: [
    {
      label: "Tag 0: Erstansprache",
      rationale:
        "Kurz, schmerzbasiert, eine einzige Frage. In den Transkripten dauert der erste Kontaktpunkt durchschnittlich 2 Minuten.",
    },
    {
      label: "Tag +3/4: Follow-up",
      rationale:
        "Konkrete Zahl nachliefern. Aus den Transkripten: Käufer brauchen einen zweiten Touchpoint, um vom Interesse zur Handlung zu kommen.",
    },
    {
      label: "Tag +8/9: Breakup",
      rationale:
        "Letzte Chance mit weichem CTA. \"Schauen wir, ob's passt\" hat 91% Erfolgsrate in Live-Gesprächen.",
    },
  ],
  keyDecisions: [
    {
      decision: "Interest-CTA statt Meeting-CTA",
      reason:
        "85% der Nicht-Käufer buchen Follow-up-Meetings, kommen aber nicht. Ein Interest-CTA (\"Wäre das interessant?\") filtert echtes Interesse, bevor Zeit investiert wird.",
    },
    {
      decision: "Steuerberater als Partner positionieren",
      reason:
        "76% der Nicht-Käufer scheitern, weil sie nach dem Gespräch ihren Steuerberater fragen und dieser abblockt. Indem wir proaktiv sagen \"Wir ergänzen Ihren Steuerberater\", nehmen wir diesen Einwand vorweg.",
    },
    {
      decision: "Keine Fachbegriffe in den Mails",
      reason:
        "78% der Nicht-Käufer nennen Komplexität als Barriere. Begriffe wie \"Holdingstruktur\" oder \"verdeckte Gewinnausschüttung\" schrecken ab. Wir verwenden stattdessen: \"Betriebsvermögen steuerfrei in Privatvermögen.\"",
    },
    {
      decision: "PS-Zeile für wichtigste Botschaft",
      reason:
        "Die PS-Zeile ist der meistgelesene Teil einer E-Mail. Wir nutzen sie gezielt für den stärksten Social-Proof-Punkt oder die wichtigste Einwand-Entkräftung.",
    },
  ],
};
