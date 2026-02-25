import type { Campaign } from "./campaigns";

export const neueCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Die Rechnung",
    framework: "PAS + konkrete Zahlen",
    tone: "Sachlich, faktisch, auf Augenhöhe",
    angle: "Zahlenvergleich: Gehalt (5.800€) vs Holding (6.900€) vs GmbH ETF-Depot (10.000€)",
    emails: [
      {
        id: "N1.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|gehalt vs. etf-depot|10.000€ aus der gmbh|gehalt vs. gmbh etf-depot}}",
        subjectB: "{{RANDOM|3 wege aus der gmbh|{{firmenname}} + etf-depot|gmbh etf-depot {{firmenname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich zeige|ich erkläre|ich rechne}} GmbH-Geschäftsführern {{RANDOM|einen Vergleich|eine Rechnung|eine Gegenüberstellung}} vor, die viele überrascht:

10.000€ aus der GmbH entnehmen. Über Gehalt bleiben 5.800€. Über eine Holding 6.900€. Über ein GmbH ETF-Depot: 10.000€. {{RANDOM|Steuerfrei.|100% steuerfrei.|Komplett steuerfrei.}}

{{RANDOM|Kennen Sie diesen dritten Weg?|Ist Ihnen dieser Weg bekannt?|Nutzen Sie bereits den dritten Weg?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Über 2.000 Geschäftsführer nutzen dieses Konzept bereits. Die häufigste Reaktion: "Warum hat mir das niemand früher gezeigt?"|2.000+ Geschäftsführer nutzen das bereits. Häufigste Reaktion: "Warum hat mir das mein Steuerberater nie gesagt?"|Über 2.000 GFs setzen das um. Die meisten sagen: "Warum wusste ich das nicht früher?"}}`
      },
      {
        id: "N1.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "{{RANDOM|kurze rechnung|eine zahl zu {{firmenname}}|nachtrag zu meiner mail}}",
        subjectB: "{{RANDOM|€500 bis €9.000 monatlich|konkrete zahl für {{firmenname}}|die rechnung für {{firmenname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich wollte die Zahlen konkreter machen|ich wollte eine konkrete Zahl nachliefern|kurz nachgehakt mit einer konkreten Zahl}}:

Viele unserer Mandanten investieren monatlich €500 bis €9.000 aus dem Firmeneinkommen in ETFs, Gold oder Aktien. {{RANDOM|Steuerfrei, als Betriebsausgabe.|Als Betriebsausgabe, steuerfrei.|Komplett steuerfrei als Betriebsausgabe.}} Kein Gehalt, keine Ausschüttung.

{{RANDOM|Soll ich die Rechnung einmal für {{Firmenname}} aufmachen?|Soll ich prüfen, ob das bei {{Firmenname}} funktioniert?|Wäre eine kurze Einschätzung für {{Firmenname}} interessant?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Ein Geschäftsführer aus dem {{Branche}}-Bereich überführt seit 14 Monaten monatlich €4.500 steuerfrei in sein Privatvermögen. Einmal aufgesetzt, null Mehraufwand.|Ein Mandant aus der {{Branche}}-Branche investiert seit über einem Jahr monatlich €4.500 über sein GmbH ETF-Depot. Kein Zusatzaufwand im Tagesgeschäft.|Ein GF aus dem {{Branche}}-Bereich verschiebt seit über einem Jahr monatlich €4.500 steuerfrei ins Privatvermögen. Ohne Mehraufwand.}}`
      },
      {
        id: "N1.3",
        title: "Breakup",
        timing: "Tag +8",
        subjectA: "{{RANDOM|letzte info, {{Vorname}}|drei möglichkeiten|{{Vorname}}, kurze frage}}",
        subjectB: "{{RANDOM|{{Vorname}}, ja oder nein?|letzte nachricht|eine letzte frage, {{Vorname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|drei Gründe|drei Möglichkeiten|drei Varianten}}, warum ich nichts gehört habe:

1. Sie kennen das GmbH ETF-Depot bereits. ({{RANDOM|Dann Hut ab.|Dann super.|Dann alles gut.}})
2. Der Zeitpunkt passt nicht. ({{RANDOM|Verstehe ich.|Absolut verständlich.|Kein Problem.}})
3. Die Mail ist untergegangen. ({{RANDOM|Passiert.|Kann vorkommen.|Kommt vor.}})

Falls 2 oder 3: Ein kurzes "Ja" reicht. {{RANDOM|Dann schicke ich Ihnen den Vergleich für Ihre GmbH.|Dann zeige ich Ihnen, was bei Ihrer GmbH möglich wäre.|Dann prüfe ich das für {{Firmenname}}.}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Auf 5 Jahre gerechnet: Bei €3.000 monatlich steuerfrei sind das €180.000 mehr Privatvermögen. Nur durch den richtigen Weg aus der GmbH.|5-Jahres-Rechnung: €3.000 monatlich steuerfrei = €180.000 mehr Privatvermögen. Selbe GmbH, anderer Weg.|€3.000 monatlich über 5 Jahre = €180.000 mehr Privatvermögen. Über Gehalt wären nur €104.400 angekommen.}}`
      }
    ]
  },
  {
    id: 2,
    name: "Steuerberater vs. Gestalter",
    framework: "Curiosity + Challenge",
    tone: "Direkt, herausfordernd, auf Augenhöhe",
    angle: "Schmerzpunkt: Steuerberater verwaltet nur, gestaltet nicht",
    emails: [
      {
        id: "N2.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|frage zu {{firmenname}}|verwalten oder gestalten?|eine frage an sie, {{Vorname}}}}",
        subjectB: "{{RANDOM|{{firmenname}} + steuergestaltung|eine frage, {{Vorname}}|frage an sie als gf}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich stelle|ich frage}} GmbH-Geschäftsführern eine einfache Frage:

{{RANDOM|Zeigt Ihr Steuerberater Ihnen|Erklärt Ihr Steuerberater Ihnen|Hat Ihr Steuerberater Ihnen gezeigt}}, wie Sie 10.000€ steuerfrei aus der GmbH in Ihr Privatvermögen überführen? Oder macht er {{RANDOM|nur Buchhaltung und Jahresabschluss?|nur die Verwaltung?|nur Buchhaltung?}}

Das sind zwei verschiedene Dinge. Und genau diese Lücke kostet die meisten GFs {{RANDOM|jedes Jahr fünfstellig.|jährlich fünfstellige Beträge.|im Schnitt fünfstellig pro Jahr.}}

{{RANDOM|Wollen Sie den Unterschied sehen?|Soll ich Ihnen den Unterschied zeigen?|Interessiert Sie der Unterschied?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Über Gehalt bleiben von 10.000€ nur 5.800€. Über ein GmbH ETF-Depot: 10.000€. Die meisten Steuerberater kennen den zweiten Weg nicht.|10.000€ über Gehalt = 5.800€. 10.000€ über GmbH ETF-Depot = 10.000€. Selbe GmbH, anderer Weg.|Von 10.000€ Gehalt bleiben 5.800€. Über ein GmbH ETF-Depot bleiben 10.000€. Ihr Steuerberater kennt vermutlich nur den ersten Weg.}}`
      },
      {
        id: "N2.2",
        title: "Follow-up 1",
        timing: "Tag +4",
        subjectA: "{{RANDOM|was {{Branche}}-GFs anders machen|ein mandant, eine zahl|konkretes beispiel}}",
        subjectB: "{{RANDOM|ein gf aus {{Branche}}|ergebnis eines mandanten|fünfstellig pro jahr}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich wollte ein Beispiel nachliefern|ein konkretes Ergebnis|ich wollte konkret werden}}:

Patrick Hayduk, Geschäftsführer eines Systemhauses, sagte nach der Umsetzung: "Ein Steuerberater sorgt dafür, dass alles sauber ist. Ihr schaut, wo man echten Vorteil rausholen kann. Auch für die private Tasche."

Ergebnis: {{RANDOM|Steuerersparnis und Vermögensaufbau im fünfstelligen Bereich. Pro Jahr.|Fünfstellige Steuerersparnis und fünfstelliger Vermögensaufbau pro Jahr.|Jährlich fünfstellig gespart und fünfstellig Privatvermögen aufgebaut.}}

{{RANDOM|Soll ich prüfen, ob das bei Ihrer GmbH funktioniert?|Passt so ein Ergebnis auch zu {{Firmenname}}?|Wäre das auch für {{Firmenname}} relevant?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|4,99 von 5 Sternen bei über 360 Bewertungen. Nicht wegen netter Gespräche, sondern weil die Zahlen stimmen.|364 Bewertungen, 4,99 von 5 Sternen. Die Ergebnisse sprechen für sich.|Über 360 Bewertungen mit 4,99 Sternen. Weil die Zahlen stimmen, nicht weil wir nett sind.}}`
      },
      {
        id: "N2.3",
        title: "Breakup",
        timing: "Tag +9",
        subjectA: "{{RANDOM|passt nicht? kein problem|letzte frage, {{Vorname}}|{{Vorname}}, letzte mail}}",
        subjectB: "{{RANDOM|eine letzte info|kurze frage, {{Vorname}}|{{Vorname}}, ja oder nein?}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich melde mich ein letztes Mal.|letzte Nachricht zu diesem Thema.|ich schreibe Ihnen ein letztes Mal.}}

Falls Steuergestaltung gerade kein Thema ist, kein Problem. Falls doch: Ein kurzes "Ja" reicht. {{RANDOM|Dann zeige ich Ihnen, wie andere Geschäftsführer monatlich €500 bis €9.000 steuerfrei aus der GmbH in ETFs investieren.|Dann prüfe ich, ob das Konzept bei Ihrer GmbH greift.|Dann schicke ich Ihnen die Details, wie das bei {{Firmenname}} aussehen könnte.}}

Ansonsten wünsche ich {{Firmenname}} weiterhin viel Erfolg.

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Mein Vorschlag kostet Sie nichts. Die gebührenfreie Erstprüfung zeigt in 15 Minuten, ob das Konzept bei Ihrer GmbH greift.|Die Erstprüfung ist gebührenfrei und dauert 15 Minuten. Kein Risiko, keine Verpflichtung.|15 Minuten, gebührenfrei. Das reicht, um zu sehen, ob das Konzept bei Ihrer GmbH funktioniert.}}`
      }
    ]
  },
  {
    id: 3,
    name: "ETF aus der GmbH",
    framework: "Before-After-Bridge, produktfokussiert",
    tone: "Konkret, lösungsorientiert, modern",
    angle: "Produkt direkt benennen: GmbH ETF-Depot. Steuerfrei investieren.",
    emails: [
      {
        id: "N3.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|gmbh etf-depot {{firmenname}}|steuerfrei in etfs investieren|etf-depot für {{firmenname}}}}",
        subjectB: "{{RANDOM|{{firmenname}} + etf-depot|steuerfrei aus der gmbh|gmbh etf-depot für gfs}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich helfe|ich zeige|ich unterstütze}} GmbH-Geschäftsführern dabei, monatlich €500 bis €9.000 aus dem Firmeneinkommen steuerfrei in ETFs zu investieren.

Über ein GmbH ETF-Depot. Ohne Gehaltserhöhung, ohne Ausschüttung. {{RANDOM|Der volle Betrag kommt an, weil er als Betriebsausgabe läuft.|100% kommen an, weil es als Betriebsausgabe zählt.|Jeder Euro kommt an, weil es als Betriebsausgabe behandelt wird.}}

{{RANDOM|Wäre das auch für {{Firmenname}} interessant?|Passt das zu {{Firmenname}}?|Ist das relevant für Ihre GmbH?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Zum Vergleich: Über Gehalt bleiben von 10.000€ nur 5.800€. Über das ETF-Depot: 10.000€. Selbe GmbH, anderer Weg.|10.000€ über Gehalt = 5.800€. 10.000€ über GmbH ETF-Depot = 10.000€. Gleiche GmbH, anderer Weg.|Von 10.000€ Gehalt bleiben 5.800€. Über das GmbH ETF-Depot bleiben 10.000€. Steuerfrei.}}`
      },
      {
        id: "N3.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "{{RANDOM|ein mandant aus {{Branche}}|€54.000 pro jahr|konkretes ergebnis}}",
        subjectB: "{{RANDOM|ergebnis eines {{Branche}}-GFs|mandant investiert €4.500 monatlich|ein konkretes beispiel}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich wollte ein konkretes Ergebnis teilen|ein Beispiel aus der Praxis|ein konkreter Fall}}:

Ein Geschäftsführer in einer ähnlichen Situation investiert seit über einem Jahr monatlich €4.500 über sein GmbH ETF-Depot. Pro Jahr €54.000. {{RANDOM|Steuerfrei, in ETFs seiner Wahl.|Komplett steuerfrei in ETFs seiner Wahl.|100% steuerfrei.}}

Sein Kommentar: "Monatlich direkt aus dem Firmeneinkommen in ETFs zu investieren war ein absoluter Gamechanger."

{{RANDOM|Soll ich Ihnen zeigen, wie das für Ihre GmbH aussähe?|Wäre so ein Ergebnis auch für Sie relevant?|Passt das auch zu {{Firmenname}}?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Einmal aufgesetzt, läuft die Struktur ohne Mehraufwand im Tagesgeschäft. Alle Unterlagen für Ihren Steuerberater bereiten wir vor.|Die Einrichtung ist einmalig. Danach läuft es automatisch. Unterlagen für Ihren Steuerberater kommen von uns.|Kein Zusatzaufwand nach der Einrichtung. Alle Unterlagen für den Steuerberater liefern wir.}}`
      },
      {
        id: "N3.3",
        title: "Breakup",
        timing: "Tag +8",
        subjectA: "{{RANDOM|{{Vorname}}, eine letzte info|5-jahres-rechnung|letzte nachricht, {{Vorname}}}}",
        subjectB: "{{RANDOM|€180.000 in 5 jahren|eine letzte zahl|{{Vorname}}, ja oder nein?}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

eine letzte Zahl, dann höre ich auf:

€3.000 monatlich über 5 Jahre = €180.000 Privatvermögen. Steuerfrei. Aus Ihrer GmbH. Über das Gehalt wären im selben Zeitraum nur {{RANDOM|€104.400 angekommen.|rund €104.400 angekommen.|€104.400 übrig geblieben.}}

{{RANDOM|Differenz: €75.600. Nur durch den richtigen Weg.|Das sind €75.600 Unterschied. Nur durch den richtigen Weg aus der GmbH.|€75.600 mehr. Selbe GmbH, anderer Weg.}}

Falls das relevant ist: Ein kurzes "Interesse" reicht.

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar}}
Justin Latuszek`,
        ps: `{{RANDOM|Über 2.000 Geschäftsführer setzen das um. Die gebührenfreie Erstprüfung dauert 15 Minuten.|2.000+ GFs nutzen das Konzept. Erstprüfung gebührenfrei in 15 Minuten.|Wir haben über 2.000 Geschäftsführer dabei begleitet. Die Erstprüfung ist gebührenfrei und dauert 15 Minuten.}}`
      }
    ]
  }
];
