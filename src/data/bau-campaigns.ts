import type { Campaign } from "./campaigns";

export const bauCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Der Bau-Steuervorteil",
    framework: "PAS (Problem, Agitation, Solution)",
    tone: "Kompetent, lösungsorientiert, direkt",
    angle: "Bau-GF kalkulieren jedes Projekt auf den Cent, nur nicht ihre eigene Steuerstruktur",
    emails: [
      {
        id: "A.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|{{Firmenname}} + Steuern|Steuerlücke im Bereich {{Kerngeschaeft}}?|Frage an Sie als GF von {{Firmenname}}}}",
        subjectB: "{{RANDOM|{{Firmenname}} + Steuern|Steuerlücke im Bereich {{Kerngeschaeft}}?|Frage an Sie als GF von {{Firmenname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich bin auf {{Firmenname}} gestoßen|ich habe mir {{Firmenname}} angesehen|mir ist {{Firmenname}} aufgefallen}} und {{RANDOM|habe eine Frage|habe eine ehrliche Frage|wollte Sie etwas fragen}}: {{RANDOM|Wie ist Ihre Steuerstruktur als Geschäftsführer aktuell aufgestellt?|Wissen Sie, wie viel Geld Ihnen als Geschäftsführer durch fehlende Steuergestaltung jedes Jahr entgeht?|Haben Sie Ihre Steuerstruktur als Geschäftsführer in letzter Zeit einmal überprüfen lassen?}}

{{RANDOM|Ich frage, weil ich bei|Der Grund: Bei|Ich frage deshalb, weil mir bei}} {{RANDOM|Geschäftsführern|GmbH-Geschäftsführern}} {{RANDOM|im Bereich {{Kerngeschaeft}}|aus dem Bereich {{Kerngeschaeft}}|mit Schwerpunkt {{Kerngeschaeft}}}} {{RANDOM|immer wieder sehe|regelmäßig feststelle|immer wieder auffällt}}, dass die Projekte {{RANDOM|perfekt kalkuliert sind|auf den Cent genau kalkuliert werden|sauber durchgerechnet sind}}, aber die eigene {{RANDOM|Vergütung und Vermögensstruktur|Steuerstruktur|Vergütungsstruktur}} seit Jahren {{RANDOM|unverändert läuft|nicht angepasst wurde|gleich geblieben ist}}. {{RANDOM|Dabei gibt es|Es gibt aber|Dabei existieren}} legale Wege, {{RANDOM|Betriebsvermögen|Firmenvermögen|GmbH-Vermögen}} {{RANDOM|steuerfrei|ohne Steuerbelastung}} ins {{RANDOM|Privatvermögen zu überführen.|private Vermögen zu verschieben.|Privatvermögen zu übertragen.}} {{RANDOM|Ihr Steuerberater bleibt dabei eingebunden.|Das funktioniert in Abstimmung mit Ihrem Steuerberater.|Ihr Steuerberater wird von Anfang an eingebunden.}}

{{RANDOM|Lohnt sich ein Blick für Ihre Situation?|Wäre das interessant für Sie?|Passt das zu Ihrer Situation?|Ist das relevant für {{Firmenname}}?}}

{{RANDOM|Viele Grüße|Beste Grüße|Grüße aus Weimar|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Die häufigste Reaktion von Geschäftsführern, mit denen ich arbeite: "Warum hat mir das mein Steuerberater nie so erklärt?"|Ein Mandant sagte mir neulich: "Warum hat mir das vorher niemand so erklärt?"|Die häufigste Frage, die ich höre: "Warum hat mir mein Steuerberater das nie so gezeigt?"}}`
      },
      {
        id: "A.2",
        title: "Follow-up 1",
        timing: "Tag +3",
        subjectA: "{{RANDOM|Kurze Ergänzung|eine Zahl zu {{Firmenname}}|Nachtrag zu meiner letzten Mail}}",
        subjectB: "{{RANDOM|Kurze Ergänzung|eine Zahl zu {{Firmenname}}|Nachtrag zu meiner letzten Mail}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich wollte eine konkrete Zahl nachliefern|kurz nachgehakt|ich wollte mich nochmal melden}}: Ein {{RANDOM|Geschäftsführer|GF|Unternehmer}} {{RANDOM|aus dem Baubereich|aus dem Bereich {{Kerngeschaeft}}|aus der Baubranche}}, mit dem ich {{RANDOM|kürzlich gearbeitet habe|kürzlich zusammengearbeitet habe|vor kurzem zusammengearbeitet habe}}, {{RANDOM|überführt jetzt monatlich|verschiebt jetzt jeden Monat|überträgt mittlerweile monatlich}} {{RANDOM|mehrere tausend Euro|einige tausend Euro|mehrere Tausend Euro}} {{RANDOM|steuerfrei|ohne Steuerbelastung}} {{RANDOM|aus seinem Betriebsvermögen ins Privatvermögen|in sein Privatvermögen|aus dem Firmenvermögen ins private Vermögen}}.

{{RANDOM|Einmal aufgesetzt, läuft das ohne Mehraufwand im Tagesgeschäft.|Einmal eingerichtet, läuft das automatisch.|Nach der Einrichtung entsteht kein Zusatzaufwand.}} {{RANDOM|Sein Steuerberater war von Anfang an eingebunden.|Das Ganze funktioniert in Abstimmung mit seinem Steuerberater.|Sein StB war von Beginn an dabei.}}

{{RANDOM|Soll ich Ihnen eine kurze Einschätzung für Ihre Situation schicken?|Wäre eine kurze Einschätzung für {{Firmenname}} interessant?|Soll ich prüfen, ob das auch für Ihre Situation passt?|Wäre das auch für {{Firmenname}} relevant?}}

{{RANDOM|Grüße aus Weimar|Viele Grüße|Beste Grüße|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Ein Mandant aus dem Baubereich sagte neulich: "Mein Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür brauchte ich einen Spezialisten."|Die Umsetzung ist unkompliziert. Einmal richtig aufgesetzt, läuft es. Ihr Steuerberater bleibt eingebunden.|Ein Mandant aus der Baubranche meinte kürzlich: "Mein StB macht gute Arbeit. Aber sowas? Das hat er mir nie vorgeschlagen."}}`
      },
      {
        id: "A.3",
        title: "Follow-up 2",
        timing: "Tag +8",
        subjectA: "{{RANDOM|10 Minuten, {{Vorname}}|was liegt bei {{Firmenname}} auf dem Tisch?|kurze Frage, {{Vorname}}}}",
        subjectB: "{{RANDOM|10 Minuten, {{Vorname}}|was liegt bei {{Firmenname}} auf dem Tisch?|kurze Frage, {{Vorname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|eine direkte Frage|ich schreibe Ihnen nochmal|eine letzte Frage}}: {{RANDOM|Wissen Sie, wie viel Betriebsvermögen Sie jeden Monat steuerfrei in Ihr Privatvermögen überführen könnten?|Ich bin überzeugt, dass bei {{Firmenname}} Potenzial liegt.|Wissen Sie, wie viel Firmenvermögen Sie monatlich ohne Steuerbelastung in Ihr privates Vermögen verschieben könnten?}}

{{RANDOM|Ich kann Ihnen in|In}} {{RANDOM|10 Minuten|zehn Minuten|einem kurzen Gespräch}} {{RANDOM|sagen|zeigen}}, was bei {{RANDOM|{{Firmenname}}|Ihnen konkret}} {{RANDOM|möglich wäre|drin wäre|realistisch wäre}}. {{RANDOM|Ohne Kosten, unverbindlich.|Kostenlos und unverbindlich.|Ohne Kosten, ohne Verpflichtung.|Kostenfrei und ohne Bedingungen.}}

{{RANDOM|Ein kurzes "Ja" reicht.|Kurzes "Ja" genügt.|Antworten Sie einfach kurz mit "Ja".|Einfach kurz "Ja" antworten.}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Ihr Steuerberater macht gute Buchhaltung. Aber proaktive Steuergestaltung? Dafür braucht es einen Spezialisten.|Das höre ich immer wieder von Geschäftsführern: "Mein Steuerberater hat mir das nie so erklärt."|Mein Steuerberater macht gute Arbeit. Aber proaktive Vermögensübertragung? Dafür brauchen Sie einen Spezialisten.}}`
      }
    ]
  },
  {
    id: 2,
    name: "Der Branchen-Insider",
    framework: "BAB (Before, After, Bridge) + Social Proof",
    tone: "Nahbar, vertrauensbildend, branchenspezifisch",
    angle: "Andere GF aus dem {{Kerngeschaeft}} sparen bereits fünfstellig",
    emails: [
      {
        id: "B.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|Frage an Sie als GF|gmbh-steuern im Bereich {{Kerngeschaeft}}|{{Firmenname}} und Steuergestaltung}}",
        subjectB: "{{RANDOM|Frage an Sie als GF|gmbh-steuern im Bereich {{Kerngeschaeft}}|{{Firmenname}} und Steuergestaltung}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich arbeite mit einigen|ich kenne einige|ich berate mehrere}} {{RANDOM|Geschäftsführern|GmbH-Geschäftsführern|Unternehmern}} aus dem Bereich {{Kerngeschaeft}}, die {{RANDOM|jedes Jahr fünfstellige Beträge an Steuern sparen|ihre Steuerlast deutlich gesenkt haben|jährlich fünfstellig an Steuern einsparen}}. {{RANDOM|Legal und ohne Tricks.|Alles legal und sauber.|Vollkommen legal.}}

{{RANDOM|Die Methode:|Es geht um Folgendes:|Der Ansatz:}} {{RANDOM|Betriebsvermögen|Firmenvermögen|GmbH-Vermögen}} wird {{RANDOM|steuerfrei|ohne Steuerbelastung|steuerbegünstigt}} ins {{RANDOM|Privatvermögen überführt|private Vermögen verschoben|Privatvermögen übertragen}}. {{RANDOM|Je nach Situation|Abhängig von der Situation|Im Einzelfall}} sind das {{RANDOM|mehrere tausend Euro|einige tausend Euro|mehrere Tausend Euro}} im Monat.

{{RANDOM|Passt das auch zu|Wäre das auch interessant für|Ist das relevant für}} {{RANDOM|{{Firmenname}}|Ihre Situation}}?

{{RANDOM|Viele Grüße|Beste Grüße|Grüße aus Weimar|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Ich bin neugierig: Kommt Ihr Steuerberater proaktiv auf Sie zu mit Ideen zur Vermögensübertragung? Die meisten tun es nicht. Genau da setze ich an.|Kommt Ihr Steuerberater proaktiv mit Ideen zur Vermögensübertragung auf Sie zu? Die meisten tun es nicht.|Frage: Hat Ihr Steuerberater Ihnen dieses Jahr proaktiv Wege zur Vermögensübertragung gezeigt? Die meisten tun das nicht.}}`
      },
      {
        id: "B.2",
        title: "Follow-up 1",
        timing: "Tag +4",
        subjectA: "{{RANDOM|Konkretes Beispiel|ein GF aus dem Bereich {{Kerngeschaeft}}|Ergebnis eines Mandanten aus dem Bereich {{Kerngeschaeft}}}}",
        subjectB: "{{RANDOM|Konkretes Beispiel|ein GF aus dem Bereich {{Kerngeschaeft}}|Ergebnis eines Mandanten aus dem Bereich {{Kerngeschaeft}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ein konkretes Beispiel|ich wollte Ihnen ein Beispiel geben|ein Praxisbeispiel}}: Ein {{RANDOM|Geschäftsführer|GF|Unternehmer}} aus der {{RANDOM|Baubranche|Bauindustrie|Bauwirtschaft}} {{RANDOM|hat mit mir seine Struktur so aufgesetzt, dass er jetzt|überführt jetzt|verschiebt mittlerweile}} monatlich {{RANDOM|€4.500|rund €4.500|ca. 4.500 Euro}} {{RANDOM|steuerfrei|ohne Steuerbelastung}} in sein {{RANDOM|Privatvermögen|privates Vermögen}}. {{RANDOM|Pro Jahr|Jährlich|Das sind pro Jahr}} über {{RANDOM|€54.000|54.000 Euro}}, die vorher {{RANDOM|beim Finanzamt gelandet wären|ans Finanzamt gegangen wären|versteuert worden wären}}.

{{RANDOM|Sein Kommentar: "Mein Steuerberater macht gute Buchhaltung. Aber das hier? Dafür brauchte ich einen Spezialisten."|Sein Steuerberater war von Anfang an eingebunden. Kein Zusatzaufwand.|Sein Steuerberater war von Beginn an dabei. Die Umsetzung war unkompliziert.}}

{{RANDOM|Wäre so ein Ergebnis auch für Sie relevant?|Wäre das auch für {{Firmenname}} denkbar?|Passt so ein Ergebnis auch zu Ihrer Situation?|Könnte das auch für {{Firmenname}} funktionieren?}}

{{RANDOM|Grüße aus Weimar|Viele Grüße|Beste Grüße|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Die Umsetzung ist unkompliziert. Einmal richtig aufgesetzt, läuft es.|Einmal richtig aufgesetzt, läuft das ohne Mehraufwand im Tagesgeschäft.|Die Einrichtung ist einfach. Danach läuft es automatisch.}} {{RANDOM|Ihr Steuerberater bleibt eingebunden.|Ihr StB wird von Anfang an eingebunden.|Das funktioniert in Abstimmung mit Ihrem Steuerberater.}}`
      },
      {
        id: "B.3",
        title: "Follow-up 2",
        timing: "Tag +9",
        subjectA: "{{RANDOM|eine Frage, {{Vorname}}|{{Kerngeschaeft}} + Steuern|kurz nachgehakt, {{Vorname}}}}",
        subjectB: "{{RANDOM|eine Frage, {{Vorname}}|{{Kerngeschaeft}} + Steuern|kurz nachgehakt, {{Vorname}}}}",
        body: `Sehr geehrte{{Anrede}} {{Nachname}},

{{RANDOM|ich fasse es kurz|kurze Frage|ich melde mich ein letztes Mal}}: {{RANDOM|Ich habe Geschäftsführern aus dem Bereich {{Kerngeschaeft}} geholfen, fünfstellige Beträge pro Jahr steuerfrei ins Privatvermögen zu verschieben. Steuerberater eingebunden, kein Zusatzaufwand.|Hat Ihr Steuerberater Sie dieses Jahr proaktiv angerufen, um Ihnen zu zeigen, wie Sie Betriebsvermögen steuerfrei verschieben können? Falls nicht, geht es Ihnen wie den meisten GmbH-Geschäftsführern.|Ich habe GmbH-Geschäftsführern im Bereich {{Kerngeschaeft}} geholfen, fünfstellig pro Jahr steuerfrei ins private Vermögen zu übertragen. In Abstimmung mit dem Steuerberater, ohne Zusatzaufwand.}}

{{RANDOM|Ich kann Ihnen in|In}} {{RANDOM|10 Minuten|zehn Minuten|einem kurzen Gespräch}} {{RANDOM|zeigen|sagen}}, ob das {{RANDOM|auch |}}für {{Firmenname}} {{RANDOM|funktioniert|passt|in Frage kommt}}. {{RANDOM|Ohne Kosten, ohne Verpflichtung.|Kostenlos und unverbindlich.|Kostenfrei und ohne Bedingungen.}}

{{RANDOM|Interesse?|Wäre das interessant?|Passt das?}}

{{RANDOM|Beste Grüße|Viele Grüße|Grüße aus Weimar|Herzliche Grüße}}
Justin Latuszek`,
        ps: `{{RANDOM|Ich ersetze keinen Steuerberater. Ich ergänze ihn dort, wo er nicht hinkommt.|Ich ersetze keinen StB. Ich ergänze ihn dort, wo die meisten nicht hinkommen.|Ich bin kein Ersatz für Ihren Steuerberater. Ich ergänze ihn dort, wo er nicht hinkommt.}}`
      }
    ]
  },
  {
    id: 3,
    name: "Klartext",
    framework: "Direct Response",
    tone: "Casual, direkt, ohne Umwege",
    angle: "Provokante Fragen + Permission-based Closing",
    emails: [
      {
        id: "C.1",
        title: "Erstansprache",
        timing: "Tag 0",
        subjectA: "{{RANDOM|{{Vorname}}, kurzer Test|macht Ihr Steuerberater das, {{Vorname}}?|{{Vorname}}, eine Frage}}",
        subjectB: "{{RANDOM|{{Vorname}}, kurzer Test|macht Ihr Steuerberater das, {{Vorname}}?|{{Vorname}}, eine Frage}}",
        body: `{{Vorname}}, {{RANDOM|eine Frage|eine kurze Frage|eine ehrliche Frage}}:

{{RANDOM|Hat Ihr Steuerberater Sie dieses Jahr proaktiv angerufen|Hat sich Ihr Steuerberater dieses Jahr proaktiv gemeldet|Ist Ihr Steuerberater dieses Jahr auf Sie zugekommen}}, um Ihnen zu zeigen, wie Sie {{RANDOM|Betriebsvermögen|Firmenvermögen|GmbH-Vermögen}} {{RANDOM|steuerfrei|ohne Steuerbelastung}} in {{RANDOM|Privatvermögen|Ihr privates Vermögen|Ihr Privatvermögen}} {{RANDOM|verschieben|überführen|übertragen}}?

Falls ja, {{RANDOM|top|super|sehr gut}}, {{RANDOM|Mail löschen|diese Mail löschen|E-Mail löschen}}. Falls nein, dann geht es Ihnen wie {{RANDOM|den meisten Geschäftsführern|den meisten GF|vielen Unternehmern}} {{RANDOM|im Bereich {{Kerngeschaeft}}|aus dem Bereich {{Kerngeschaeft}}|mit Schwerpunkt {{Kerngeschaeft}}}}.

{{RANDOM|Ich sage Ihnen in|In}} {{RANDOM|10 Minuten|zehn Minuten}}, was bei Ihnen {{RANDOM|möglich ist|möglich wäre|drin ist}}. {{RANDOM|Ohne Kosten, ohne Bedingungen.|Kostenlos und unverbindlich.|Kostenfrei und ohne Verpflichtung.}}

{{RANDOM|Kurzes "Ja" reicht. Kurzes "Nein" auch, ist Ihr Geld, nicht meins.|Ein kurzes "Ja" reicht.|Einfach kurz "Ja" antworten.|Kurzes "Ja" genügt.}}

Justin`,
        ps: ""
      },
      {
        id: "C.2",
        title: "Follow-up 1",
        timing: "Tag +2",
        subjectA: "{{RANDOM|{{Vorname}}, blinder Fleck?|kennen Sie die Zahl, {{Vorname}}?|{{Vorname}}, kurze Frage}}",
        subjectB: "{{RANDOM|{{Vorname}}, blinder Fleck?|kennen Sie die Zahl, {{Vorname}}?|{{Vorname}}, kurze Frage}}",
        body: `{{Vorname}}, {{RANDOM|eine ehrliche Frage|eine direkte Frage|kurze Frage}}:

{{RANDOM|Wissen Sie|Kennen Sie die Zahl}}, wie viel Geld {{RANDOM|jeden Monat|monatlich}} in Ihrer GmbH {{RANDOM|liegen bleibt|gebunden ist|verbleibt}}, das {{RANDOM|steuerfrei|ohne Steuerbelastung}} bei Ihnen {{RANDOM|privat|im Privatvermögen}} landen könnte?

Falls Sie die {{RANDOM|Zahl|Antwort}} kennen, {{RANDOM|Hut ab|super}}, {{RANDOM|Mail löschen|diese Mail löschen|E-Mail löschen}}. Falls nicht, dann ist das {{RANDOM|genau die Lücke|genau der blinde Fleck|exakt die Lücke}}, die ich bei {{RANDOM|Geschäftsführern|GmbH-Geschäftsführern|Unternehmern}} im Bereich {{Kerngeschaeft}} {{RANDOM|immer wieder sehe|regelmäßig sehe|immer wieder feststelle}}.

{{RANDOM|10 Minuten|Zehn Minuten|Ein kurzes Gespräch}}, {{RANDOM|ohne Kosten|kostenlos|kostenfrei}}, und Sie haben die Zahl.

{{RANDOM|Wollen Sie's wissen oder lieber nicht?|Soll ich Ihnen die Zahl zeigen?|Interesse?|Wollen Sie die Zahl wissen?}}

Justin`,
        ps: ""
      },
      {
        id: "C.3",
        title: "Follow-up 2",
        timing: "Tag +4",
        subjectA: "{{RANDOM|{{Vorname}}, zwei Fragen|{{Vorname}}, ja oder nein?|letzte Frage, {{Vorname}}}}",
        subjectB: "{{RANDOM|{{Vorname}}, zwei Fragen|{{Vorname}}, ja oder nein?|letzte Frage, {{Vorname}}}}",
        body: `{{Vorname}}, {{RANDOM|zwei Fragen|zwei kurze Fragen|zwei direkte Fragen}}:

{{RANDOM|Verschiebt|Überführt|Überträgt}} Ihr Steuerberater aktiv {{RANDOM|Betriebsvermögen|Firmenvermögen|GmbH-Vermögen}} in Ihr {{RANDOM|Privatvermögen|privates Vermögen}}?

{{RANDOM|Wissen Sie|Kennen Sie die Zahl}}, wie viel das {{RANDOM|pro Jahr|jährlich|im Jahr}} wäre?

Wenn Sie beides mit Ja {{RANDOM|beantworten|beantworten können}}, {{RANDOM|alles gut|alles bestens|super}}, {{RANDOM|löschen Sie die Mail|Mail löschen|diese Mail löschen}}. Wenn nicht, dann {{RANDOM|lassen Sie gerade fünfstellig pro Jahr liegen|entgehen Ihnen gerade fünfstellige Beträge pro Jahr|verschenken Sie gerade fünfstellig pro Jahr}}.

{{RANDOM|Ich prüfe das in|In}} {{RANDOM|10 Minuten|zehn Minuten}}. {{RANDOM|Ohne Kosten.|Kostenlos.|Kostenfrei.}} {{RANDOM|Kein Gespräch, keine Verpflichtung.|Unverbindlich.|Ohne Bedingungen.}}

"Ja" reicht.

Justin`,
        ps: ""
      },
    ]
  }
];
