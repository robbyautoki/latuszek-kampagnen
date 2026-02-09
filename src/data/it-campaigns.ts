import type { Campaign } from "./campaigns";

export const itCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Der IT-Steuervorteil",
    framework: "PAS (Problem, Agitation, Solution)",
    tone: "Kompetent, lösungsorientiert, direkt",
    angle: "IT-GFs digitalisieren alles, außer ihre Steuerstruktur",
    emails: [
      {
        id: "A.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{Firmenname}} + Steuern",
        subjectB: "steuerfalle bei {{Kerngeschaeft}}?",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich sehe, dass {{Firmenname}} im Bereich {{Kerngeschaeft}} stark aufgestellt ist. Aber wie sieht es mit Ihrer Steuerstruktur aus?

Die meisten IT-Geschäftsführer digitalisieren alles, außer ihre Steuergestaltung. Dabei entgehen ihnen im Schnitt €73.485 pro Jahr. Wir überführen Betriebsvermögen steuerfrei ins Privatvermögen, €500 bis €9.000 monatlich. Ihr Steuerberater bleibt dabei eingebunden.

Wäre das interessant für Sie?

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

ich habe mir {{Firmenname}} im Bereich {{Kerngeschaeft}} angesehen und eine Frage: Wissen Sie, wie viel Geld Ihnen jährlich durch fehlende Steuergestaltung entgeht?

Die meisten IT-Geschäftsführer digitalisieren alles, außer ihre Steuergestaltung. Dabei entgehen ihnen im Schnitt €73.485 pro Jahr. Wir überführen Betriebsvermögen steuerfrei ins Privatvermögen, €500 bis €9.000 monatlich. Ihr Steuerberater bleibt dabei eingebunden.

Wäre das interessant für Sie?

Beste Grüße
Justin Latuszek`,
        ps: "Über 2.000 GmbH-Geschäftsführer nutzen das bereits, auch im {{Kerngeschaeft}}-Bereich. Die häufigste Reaktion: \"Warum hat mir das mein Steuerberater nie gesagt?\""
      },
      {
        id: "A.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "Kurze Ergänzung",
        subjectB: "steuerstruktur digitalisieren?",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte eine konkrete Zahl nachliefern: Viele unserer IT-Mandanten wandeln monatlich €500 bis €9.000 aus ihrem Betriebsvermögen in Privatvermögen um. Steuerfrei, ohne Sozialabgaben.

Einmal aufgesetzt, läuft die Struktur. Ohne Mehraufwand im Tagesgeschäft. Ihr Steuerberater bleibt voll eingebunden.

Soll ich Ihnen eine unverbindliche Einschätzung für Ihre Situation schicken?

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte kurz nachhaken. Haben Sie meine letzte Nachricht gesehen? Viele unserer IT-Mandanten wandeln monatlich €500 bis €9.000 aus ihrem Betriebsvermögen in Privatvermögen um. Steuerfrei, ohne Sozialabgaben.

Einmal aufgesetzt, läuft die Struktur. Ohne Mehraufwand im Tagesgeschäft. Ihr Steuerberater bleibt voll eingebunden.

Soll ich Ihnen eine unverbindliche Einschätzung für Ihre Situation schicken?

Beste Grüße
Justin Latuszek`,
        ps: "Gerade bei {{Kerngeschaeft}} lohnt sich die steuerfreie Überführung besonders. Ein Mandant aus Ihrer Branche sagte neulich: \"Mein Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür brauchte ich einen Spezialisten.\""
      },
      {
        id: "A.3",
        title: "Follow-up 2",
        timing: "Tag +8",
        subjectA: "10 Minuten, {{Vorname}}",
        subjectB: "was liegt bei {{Firmenname}} auf dem tisch?",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

eine konkrete Frage: Wissen Sie, wie viel Betriebsvermögen Sie jeden Monat steuerfrei in Ihr Privatvermögen überführen könnten?

Die meisten IT-Geschäftsführer kennen diese Zahl nicht. Dabei liegt sie im Schnitt zwischen €500 und €9.000 pro Monat. Ich kann Ihnen in 10 Minuten sagen, was bei {{Firmenname}} möglich ist. Kostenlos, unverbindlich.

Ein kurzes "Ja" reicht.

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

ich schreibe Ihnen nochmal, weil ich überzeugt bin, dass bei {{Firmenname}} im {{Kerngeschaeft}}-Bereich Potenzial liegt.

Die meisten IT-Geschäftsführer kennen diese Zahl nicht. Dabei liegt sie im Schnitt zwischen €500 und €9.000 pro Monat. Ich kann Ihnen in 10 Minuten sagen, was bei {{Firmenname}} möglich ist. Kostenlos, unverbindlich.

Ein kurzes "Ja" reicht.

Beste Grüße
Justin Latuszek`,
        ps: "Ihr Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür braucht es einen Spezialisten. Das sagen nicht wir, das sagen unsere 2.000+ Mandanten."
      }
    ]
  },
  {
    id: 2,
    name: "Der Branchen-Insider",
    framework: "BAB (Before, After, Bridge) + Social Proof",
    tone: "Nahbar, vertrauensbildend, branchenspezifisch",
    angle: "Andere GFs aus dem {{Kerngeschaeft}}-Bereich sparen bereits fünfstellig",
    emails: [
      {
        id: "B.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "2.000 GFs wissen mehr",
        subjectB: "gmbh-steuern im {{Kerngeschaeft}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich arbeite mit vielen Geschäftsführern aus dem {{Kerngeschaeft}}-Bereich, die jedes Jahr fünfstellige Beträge an Steuern sparen. Legal und ohne Tricks.

Die Methode: Betriebsvermögen steuerfrei ins Privatvermögen überführen. €500 bis €9.000 monatlich. Über 2.000 GFs nutzen das bereits, mit durchschnittlich €73.485 weniger Steuern pro Jahr.

Wäre das auch für {{Firmenname}} interessant?

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

ich kenne immer mehr Geschäftsführer aus dem {{Kerngeschaeft}}-Bereich, die ihre Steuerlast deutlich senken, und frage mich, ob {{Firmenname}} das auch nutzt.

Die Methode: Betriebsvermögen steuerfrei ins Privatvermögen überführen. €500 bis €9.000 monatlich. Über 2.000 GFs nutzen das bereits, mit durchschnittlich €73.485 weniger Steuern pro Jahr.

Wäre das auch für {{Firmenname}} interessant?

Beste Grüße
Justin Latuszek`,
        ps: "Unsere Mandanten bewerten uns mit 4,99 von 5 Sternen bei über 364 Bewertungen. Nicht weil wir nette Leute sind, sondern weil die Zahlen stimmen."
      },
      {
        id: "B.2",
        title: "Follow-up 1",
        timing: "Tag +4",
        subjectA: "€54.000 Ergebnis",
        subjectB: "ein GF aus dem {{Kerngeschaeft}}-Bereich",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich wollte ein konkretes Beispiel teilen: Ein IT-Geschäftsführer hat angefangen, monatlich €4.500 steuerfrei aus seinem Betriebsvermögen in Privatvermögen zu überführen. Pro Jahr über €54.000, die vorher beim Finanzamt gelandet wären.

Sein Kommentar: "Mein Steuerberater macht gute Buchhaltung. Aber das hier? Dafür brauchte ich einen Spezialisten."

Wäre so ein Ergebnis auch für Sie relevant?

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

ich frage mich, ob Sie schon von dieser Methode wissen: Ein IT-Geschäftsführer hat angefangen, monatlich €4.500 steuerfrei aus seinem Betriebsvermögen in Privatvermögen zu überführen. Pro Jahr über €54.000, die vorher beim Finanzamt gelandet wären.

Sein Kommentar: "Mein Steuerberater macht gute Buchhaltung. Aber das hier? Dafür brauchte ich einen Spezialisten."

Wäre so ein Ergebnis auch für Sie relevant?

Beste Grüße
Justin Latuszek`,
        ps: "Die Umsetzung ist unkompliziert. Einmal richtig aufgesetzt, läuft es. Ihr Steuerberater bleibt dabei eingebunden. Kein Zusatzaufwand für Sie."
      },
      {
        id: "B.3",
        title: "Follow-up 2",
        timing: "Tag +9",
        subjectA: "eine Frage, {{Vorname}}",
        subjectB: "{{Kerngeschaeft}} + steuern sparen",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

ich fasse es kurz: Ein Geschäftsführer aus dem {{Kerngeschaeft}}-Bereich hat mit unserer Methode im ersten Jahr €54.000 steuerfrei in sein Privatvermögen überführt. Sein Steuerberater war eingebunden, kein Zusatzaufwand.

Ich kann Ihnen in 10 Minuten zeigen, ob das auch für {{Firmenname}} funktioniert. Kostenlos, unverbindlich, kein Vertrag.

Interesse?

Beste Grüße
Justin Latuszek`,
        bodyB: `Sehr geehrte{{Anrede}} {{Nachname}},

kurze Frage: Hat Ihr Steuerberater Sie dieses Jahr proaktiv angerufen, um Ihnen zu zeigen, wie Sie Betriebsvermögen steuerfrei verschieben?

Falls nicht, geht es Ihnen wie 9 von 10 GmbH-Geschäftsführern. Ich kann Ihnen in 10 Minuten zeigen, ob das auch für {{Firmenname}} funktioniert. Kostenlos, unverbindlich, kein Vertrag.

Interesse?

Beste Grüße
Justin Latuszek`,
        ps: "364 Bewertungen, 4,99 von 5 Sternen. Nicht weil wir nette Leute sind, sondern weil die Ergebnisse stimmen."
      }
    ]
  },
  {
    id: 3,
    name: "Newcopy",
    framework: "Direct Response",
    tone: "Casual, direkt, ohne Umwege",
    angle: "Provokante Fragen + Permission-based Closing",
    emails: [
      {
        id: "C.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{Vorname}}, kurzer Test",
        subjectB: "{{Vorname}}, kurzer test",
        body: `{{Vorname}}, eine Frage:

Hat Ihr Steuerberater Sie dieses Jahr proaktiv angerufen, um Ihnen zu zeigen, wie Sie Betriebsvermögen steuerfrei in Privatvermögen verschieben?

Falls ja, top, Mail löschen. Falls nein, dann geht es Ihnen wie 9 von 10 GmbH-Geschäftsführern. Und das kostet im Schnitt 70k pro Jahr.

Ich sage Ihnen in 10 Minuten, was bei Ihnen möglich ist. Kostenlos, kein Haken.

Kurzes "Ja" reicht. Kurzes "Nein" auch, ist Ihr Geld, nicht meins.

Justin`,
        ps: ""
      },
      {
        id: "C.2",
        title: "Follow-up 1",
        timing: "Tag +2",
        subjectA: "{{Vorname}}, blinder Fleck?",
        subjectB: "{{Vorname}}, blinder fleck?",
        body: `{{Vorname}}, eine ehrliche Frage:

Wissen Sie, wie viel Geld jeden Monat in Ihrer GmbH liegen bleibt, das steuerfrei bei Ihnen privat landen könnte?

Falls Sie die Zahl kennen, Hut ab, Mail löschen. Falls nicht, dann ist das genau die Lücke, die GmbH-Geschäftsführer im Schnitt 70k pro Jahr kostet.

10 Minuten, kostenlos, und Sie haben die Zahl.

Wollen Sie's wissen oder lieber nicht?

Justin`,
        ps: ""
      },
      {
        id: "C.3",
        title: "Follow-up 2",
        timing: "Tag +4",
        subjectA: "{{Vorname}}, zwei Fragen",
        subjectB: "{{Vorname}}, zwei fragen",
        body: `{{Vorname}}, beantworten Sie zwei Fragen:

Verschiebt Ihr Steuerberater aktiv Betriebsvermögen in Ihr Privatvermögen?

Wissen Sie, wie viel das pro Jahr wäre?

Wenn Sie beides mit Ja beantworten, alles gut, löschen Sie die Mail. Wenn nicht, dann lassen Sie gerade fünfstellig pro Jahr liegen. Wie über 2.000 Geschäftsführer vor Ihnen.

Ich prüfe das in 10 Minuten. Kostenlos. Kein Gespräch, kein Vertrag.

"Ja" reicht.

Justin`,
        ps: ""
      },
    ]
  }
];
