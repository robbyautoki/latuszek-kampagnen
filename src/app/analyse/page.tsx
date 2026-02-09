import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCounter } from "@/components/animated-counter";

export default function AnalysePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/logo.png"
              alt="Latuszek & partners"
              width={180}
              height={37}
              priority
              className="transition-opacity hover:opacity-80"
            />
            <div className="h-5 w-px bg-border/50 hidden sm:block" />
            <p className="text-sm text-muted-foreground hidden sm:block font-medium tracking-wide">
              Strategie-Analyse
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/80"
          >
            Kampagnen ansehen
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-8 space-y-12">
        {/* Hero */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6 py-16 sm:py-20 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand-lighter)_0%,transparent_70%)] opacity-[0.12] blur-3xl" />
            </div>

            <Badge
              variant="outline"
              className="border-brand-lighter/40 text-brand-light bg-brand-lighter/10 text-xs font-medium"
            >
              Basierend auf {analysisStats.totalTranscripts} analysierten
              Verkaufsgesprächen
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gradient-brand leading-[1.1]">
              Warum diese E-Mail-Kampagnen so geschrieben wurden
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl leading-relaxed">
              Jede Formulierung, jedes CTA und jede PS-Zeile basiert auf der
              Analyse von {analysisStats.totalTranscripts} echten
              Verkaufsgesprächen mit GmbH-Geschäftsführern.{" "}
              {analysisStats.buyerTranscripts} davon haben gekauft. Dieses
              Dokument zeigt die Muster hinter den Entscheidungen.
            </p>
          </section>
        </AnimatedSection>

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
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100} animation="fade-up">
              <div className="glass-card text-center p-6 rounded-2xl border-gradient-brand hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-500">
                <div className="text-3xl font-bold text-gradient-brand">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 1: Buyer Profile */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Das Käufer-Profil
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Wer kauft? Basierend auf den{" "}
                {analysisStats.buyerTranscripts} Abschlüssen haben wir das
                Profil des idealen Kunden rekonstruiert.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatedSection delay={100} animation="fade-up">
                <div className="glass-card rounded-2xl p-6 h-full">
                  <h3 className="font-semibold mb-4 tracking-tight">Typischer Käufer</h3>
                  <ul className="space-y-0">
                    {[
                      { label: "Alter", value: analysisStats.buyerAgeRange },
                      { label: "GmbHs", value: analysisStats.avgCompaniesPerBuyer },
                      { label: "Umsatz", value: "€500K - €5M+" },
                      { label: "Position", value: "GF & Gesellschafter" },
                    ].map((item, idx) => (
                      <li key={item.label} className={`flex justify-between py-3 text-sm ${idx < 3 ? "border-b border-border/30" : ""}`}>
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} animation="fade-up">
                <div className="glass-card rounded-2xl p-6 h-full">
                  <h3 className="font-semibold mb-4 tracking-tight">Branchen-Verteilung</h3>
                  <ul className="space-y-0">
                    {buyerProfile.industries.map((ind, idx) => (
                      <li key={ind.name} className={`flex justify-between py-3 text-sm ${idx < buyerProfile.industries.length - 1 ? "border-b border-border/30" : ""}`}>
                        <span className="text-muted-foreground">{ind.name}</span>
                        <span className="font-medium">{ind.share}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={300} animation="fade-up">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4 tracking-tight">Psychografie der Käufer</h3>
                <ul className="space-y-3">
                  {buyerProfile.psychographics.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand-light flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4 tracking-tight">
                  Was den Kauf auslöst (Trigger)
                </h3>
                <ul className="space-y-3">
                  {buyerProfile.decisionTriggers.map((trigger, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-brand-light font-bold mt-0.5 flex-shrink-0">
                        &#10003;
                      </span>
                      <span className="leading-relaxed">{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 2: Pain Points */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Die 6 größten Schmerzpunkte
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Identifiziert aus {analysisStats.buyerTranscripts}{" "}
                Käufer-Gesprächen. Sortiert nach Häufigkeit.
              </p>
            </div>

            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <AnimatedSection key={point.label} delay={i * 100} animation="fade-up">
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gradient-brand">
                          #{i + 1}
                        </span>
                        <h3 className="font-semibold tracking-tight text-lg">
                          {point.label}
                        </h3>
                      </div>
                      <Badge className="bg-brand/10 text-brand-light border-brand/20 font-bold">
                        {point.percentage}%
                      </Badge>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-secondary/80 overflow-hidden mb-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-brand-light to-brand-lighter transition-all duration-1000 ease-out"
                        style={{ width: `${point.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 3: Non-Buyer Blockers */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Was Nicht-Käufer blockiert
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Aus {analysisStats.nonBuyerTranscripts} Gesprächen ohne
                Abschluss. Jeder Blocker wird in den Kampagnen gezielt
                adressiert.
              </p>
            </div>

            <div className="space-y-4">
              {nonBuyerBlockers.map((blocker, i) => (
                <AnimatedSection key={blocker.label} delay={i * 100} animation="fade-up">
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold tracking-tight text-lg">
                          {blocker.label}
                        </h3>
                        <Badge className="bg-destructive/10 text-destructive border-destructive/20 font-bold">
                          {blocker.percentage}%
                        </Badge>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-secondary/80 overflow-hidden mb-3">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-destructive/80 to-destructive/50 transition-all duration-1000 ease-out"
                          style={{ width: `${blocker.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {blocker.insight}
                      </p>
                    </div>
                    <div className="bg-brand/5 border-t border-brand/10 px-6 py-4">
                      <p className="text-sm leading-relaxed">
                        <span className="font-semibold text-brand-light">
                          Unsere Lösung:{" "}
                        </span>
                        {blocker.emailFix}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="relative rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-light/60 via-gold-light/30 to-transparent p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="font-bold text-gold-dark mb-2 text-lg relative">
                  Zentrales Ergebnis
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed relative">
                  Der Deal stirbt zwischen Gespräch 1 und Gespräch 2. 85% der
                  Nicht-Käufer buchen einen Folgetermin, kommen aber nicht. Grund:
                  Sie fragen ihren Steuerberater, der abblockt. Darum nutzen
                  unsere Mails bewusst einen Interest-CTA (&ldquo;Wäre das
                  interessant?&rdquo;) statt eines Meeting-CTAs (&ldquo;Haben Sie
                  Zeit für ein Gespräch?&rdquo;).
                </p>
              </div>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 4: Campaign Rationales */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Warum diese E-Mail-Strategie funktioniert
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Jede der 3 Kampagnen wurde für ein spezifisches Muster aus den
                Transkripten entwickelt.
              </p>
            </div>

            <Accordion type="multiple" className="space-y-3">
              {campaignRationales.map((campaign) => (
                <AccordionItem
                  key={campaign.id}
                  value={String(campaign.id)}
                  className="glass-card rounded-2xl px-6 border-0"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-brand-light text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {campaign.id}
                      </span>
                      <div>
                        <p className="font-semibold tracking-tight">
                          Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {campaign.framework}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-light mb-1">
                        Warum dieses Framework?
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {campaign.why}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-light mb-1">
                        Transkript-Basis
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {campaign.transcriptBasis}
                      </p>
                    </div>
                    <div className="bg-brand/5 rounded-xl p-4 border border-brand/10">
                      <h4 className="text-sm font-semibold mb-1">
                        Kern-Erkenntnis
                      </h4>
                      <p className="text-sm leading-relaxed">{campaign.keyInsight}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 5: Winning Language */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Die Verkaufs-Sprache
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Exakte Formulierungen aus den Transkripten, die in den
                E-Mail-Kampagnen eingesetzt werden.
              </p>
            </div>

            <div className="space-y-4">
              {winningPhrases.map((phrase, i) => (
                <AnimatedSection key={i} delay={i * 100} animation="fade-up">
                  <div
                    className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:shadow-premium border-l-4 ${
                      phrase.type === "buyer"
                        ? "border-l-primary"
                        : phrase.type === "seller"
                        ? "border-l-brand-light"
                        : "border-l-gold"
                    }`}
                  >
                    <span className="absolute -top-2 -left-1 text-8xl font-serif text-primary/5 select-none pointer-events-none leading-none">
                      &ldquo;
                    </span>

                    <div className="relative z-10">
                      <p className="font-medium text-[0.9375rem] italic leading-relaxed pl-1">
                        {phrase.text}
                      </p>
                      <p
                        className={`text-xs mt-3 leading-relaxed ${
                          phrase.type === "buyer"
                            ? "text-primary"
                            : phrase.type === "seller"
                            ? "text-brand-light"
                            : "text-gold-dark"
                        }`}
                      >
                        {phrase.context}
                      </p>
                      <Badge
                        variant="outline"
                        className={`mt-3 text-xs ${
                          phrase.type === "buyer"
                            ? "border-primary/30 text-primary bg-primary/5"
                            : phrase.type === "seller"
                            ? "border-brand-light/30 text-brand-light bg-brand-light/5"
                            : "border-gold/30 text-gold-dark bg-gold-light/30"
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
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 6: Optimizations */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Datenbasierte Optimierungen
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Jede Regel ist doppelt validiert: durch externe Studien UND
                durch die Muster in den {analysisStats.totalTranscripts}{" "}
                Transkripten.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    '"Wir ersetzen keinen Steuerberater" neutralisiert den größten Einwand, bevor er entsteht.',
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
                <AnimatedSection key={i} delay={i * 75} animation="fade-up">
                  <div className="stripe-brand pl-5 p-4 rounded-xl glass-card hover:-translate-y-0.5 hover:shadow-premium-hover transition-all duration-500 h-full">
                    <p className="font-semibold text-sm tracking-tight">
                      {opt.rule}
                    </p>
                    <p className="text-xs text-brand-light mt-1 font-medium">
                      {opt.study}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {opt.transcript}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Section 7: Sequence Strategy */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Empfohlene Sequenz-Strategie
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Timing und Entscheidungen basierend auf den
                Conversion-Mustern.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-0">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-primary via-brand-light to-destructive/60 rounded-full" />

              {sequenceStrategy.timing.map((step, i) => (
                <AnimatedSection key={i} delay={i * 150} animation="fade-up">
                  <div className="flex items-start gap-6 relative py-3">
                    <div
                      className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ring-4 ring-background ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : i === 2
                          ? "bg-destructive text-white"
                          : "bg-brand-light text-white"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div className="glass-card rounded-xl p-5 flex-1">
                      <p className="font-semibold tracking-tight">{step.label}</p>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {step.rationale}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Key Decisions */}
            <div className="space-y-3 pt-4">
              <h3 className="font-semibold text-lg tracking-tight">
                Strategische Entscheidungen
              </h3>
              {sequenceStrategy.keyDecisions.map((item, i) => (
                <AnimatedSection key={i} delay={i * 100} animation="fade-up">
                  <div className="glass-card rounded-xl p-5">
                    <h4 className="font-semibold text-sm text-brand-light">
                      {item.decision}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Footer */}
        <section className="text-center py-16 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Analyse basierend auf {analysisStats.totalTranscripts}{" "}
            Verkaufsgesprächen &middot;{" "}
            {analysisStats.buyerTranscripts} Käufer &middot;{" "}
            {analysisStats.nonBuyerTranscripts} Nicht-Käufer
          </p>
          <Link
            href="/"
            className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/80"
          >
            Zu den E-Mail-Kampagnen
          </Link>
          <p className="text-xs text-muted-foreground pt-2">
            Erstellt für Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
