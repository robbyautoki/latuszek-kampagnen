export interface Email {
  id: string;
  title: string;
  timing: string;
  subjectA: string;
  subjectB: string;
  body: string;
  ps: string;
}

export interface Campaign {
  id: number;
  name: string;
  framework: string;
  tone: string;
  angle: string;
  emails: Email[];
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Der Steuer-Weckruf",
    framework: "PAS (Problem, Agitation, Solution)",
    tone: "Seriös, faktenbasiert, auf Augenhöhe",
    angle: "Schmerzpunkt \"zu viel Steuern zahlen\" + konkrete Zahlen",
    emails: [
      {
        id: "1.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{Firmenname}} + Steuern",
        subjectB: "steuerersparnis {{firmenname}}",
        body: `Guten Tag {{Vorname}},

ich habe mir {{Firmenname}} angesehen und eine Frage: Wissen Sie, wie viel Geld Ihnen jährlich durch fehlende Steuergestaltung entgeht?

Die meisten Geschäftsführer sind überrascht. Unsere Mandanten sparen im Schnitt €73.485 pro Jahr. Durch legale Möglichkeiten, die viele Steuerberater nicht auf dem Schirm haben.

Wäre das interessant für Sie?

Beste Grüße
Justin Latuszek`,
        ps: "Ich habe bisher über 2.000 GmbH-Geschäftsführer bei genau diesem Thema begleitet. Die häufigste Reaktion: \"Warum wusste ich das nicht früher?\""
      },
      {
        id: "1.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "Kurze Ergänzung",
        subjectB: "eine zahl zu {{firmenname}}",
        body: `Guten Tag {{Vorname}},

ich wollte eine konkrete Zahl nachliefern:

Viele unserer Mandanten wandeln monatlich €500 bis €9.000 aus ihrem Firmenvermögen in Privatvermögen um. Steuerfrei, ohne Sozialabgaben.

Einmal aufgesetzt, läuft die Struktur. Ohne Mehraufwand im Tagesgeschäft.

Soll ich Ihnen eine unverbindliche Einschätzung für Ihre Situation schicken?

Beste Grüße
Justin Latuszek`,
        ps: "Ein Mandant aus dem {{Branche}}-Bereich sagte neulich: \"Das war die beste finanzielle Entscheidung meiner Karriere als Geschäftsführer.\""
      },
      {
        id: "1.3",
        title: "Breakup",
        timing: "Tag +8",
        subjectA: "Interesse oder Ruhe?",
        subjectB: "letzte frage, {{Vorname}}",
        body: `Guten Tag {{Vorname}},

ich melde mich ein letztes Mal.

Ich weiß, als Geschäftsführer ist die Inbox voll. Falls Steueroptimierung gerade kein Thema ist, kein Problem, ich höre auf.

Falls doch: Ein kurzes "Ja" reicht. Dann schicke ich Ihnen die Details, wie bei Ihrer GmbH eine jährliche Ersparnis im fünfstelligen Bereich möglich wäre.

Beste Grüße
Justin Latuszek`,
        ps: "Allein im letzten Quartal haben 47 Geschäftsführer mit uns gestartet. Manchmal ist es nur eine Mail, die den Unterschied macht."
      }
    ]
  },
  {
    id: 2,
    name: "Der Beweis",
    framework: "BAB (Before, After, Bridge) + Social Proof",
    tone: "Nahbar, persönlich, vertrauensbildend",
    angle: "Erfolgsgeschichten & Bewertungen anderer Geschäftsführer",
    emails: [
      {
        id: "2.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "2.000 GFs wissen mehr",
        subjectB: "was andere GFs anders machen",
        body: `Guten Tag {{Vorname}},

ich arbeite mit GmbH-Geschäftsführern, die jedes Jahr fünfstellige Beträge an Steuern sparen. Legal und ohne Tricks.

Über 2.000 Geschäftsführer nutzen das bereits. Durchschnittlich €73.485 weniger Steuern pro Jahr. Unsere Mandanten bewerten uns mit 4,99 von 5 Sternen bei über 360 Bewertungen.

Wäre das auch für {{Firmenname}} interessant?

Beste Grüße
Justin Latuszek`,
        ps: "Ich bin neugierig: Kennt Ihr Steuerberater das Thema Vermögensübertragung aus der GmbH? Die meisten tun es nicht. Genau da setzen wir an."
      },
      {
        id: "2.2",
        title: "Follow-up 1",
        timing: "Tag +4",
        subjectA: "€54.000 Ergebnis",
        subjectB: "ein GF aus {{Branche}}",
        body: `Guten Tag {{Vorname}},

ich wollte ein konkretes Beispiel teilen:

Ein Geschäftsführer in einer ähnlichen Situation hat angefangen, monatlich €4.500 steuerfrei aus seiner GmbH in Privatvermögen zu überführen. Pro Jahr über €54.000, die vorher beim Finanzamt gelandet wären.

Sein Kommentar: "Warum hat mir das niemand früher gesagt?"

Wäre so ein Ergebnis auch für Sie relevant?

Beste Grüße
Justin Latuszek`,
        ps: "Die Umsetzung ist unkompliziert. Einmal richtig aufgesetzt, läuft es. Kein Zusatzaufwand im Tagesgeschäft."
      },
      {
        id: "2.3",
        title: "Breakup",
        timing: "Tag +9",
        subjectA: "Passt nicht? Kein Problem",
        subjectB: "kurzes Update",
        body: `Guten Tag {{Vorname}},

ich melde mich ein letztes Mal zu diesem Thema.

Ich verstehe, dass nicht jeder Zeitpunkt der richtige ist. Sollte das Thema Steueroptimierung für Ihre GmbH irgendwann relevant werden: Ein kurzes "Ja" genügt, und ich schicke Ihnen unverbindlich die Infos.

Ansonsten wünsche ich Ihnen weiterhin viel Erfolg mit {{Firmenname}}.

Beste Grüße
Justin Latuszek`,
        ps: "Kleiner Denkanstoß: Unsere Mandanten sparen im Schnitt €73.485 pro Jahr. Das summiert sich über 5 Jahre auf über €367.000 mehr Privatvermögen."
      }
    ]
  },
  {
    id: 3,
    name: "Die Herausforderung",
    framework: "Curiosity Gap / Challenge",
    tone: "Aufmerksamkeitsstark, direkt, herausfordernd",
    angle: "Status Quo in Frage stellen, Denkfehler aufzeigen",
    emails: [
      {
        id: "3.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{Vorname}}, unbequeme Frage",
        subjectB: "eine frage zu {{firmenname}}",
        body: `Guten Tag {{Vorname}},

ich stelle GmbH-Geschäftsführern eine Frage, die viele nicht hören wollen:

Ihr Steuerberater macht Ihre Buchhaltung. Aber kümmert er sich auch darum, wie Sie Firmenvermögen maximal steuerfrei in Privatvermögen überführen?

Das sind zwei komplett verschiedene Dinge. Und genau diese Lücke kostet die meisten GFs zwischen €30.000 und €100.000 pro Jahr.

Wollen Sie wissen, ob das auch auf Sie zutrifft?

Beste Grüße
Justin Latuszek`,
        ps: "Ich habe noch keinen Geschäftsführer getroffen, bei dem diese Lücke nicht existierte. Bei manchen war sie kleiner, bei manchen sechsstellig."
      },
      {
        id: "3.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "Eine Rechnung für Sie",
        subjectB: "€500 bis €9.000 monatlich",
        body: `Guten Tag {{Vorname}},

ich wollte meine letzte Nachricht konkreter machen:

Stellen Sie sich vor, Sie entnehmen jeden Monat €500 bis €9.000 aus Ihrer GmbH. Steuerfrei, ohne Sozialabgaben.

Klingt unrealistisch? Über 2.000 Geschäftsführer nutzen genau das bereits. Durchschnittliche Ersparnis: €73.485 im Jahr.

Soll ich die Rechnung mal für Ihre Situation aufmachen?

Beste Grüße
Justin Latuszek`,
        ps: "Unsere Mandanten bewerten uns mit 4,99 von 5 Sternen (364 Bewertungen). Nicht weil wir nette Leute sind, sondern weil die Zahlen stimmen."
      },
      {
        id: "3.3",
        title: "Breakup",
        timing: "Tag +8",
        subjectA: "Ich gebe auf, {{Vorname}}",
        subjectB: "drei möglichkeiten",
        body: `Guten Tag {{Vorname}},

drei Möglichkeiten, warum ich nichts von Ihnen gehört habe:

1. Sie zahlen wirklich gerne Steuern. (Respekt.)
2. Der Zeitpunkt passt gerade nicht. (Verstehe ich.)
3. Meine Mails sind im Spam gelandet. (Das wäre schade.)

Falls 2 oder 3: Ein kurzes "Interesse" reicht, dann schicke ich Ihnen einmal die Details.

Falls 1: Hut ab. Dann streiche ich Sie von meiner Liste.

Beste Grüße
Justin Latuszek`,
        ps: "Stellen Sie sich vor, Sie hätten in 12 Monaten €73.485 mehr auf Ihrem Privatkonto. Manchmal trennt nur eine Antwort davon."
      }
    ]
  }
];

export const optimizations = [
  { rule: "Mit \"Ich\" starten", data: "+93% Replies (SalesLoft, 6M Mails)" },
  { rule: "PS-Zeile in jeder Mail", data: "Meistgelesener Teil der E-Mail" },
  { rule: "Interest-CTA statt Meeting-CTA", data: "30% vs 15% Response" },
  { rule: "50-100 Wörter", data: "54 = Sweet Spot" },
  { rule: "Max 2-3 kurze Absätze", data: "+58% Reply Rate" },
  { rule: "Betreff ≤ 33 Zeichen", data: "65% öffnen auf Mobilgerät" },
  { rule: "Einfache Sprache", data: "+67% Reply Rate" },
  { rule: "1 CTA pro Mail", data: "371% besser als mehrere" },
];

export const stats = {
  clients: "2.000+",
  avgSavings: "€73.485",
  rating: "4,99/5",
  reviews: "364",
  recommendation: "100%",
};
