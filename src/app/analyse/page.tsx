import Image from "next/image";
import Link from "next/link";
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/logo.png"
              alt="Latuszek & partners"
              width={180}
              height={37}
              priority
              className="invert"
            />
            <p className="text-sm text-[#86868b] hidden sm:block font-medium">
              Strategie-Analyse
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
          >
            Kampagnen ansehen
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-20 sm:pt-48 sm:pb-24">
            <p className="text-[#86868b] text-sm font-medium uppercase tracking-widest mb-6">
              Basierend auf {analysisStats.totalTranscripts} analysierten
              Verkaufsgesprächen
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05]">
              Warum diese E-Mail-Kampagnen<br />so geschrieben wurden
            </h1>
            <p className="text-[#86868b] text-lg sm:text-xl max-w-3xl leading-relaxed mt-6">
              Jede Formulierung, jedes CTA und jede PS-Zeile basiert auf der
              Analyse von {analysisStats.totalTranscripts} echten
              Verkaufsgesprächen mit GmbH-Geschäftsführern.{" "}
              {analysisStats.buyerTranscripts} davon haben gekauft. Dieses
              Dokument zeigt die Muster hinter den Entscheidungen.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-16">
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
            <AnimatedSection key={stat.label} delay={i * 50} animation="fade">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-[#86868b] mt-3 font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Section 1: Buyer Profile */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Das Käufer-Profil
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed">
              Wer kauft? Basierend auf den{" "}
              {analysisStats.buyerTranscripts} Abschlüssen haben wir das
              Profil des idealen Kunden rekonstruiert.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Typischer Käufer
                </h3>
                <ul className="space-y-0">
                  {[
                    { label: "Alter", value: analysisStats.buyerAgeRange },
                    { label: "GmbHs", value: analysisStats.avgCompaniesPerBuyer },
                    { label: "Umsatz", value: "€500K - €5M+" },
                    { label: "Position", value: "GF & Gesellschafter" },
                  ].map((item, idx) => (
                    <li key={item.label} className={`flex justify-between py-4 text-sm ${idx < 3 ? "border-b border-white/[0.06]" : ""}`}>
                      <span className="text-[#86868b]">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Branchen-Verteilung
                </h3>
                <ul className="space-y-0">
                  {buyerProfile.industries.map((ind, idx) => (
                    <li key={ind.name} className={`flex justify-between py-4 text-sm ${idx < buyerProfile.industries.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                      <span className="text-[#86868b]">{ind.name}</span>
                      <span className="font-medium text-white">{ind.share}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Psychografie der Käufer
              </h3>
              <ul className="space-y-4">
                {buyerProfile.psychographics.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a1a1a6] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Was den Kauf auslöst
              </h3>
              <ul className="space-y-4">
                {buyerProfile.decisionTriggers.map((trigger, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a1a1a6] leading-relaxed">{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 2: Pain Points */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Die 6 größten Schmerzpunkte
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Identifiziert aus {analysisStats.buyerTranscripts}{" "}
              Käufer-Gesprächen. Sortiert nach Häufigkeit.
            </p>

            <div className="space-y-0">
              {painPoints.map((point, i) => (
                <AnimatedSection key={point.label} delay={i * 50} animation="fade">
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {point.label}
                      </h3>
                      <span className="text-sm text-[#86868b] font-mono tabular-nums">
                        {point.percentage}%
                      </span>
                    </div>
                    <div className="h-px w-full bg-[#1d1d1f] mb-4">
                      <div
                        className="h-px bg-accent transition-all duration-1000"
                        style={{ width: `${point.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Section 3: Non-Buyer Blockers */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Was Nicht-Käufer blockiert
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Aus {analysisStats.nonBuyerTranscripts} Gesprächen ohne
              Abschluss. Jeder Blocker wird in den Kampagnen gezielt
              adressiert.
            </p>

            <div className="space-y-0">
              {nonBuyerBlockers.map((blocker, i) => (
                <AnimatedSection key={blocker.label} delay={i * 50} animation="fade">
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {blocker.label}
                      </h3>
                      <span className="text-sm text-[#86868b] font-mono tabular-nums">
                        {blocker.percentage}%
                      </span>
                    </div>
                    <div className="h-px w-full bg-[#1d1d1f] mb-4">
                      <div
                        className="h-px bg-accent/60 transition-all duration-1000"
                        style={{ width: `${blocker.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {blocker.insight}
                    </p>
                    <p className="text-sm text-[#a1a1a6] mt-4 leading-relaxed">
                      <span className="text-accent font-medium">Unsere Lösung: </span>
                      {blocker.emailFix}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="py-12 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Zentrales Ergebnis
              </h3>
              <p className="text-[#a1a1a6] leading-relaxed">
                Der Deal stirbt zwischen Gespräch 1 und Gespräch 2. 85% der
                Nicht-Käufer buchen einen Folgetermin, kommen aber nicht. Grund:
                Sie fragen ihren Steuerberater, der abblockt. Darum nutzen
                unsere Mails bewusst einen Interest-CTA (&ldquo;Wäre das
                interessant?&rdquo;) statt eines Meeting-CTAs (&ldquo;Haben Sie
                Zeit für ein Gespräch?&rdquo;).
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: Campaign Rationales */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Warum diese E-Mail-Strategie funktioniert
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Jede der 3 Kampagnen wurde für ein spezifisches Muster aus den
              Transkripten entwickelt.
            </p>

            <Accordion type="multiple" className="space-y-0 divide-y divide-white/[0.06]">
              {campaignRationales.map((campaign) => (
                <AccordionItem
                  key={campaign.id}
                  value={String(campaign.id)}
                  className="border-0 py-2"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-accent font-mono text-sm flex-shrink-0">
                        0{campaign.id}
                      </span>
                      <div>
                        <p className="font-semibold text-white tracking-tight">
                          Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                        </p>
                        <p className="text-xs text-[#86868b] mt-0.5">
                          {campaign.framework}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 space-y-5 pl-12">
                    <div>
                      <h4 className="text-sm font-medium text-[#a1a1a6] mb-1">
                        Warum dieses Framework?
                      </h4>
                      <p className="text-sm text-[#86868b] leading-relaxed">
                        {campaign.why}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#a1a1a6] mb-1">
                        Transkript-Basis
                      </h4>
                      <p className="text-sm text-[#86868b] leading-relaxed">
                        {campaign.transcriptBasis}
                      </p>
                    </div>
                    <div className="border-l-2 border-accent/30 pl-4">
                      <h4 className="text-sm font-medium text-white mb-1">
                        Kern-Erkenntnis
                      </h4>
                      <p className="text-sm text-[#a1a1a6] leading-relaxed">
                        {campaign.keyInsight}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </AnimatedSection>

        {/* Section 5: Winning Language */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Die Verkaufs-Sprache
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Exakte Formulierungen aus den Transkripten, die in den
              E-Mail-Kampagnen eingesetzt werden.
            </p>

            <div className="space-y-0">
              {winningPhrases.map((phrase, i) => (
                <AnimatedSection key={i} delay={i * 50} animation="fade">
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <p className="text-xl sm:text-2xl font-medium text-white italic leading-relaxed">
                      &ldquo;{phrase.text}&rdquo;
                    </p>
                    <p className="text-xs text-[#86868b] mt-4 leading-relaxed">
                      {phrase.context}
                    </p>
                    <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest mt-2 inline-block">
                      {phrase.type === "buyer"
                        ? "Käufer-Zitat"
                        : phrase.type === "seller"
                        ? "Verkaufs-Sprache"
                        : "Erkenntnis"}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Section 6: Optimizations */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Datenbasierte Optimierungen
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Jede Regel ist doppelt validiert: durch externe Studien UND
              durch die Muster in den {analysisStats.totalTranscripts}{" "}
              Transkripten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
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
                <AnimatedSection key={i} delay={i * 40} animation="fade">
                  <div className="py-2">
                    <p className="font-semibold text-sm text-white tracking-tight">
                      {opt.rule}
                    </p>
                    <p className="text-xs text-accent mt-1 font-medium">
                      {opt.study}
                    </p>
                    <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                      {opt.transcript}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Section 7: Sequence Strategy */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Empfohlene Sequenz-Strategie
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Timing und Entscheidungen basierend auf den
              Conversion-Mustern.
            </p>

            <div className="space-y-6">
              {sequenceStrategy.timing.map((step, i) => (
                <AnimatedSection key={i} delay={i * 80} animation="fade">
                  <div className="flex items-start gap-6 py-4">
                    <span className="text-accent/60 font-mono text-sm mt-0.5 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white tracking-tight">
                        {step.label}
                      </p>
                      <p className="text-sm text-[#86868b] mt-2 leading-relaxed">
                        {step.rationale}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="space-y-0 divide-y divide-white/[0.06] mt-12">
              <h3 className="text-lg font-semibold text-white tracking-tight pb-6">
                Strategische Entscheidungen
              </h3>
              {sequenceStrategy.keyDecisions.map((item, i) => (
                <AnimatedSection key={i} delay={i * 50} animation="fade">
                  <div className="py-6">
                    <h4 className="font-medium text-sm text-white">
                      {item.decision}
                    </h4>
                    <p className="text-sm text-[#86868b] mt-2 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <section className="text-center py-24">
          <p className="text-sm text-[#86868b] leading-relaxed">
            Analyse basierend auf {analysisStats.totalTranscripts}{" "}
            Verkaufsgesprächen &middot;{" "}
            {analysisStats.buyerTranscripts} Käufer &middot;{" "}
            {analysisStats.nonBuyerTranscripts} Nicht-Käufer
          </p>
          <Link
            href="/"
            className="inline-block text-sm font-medium text-[#86868b] hover:text-accent transition-colors mt-4"
          >
            Zu den E-Mail-Kampagnen
          </Link>
          <p className="text-xs text-[#48484a] pt-6">
            Erstellt für Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
