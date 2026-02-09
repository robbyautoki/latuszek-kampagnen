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
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich habe mir {{Firmenname}} im Bereich {{Kerngeschaeft}} angesehen und eine Frage: Wissen Sie, wie viel Geld Ihnen jährlich durch fehlende Steuergestaltung entgeht?

Die meisten Geschäftsführer sind überrascht. Unsere Mandanten sparen im Schnitt €73.485 pro Jahr. Durch legale Möglichkeiten, die viele Steuerberater nicht auf dem Schirm haben.

Wäre das interessant für Sie?

Beste Grüße
Justin Latuszek`,
        ps: "Ich habe bisher über 2.000 GmbH-Geschäftsführer bei genau diesem Thema begleitet. Die häufigste Reaktion: \"Warum hat mir das mein Steuerberater nie gesagt?\""
      },
      {
        id: "1.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "Kurze Ergänzung",
        subjectB: "eine zahl zu {{firmenname}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte eine konkrete Zahl nachliefern:

Viele unserer Mandanten wandeln monatlich €500 bis €9.000 aus ihrem Betriebsvermögen in Privatvermögen um. Steuerfrei, ohne Sozialabgaben. Ihr Steuerberater bleibt dabei voll eingebunden.

Einmal aufgesetzt, läuft die Struktur. Ohne Mehraufwand im Tagesgeschäft.

Soll ich Ihnen eine unverbindliche Einschätzung für Ihre Situation schicken?

Beste Grüße
Justin Latuszek`,
        ps: "Ein Mandant aus dem {{Kerngeschaeft}}-Bereich sagte neulich: \"Mein Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür brauchte ich einen Spezialisten.\""
      },
      {
        id: "1.3",
        title: "Breakup",
        timing: "Tag +8",
        subjectA: "Interesse oder Ruhe?",
        subjectB: "letzte frage, {{Vorname}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich melde mich ein letztes Mal.

Ich weiß, als Geschäftsführer ist die Inbox voll. Falls Steueroptimierung gerade kein Thema ist, kein Problem, ich höre auf.

Falls doch: Schauen wir einfach, ob es zu Ihrer Situation passt. Ein kurzes "Ja" reicht. Wenn es nicht passt, sage ich Ihnen das ehrlich.

Beste Grüße
Justin Latuszek`,
        ps: "Allein im letzten Quartal haben 47 Geschäftsführer mit uns gestartet. Übrigens: Wir ersetzen keinen Steuerberater. Wir ergänzen ihn dort, wo er nicht hinkommt."
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
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich arbeite mit GmbH-Geschäftsführern, die jedes Jahr fünfstellige Beträge an Steuern sparen. Legal und ohne Tricks.

Über 2.000 Geschäftsführer nutzen das bereits. Durchschnittlich €73.485 weniger Steuern pro Jahr. Unsere Mandanten bewerten uns mit 4,99 von 5 Sternen bei über 360 Bewertungen.

Wäre das auch für {{Firmenname}} interessant?

Beste Grüße
Justin Latuszek`,
        ps: "Ich bin neugierig: Kommt Ihr Steuerberater proaktiv auf Sie zu mit Vorschlägen zur Vermögensübertragung? Die meisten tun es nicht. Genau da setzen wir an. Nicht als Ersatz, sondern als Ergänzung."
      },
      {
        id: "2.2",
        title: "Follow-up 1",
        timing: "Tag +4",
        subjectA: "€54.000 Ergebnis",
        subjectB: "ein GF aus dem {{Kerngeschaeft}}-Bereich",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte ein konkretes Beispiel teilen:

Ein Geschäftsführer mit drei GmbHs hat angefangen, monatlich €4.500 steuerfrei aus seinem Betriebsvermögen in Privatvermögen zu überführen. Pro Jahr über €54.000, die vorher beim Finanzamt gelandet wären.

Sein Kommentar: "Mein Steuerberater macht gute Buchhaltung. Aber das hier? Dafür brauchte ich einen Spezialisten."

Wäre so ein Ergebnis auch für Sie relevant?

Beste Grüße
Justin Latuszek`,
        ps: "Die Umsetzung ist unkompliziert. Einmal richtig aufgesetzt, läuft es. Ihr Steuerberater bleibt dabei eingebunden. Kein Zusatzaufwand für Sie."
      },
      {
        id: "2.3",
        title: "Breakup",
        timing: "Tag +9",
        subjectA: "Passt nicht? Kein Problem",
        subjectB: "kurzes Update",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich melde mich ein letztes Mal zu diesem Thema.

Ich verstehe, dass nicht jeder Zeitpunkt der richtige ist. Sollte das Thema Steueroptimierung für Ihre GmbH irgendwann relevant werden: Schauen wir einfach, ob es zu Ihrer Situation passt. Ein kurzes "Ja" genügt.

Ansonsten wünsche ich Ihnen weiterhin viel Erfolg mit {{Firmenname}}.

Beste Grüße
Justin Latuszek`,
        ps: "Kleiner Denkanstoß: Unsere Mandanten sparen im Schnitt €73.485 pro Jahr. Das sind über 5 Jahre €367.000 mehr Privatvermögen. Und Ihr bestehender Steuerberater bleibt an Bord."
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
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich stelle GmbH-Geschäftsführern eine Frage, die viele nicht hören wollen:

Ihr Steuerberater macht Ihre Buchhaltung. Aber kümmert er sich proaktiv darum, wie Sie Betriebsvermögen steuerfrei in Privatvermögen überführen?

Das sind zwei komplett verschiedene Dinge. Wie beim Arzt: Allgemeinmediziner und Chirurg. Und genau diese Lücke kostet die meisten GFs zwischen €30.000 und €100.000 pro Jahr.

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
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte meine letzte Nachricht konkreter machen:

Stellen Sie sich vor, Sie entnehmen jeden Monat €500 bis €9.000 aus Ihrer GmbH. Steuerfrei, ohne Sozialabgaben.

Klingt unrealistisch? Über 2.000 Geschäftsführer nutzen genau das bereits. Durchschnittliche Ersparnis: €73.485 im Jahr. Keine 0815-Lösung, sondern individuell auf Ihre GmbH zugeschnitten.

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
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

drei Möglichkeiten, warum ich nichts von Ihnen gehört habe:

1. Sie zahlen wirklich gerne Steuern. (Respekt.)
2. Der Zeitpunkt passt gerade nicht. (Absolut verständlich.)
3. Meine Mails sind im Spam gelandet. (Das wäre schade.)

Falls 2 oder 3: Ein kurzes "Interesse" reicht. Wir schauen dann einfach, ob es zu Ihrer Situation passt.

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
  { rule: "Interest-CTA statt Meeting-CTA", data: "85% der Nicht-Käufer buchen Follow-ups, kommen aber nicht" },
  { rule: "50-100 Wörter", data: "54 = Sweet Spot" },
  { rule: "Steuerberater-Kooperation betonen", data: "76% der Nicht-Käufer scheitern am Steuerberater-Blocker" },
  { rule: "Betreff ≤ 33 Zeichen", data: "65% öffnen auf Mobilgerät" },
  { rule: "\"Schauen wir, ob's passt\"", data: "91% Erfolgsrate in Verkaufsgesprächen" },
  { rule: "1 CTA pro Mail", data: "371% besser als mehrere" },
  { rule: "Chirurg-Positionierung", data: "100% der Käufer bestätigen Spezialist-Bedarf" },
  { rule: "Betriebsvermögen-Sprache", data: "Exakte Sprache aus 266 analysierten Gesprächen" },
];

export const stats = {
  clients: "2.000+",
  avgSavings: "€73.485",
  rating: "4,99/5",
  reviews: "364",
  recommendation: "100%",
};
