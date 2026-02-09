import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  analysisStats,
  painPoints,
  nonBuyerBlockers,
  buyerProfile,
  winningPhrases,
  campaignRationales,
  sequenceStrategy,
} from "@/data/analysis";

export default function AnalysePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Latuszek & partners"
              width={180}
              height={37}
              priority
            />
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <p className="text-sm text-muted-foreground hidden sm:block">
              Strategie-Analyse
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-primary hover:underline font-medium"
          >
            Kampagnen ansehen
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Hero */}
        <section className="space-y-4 py-4">
          <Badge variant="outline" className="text-xs">
            Basierend auf {analysisStats.totalTranscripts} analysierten
            Verkaufsgesprächen
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Warum diese E-Mail-Kampagnen so geschrieben wurden
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Jede Formulierung, jedes CTA und jede PS-Zeile basiert auf der
            Analyse von {analysisStats.totalTranscripts} echten
            Verkaufsgesprächen mit GmbH-Geschäftsführern.{" "}
            {analysisStats.buyerTranscripts} davon haben gekauft. Dieses
            Dokument zeigt die Muster hinter den Entscheidungen.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              value: String(analysisStats.totalTranscripts),
              label: "Gespräche analysiert",
            },
            {
              value: String(analysisStats.buyerTranscripts),
              label: "Abschlüsse",
            },
            {
              value: analysisStats.conversionRate,
              label: "Conversion Rate",
            },
            { value: analysisStats.avgSavings, label: "Ø Ersparnis/Jahr" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-card rounded-xl border border-border/60 shadow-sm"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <Separator />

        {/* Section 1: Buyer Profile */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Das Käufer-Profil</h2>
            <p className="text-muted-foreground mt-2">
              Wer kauft? Basierend auf den{" "}
              {analysisStats.buyerTranscripts} Abschlüssen haben wir das
              Profil des idealen Kunden rekonstruiert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Demographics */}
            <div className="bg-card rounded-xl border border-border/60 p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Typischer Käufer</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Alter</span>
                  <span className="font-medium">
                    {analysisStats.buyerAgeRange}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">GmbHs</span>
                  <span className="font-medium">
                    {analysisStats.avgCompaniesPerBuyer}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Umsatz</span>
                  <span className="font-medium">€500K - €5M+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Position</span>
                  <span className="font-medium">GF & Gesellschafter</span>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div className="bg-card rounded-xl border border-border/60 p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Branchen-Verteilung</h3>
              <ul className="space-y-2 text-sm">
                {buyerProfile.industries.map((ind) => (
                  <li key={ind.name} className="flex justify-between">
                    <span className="text-muted-foreground">{ind.name}</span>
                    <span className="font-medium">{ind.share}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Psychographics */}
          <div className="bg-card rounded-xl border border-border/60 p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Psychografie der Käufer</h3>
            <ul className="space-y-2">
              {buyerProfile.psychographics.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary font-bold mt-0.5">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decision Triggers */}
          <div className="bg-card rounded-xl border border-border/60 p-5 shadow-sm">
            <h3 className="font-semibold mb-3">
              Was den Kauf auslöst (Trigger)
            </h3>
            <ul className="space-y-2">
              {buyerProfile.decisionTriggers.map((trigger, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 font-bold mt-0.5">
                    &#10003;
                  </span>
                  <span>{trigger}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Separator />

        {/* Section 2: Pain Points */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">
              Die 6 größten Schmerzpunkte
            </h2>
            <p className="text-muted-foreground mt-2">
              Identifiziert aus {analysisStats.buyerTranscripts}{" "}
              Käufer-Gesprächen. Sortiert nach Häufigkeit.
            </p>
          </div>

          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <div
                key={point.label}
                className="bg-card rounded-xl border border-border/60 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-primary">
                      #{i + 1}
                    </span>
                    <h3 className="font-semibold">{point.label}</h3>
                  </div>
                  <Badge
                    variant={point.percentage >= 70 ? "default" : "secondary"}
                  >
                    {point.percentage}%
                  </Badge>
                </div>
                <Progress value={point.percentage} className="h-2 mb-3" />
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Section 3: Non-Buyer Blockers */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Was Nicht-Käufer blockiert</h2>
            <p className="text-muted-foreground mt-2">
              Aus {analysisStats.nonBuyerTranscripts} Gesprächen ohne
              Abschluss. Jeder Blocker wird in den Kampagnen gezielt
              adressiert.
            </p>
          </div>

          <div className="space-y-4">
            {nonBuyerBlockers.map((blocker) => (
              <div
                key={blocker.label}
                className="bg-card rounded-xl border border-border/60 overflow-hidden shadow-sm"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{blocker.label}</h3>
                    <Badge variant="destructive">{blocker.percentage}%</Badge>
                  </div>
                  <Progress
                    value={blocker.percentage}
                    className="h-2 mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    {blocker.insight}
                  </p>
                </div>
                <div className="bg-primary/5 border-t border-border/40 px-5 py-3">
                  <p className="text-sm">
                    <span className="font-semibold text-primary">
                      Unsere Lösung:{" "}
                    </span>
                    {blocker.emailFix}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Zentrales Ergebnis
            </h3>
            <p className="text-sm text-amber-800">
              Der Deal stirbt zwischen Gespräch 1 und Gespräch 2. 85% der
              Nicht-Käufer buchen einen Folgetermin, kommen aber nicht. Grund:
              Sie fragen ihren Steuerberater, der abblockt. Darum nutzen
              unsere Mails bewusst einen Interest-CTA (&ldquo;Wäre das
              interessant?&rdquo;) statt eines Meeting-CTAs (&ldquo;Haben Sie
              Zeit für ein Gespräch?&rdquo;).
            </p>
          </div>
        </section>

        <Separator />

        {/* Section 4: Campaign Rationales */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">
              Warum diese E-Mail-Strategie funktioniert
            </h2>
            <p className="text-muted-foreground mt-2">
              Jede der 3 Kampagnen wurde für ein spezifisches Muster aus den
              Transkripten entwickelt.
            </p>
          </div>

          <Accordion type="multiple" className="space-y-3">
            {campaignRationales.map((campaign) => (
              <AccordionItem
                key={campaign.id}
                value={String(campaign.id)}
                className="bg-card rounded-xl border border-border/60 shadow-sm px-5"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {campaign.id}
                    </span>
                    <div>
                      <p className="font-semibold">
                        Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {campaign.framework}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">
                      Warum dieses Framework?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {campaign.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">
                      Transkript-Basis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {campaign.transcriptBasis}
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h4 className="text-sm font-semibold mb-1">
                      Kern-Erkenntnis
                    </h4>
                    <p className="text-sm">{campaign.keyInsight}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Separator />

        {/* Section 5: Winning Language */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Die Verkaufs-Sprache</h2>
            <p className="text-muted-foreground mt-2">
              Exakte Formulierungen aus den Transkripten, die in den
              E-Mail-Kampagnen eingesetzt werden.
            </p>
          </div>

          <div className="space-y-4">
            {winningPhrases.map((phrase, i) => (
              <div
                key={i}
                className={`rounded-xl border p-5 shadow-sm ${
                  phrase.type === "buyer"
                    ? "bg-green-50 border-green-200"
                    : phrase.type === "seller"
                    ? "bg-blue-50 border-blue-200"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none">&ldquo;</span>
                  <div>
                    <p className="font-medium text-sm italic">
                      {phrase.text}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        phrase.type === "buyer"
                          ? "text-green-700"
                          : phrase.type === "seller"
                          ? "text-blue-700"
                          : "text-amber-700"
                      }`}
                    >
                      {phrase.context}
                    </p>
                    <Badge
                      variant="outline"
                      className={`mt-2 text-xs ${
                        phrase.type === "buyer"
                          ? "border-green-300 text-green-700"
                          : phrase.type === "seller"
                          ? "border-blue-300 text-blue-700"
                          : "border-amber-300 text-amber-700"
                      }`}
                    >
                      {phrase.type === "buyer"
                        ? "Käufer-Zitat"
                        : phrase.type === "seller"
                        ? "Verkaufs-Sprache"
                        : "Erkenntnis"}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Section 6: Optimizations with Transcript Validation */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">
              Datenbasierte Optimierungen
            </h2>
            <p className="text-muted-foreground mt-2">
              Jede Regel ist doppelt validiert: durch externe Studien UND
              durch die Muster in den {analysisStats.totalTranscripts}{" "}
              Transkripten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                rule: 'Mit "Ich" starten',
                study: "+93% Replies (SalesLoft, 6M Mails)",
                transcript:
                  "In erfolgreichen Gesprächen eröffnet der Verkäufer immer mit einer persönlichen Ich-Aussage.",
              },
              {
                rule: "PS-Zeile in jeder Mail",
                study: "Meistgelesener Teil der E-Mail",
                transcript:
                  "Käufer erinnern sich an die letzte Information im Gespräch am besten (Recency Effect).",
              },
              {
                rule: "Interest-CTA statt Meeting-CTA",
                study: "30% vs 15% Response Rate",
                transcript:
                  "85% der Nicht-Käufer buchen Meetings, kommen aber nicht. Interest-CTA filtert echtes Interesse.",
              },
              {
                rule: '"Schauen wir, ob\'s passt"',
                study: "91% Erfolgsrate im Verkauf",
                transcript:
                  "In 20 von 22 Abschlüssen wurde exakt diese Formulierung als Überleitung zum nächsten Schritt genutzt.",
              },
              {
                rule: "Steuerberater als Partner",
                study: "76% Blocker bei Nicht-Käufern",
                transcript:
                  '\"Wir ersetzen keinen Steuerberater\" neutralisiert den größten Einwand, bevor er entsteht.',
              },
              {
                rule: "Chirurg-Positionierung",
                study: "100% Käufer-Validierung",
                transcript:
                  "Die Metapher kommt direkt von den Kunden. Sie positioniert Latuszek als Spezialist ohne den Steuerberater abzuwerten.",
              },
              {
                rule: "Keine Fachbegriffe",
                study: "+67% Reply Rate bei einfacher Sprache",
                transcript:
                  '78% der Nicht-Käufer nannten Komplexität als Barriere. "Betriebsvermögen steuerfrei in Privatvermögen" reicht.',
              },
              {
                rule: "1 CTA pro Mail",
                study: "371% besser als mehrere",
                transcript:
                  "Käufer entscheiden sich schneller bei einer klaren Frage statt mehrerer Optionen.",
              },
            ].map((opt, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border/60 p-4 shadow-sm"
              >
                <p className="font-semibold text-sm">{opt.rule}</p>
                <p className="text-xs text-primary mt-1">{opt.study}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {opt.transcript}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Section 7: Sequence Strategy */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">
              Empfohlene Sequenz-Strategie
            </h2>
            <p className="text-muted-foreground mt-2">
              Timing und Entscheidungen basierend auf den
              Conversion-Mustern.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            {sequenceStrategy.timing.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card rounded-xl border border-border/60 p-5 shadow-sm"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : i === 2
                      ? "bg-destructive text-white"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm">{step.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Decisions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">
              Strategische Entscheidungen
            </h3>
            {sequenceStrategy.keyDecisions.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border/60 p-5 shadow-sm"
              >
                <h4 className="font-semibold text-sm text-primary">
                  {item.decision}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Footer */}
        <section className="text-center py-8 space-y-3">
          <p className="text-sm text-muted-foreground">
            Analyse basierend auf {analysisStats.totalTranscripts}{" "}
            Verkaufsgesprächen &middot;{" "}
            {analysisStats.buyerTranscripts} Käufer &middot;{" "}
            {analysisStats.nonBuyerTranscripts} Nicht-Käufer
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-primary hover:underline font-medium"
          >
            Zu den E-Mail-Kampagnen
          </Link>
          <p className="text-xs text-muted-foreground">
            Erstellt für Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
