import Image from "next/image";
import Link from "next/link";
import {
  expandedTargetGroup,
  leadSources,
  outreachTools,
  campaignMappings,
  multiChannelSequence,
  warmupPlan,
  deliverabilityChecklist,
  timingStrategy,
  expectedKPIs,
  nextStepsStats,
} from "@/data/next-steps";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCounter } from "@/components/animated-counter";

const priorityColors: Record<string, string> = {
  Hoch: "bg-accent text-white",
  Mittel: "bg-accent/40 text-white",
  Basis: "bg-white/10 text-[#a1a1a6]",
};

const sourceTypeColors: Record<string, string> = {
  "Primär": "text-accent",
  "Sekundär": "text-[#a1a1a6]",
  "Ergänzend": "text-[#86868b]",
};

const warmthColors: Record<string, string> = {
  Kalt: "bg-blue-500/20 text-blue-400",
  Lauwarm: "bg-amber-500/20 text-amber-400",
  Warm: "bg-green-500/20 text-green-400",
};

export default function NaechsteStepsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
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
              Nächste Steps
            </p>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Kampagnen
            </Link>
            <Link
              href="/analyse"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Analyse
            </Link>
            <Link
              href="/zielgruppe"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zielgruppe
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-20 sm:pt-48 sm:pb-24">
            <p className="text-[#86868b] text-sm font-medium uppercase tracking-widest mb-6">
              Lead-Generierung &middot; Kampagnen-Rollout &middot;
              Multi-Channel
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05]">
              Von der Analyse<br />zur Aktion
            </h1>
            <p className="text-[#86868b] text-lg sm:text-xl max-w-3xl leading-relaxed mt-6">
              Der konkrete Fahrplan: Wie aus der erweiterten Zielgruppe Leads
              werden, welche Kampagne für welches Segment eingesetzt wird, und
              wie der technische Rollout funktioniert.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-16">
          {[
            {
              value: nextStepsStats.leadSources,
              label: "Lead-Quellen",
            },
            {
              value: nextStepsStats.multiChannelUplift,
              label: "Multi-Channel Uplift",
            },
            {
              value: nextStepsStats.salesCycle,
              suffix: " Tage",
              label: "Avg. Sales Cycle",
            },
            {
              value: nextStepsStats.responseRate,
              label: "Erwartete Response Rate",
            },
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

        {/* Section 1: Erweiterte Zielgruppe */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Erweiterte Zielgruppe
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed">
              Unsere datenbasierte Empfehlung &ndash; deutlich breiter als die
              bisherige Definition, basierend auf den tatsächlichen Käufern.
            </p>

            {/* Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Kerndaten
                </h3>
                <ul className="space-y-0">
                  {[
                    { label: "Position", value: expandedTargetGroup.position },
                    { label: "Größe", value: expandedTargetGroup.companySize },
                    { label: "Region", value: expandedTargetGroup.geography },
                    { label: "Umsatz", value: expandedTargetGroup.revenue },
                    {
                      label: "Rechtsformen",
                      value: expandedTargetGroup.companyTypes.join(", "),
                    },
                  ].map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex justify-between py-4 text-sm ${idx < 4 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <span className="text-[#86868b]">{item.label}</span>
                      <span className="font-medium text-white text-right">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Merkmale
                </h3>
                <ul className="space-y-4">
                  {expandedTargetGroup.traits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm">
                      <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#a1a1a6] leading-relaxed">
                        {trait}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industries with Priority */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Branchen nach Priorität
              </h3>
              <div className="space-y-0">
                {expandedTargetGroup.industries.map((ind, i) => (
                  <AnimatedSection
                    key={ind.name}
                    delay={i * 50}
                    animation="fade"
                  >
                    <div className="py-5 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-semibold text-white tracking-tight">
                            {ind.name}
                          </h4>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityColors[ind.priority]}`}
                          >
                            {ind.priority}
                          </span>
                        </div>
                        <span className="text-sm text-[#86868b] font-mono tabular-nums">
                          {ind.share}
                        </span>
                      </div>
                      {ind.note && (
                        <p className="text-xs text-[#86868b] mt-1">
                          {ind.note}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Trigger Events */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Trigger-Events für die Ansprache
              </h3>
              <ul className="space-y-4">
                {expandedTargetGroup.triggerEvents.map((te, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        {te.trigger}
                      </span>
                      <p className="text-[#86868b] mt-0.5 leading-relaxed">
                        {te.reason}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 2: Lead-Generierung */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Lead-Generierung
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              6 Quellen für qualifizierte Leads &ndash; mit konkretem
              Personalisierungswinkel für jede Quelle.
            </p>

            <div className="space-y-0">
              {leadSources.map((source, i) => (
                <AnimatedSection
                  key={source.name}
                  delay={i * 50}
                  animation="fade"
                >
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white tracking-tight">
                          {source.name}
                        </h3>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          {source.type}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-medium ${sourceTypeColors[source.priority]}`}
                      >
                        {source.priority}
                      </span>
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {source.description}
                    </p>
                    <div className="mt-3 border-l-2 border-accent/30 pl-4">
                      <p className="text-sm text-[#a1a1a6] leading-relaxed italic">
                        {source.personalizationAngle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Outreach Tools */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Empfohlene Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {outreachTools.map((tool, i) => (
                  <AnimatedSection
                    key={tool.name}
                    delay={i * 50}
                    animation="fade"
                  >
                    <div className="border border-white/[0.06] rounded-xl p-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-semibold text-white tracking-tight">
                          {tool.name}
                        </h4>
                        <span className="text-xs text-[#48484a] font-medium">
                          {tool.type}
                        </span>
                      </div>
                      <p className="text-sm text-accent font-medium mb-3">
                        {tool.note}
                      </p>
                      <ul className="space-y-1.5">
                        {tool.features.map((f) => (
                          <li
                            key={f}
                            className="text-xs text-[#86868b] leading-relaxed"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 3: Kampagnen-Zuordnung */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Kampagnen-Zuordnung
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Welche der 3 bestehenden Kampagnen für welches Segment &ndash;
              basierend auf Buyer-Psychologie und Branchenfit.
            </p>

            <div className="space-y-0">
              {campaignMappings.map((mapping, i) => (
                <AnimatedSection
                  key={mapping.campaignId}
                  delay={i * 80}
                  animation="fade"
                >
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-accent font-mono text-sm flex-shrink-0">
                          0{mapping.campaignId}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-white tracking-tight">
                            &ldquo;{mapping.campaignName}&rdquo;
                          </h3>
                          <p className="text-xs text-[#86868b] mt-0.5">
                            {mapping.framework}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${warmthColors[mapping.warmthLevel]}`}
                        >
                          {mapping.warmthLevel}
                        </span>
                        <span className="text-sm text-accent font-mono tabular-nums">
                          {mapping.expectedResponseRate}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm pl-10">
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Ideale Segmente
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {mapping.idealSegments.map((seg) => (
                            <span
                              key={seg}
                              className="text-xs text-[#a1a1a6] bg-white/5 px-2.5 py-1 rounded-full"
                            >
                              {seg}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Am besten für
                        </span>
                        <ul className="mt-2 space-y-1">
                          {mapping.bestFor.map((b) => (
                            <li
                              key={b}
                              className="text-[#86868b] leading-relaxed"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: Multi-Channel-Sequenz */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Multi-Channel-Sequenz
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              10-Tage-Ablauf mit LinkedIn + E-Mail &ndash; für +287% mehr
              Responses im Vergleich zu reinem E-Mail-Outreach.
            </p>

            <div className="space-y-0">
              {multiChannelSequence.map((step, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 60}
                  animation="fade"
                >
                  <div className="flex items-start gap-6 py-6 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex flex-col items-center flex-shrink-0 w-16">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                          step.channel === "LinkedIn"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-accent/20 text-accent border border-accent/30"
                        }`}
                      >
                        Tag {step.day}
                      </div>
                      <span className="text-[10px] text-[#48484a] font-medium uppercase tracking-widest mt-2">
                        {step.channel}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-white tracking-tight text-sm">
                        {step.action}
                      </h4>
                      <p className="text-sm text-[#86868b] mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="py-12 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Warum Multi-Channel?
              </h3>
              <p className="text-[#a1a1a6] leading-relaxed">
                3+ Touchpoints über verschiedene Kanäle ergeben +287% mehr
                Antworten als nur E-Mail (SalesLoft Studie). LinkedIn erzeugt
                Vertrautheit, die E-Mail liefert den konkreten Wert. Der
                Prospect hat das Gefühl, den Absender bereits zu
                &ldquo;kennen&rdquo; &ndash; was die Antwortbarriere massiv
                senkt.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 5: Technisches Setup */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technisches Setup
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Deliverability-Checkliste und Domain-Warmup-Plan &ndash; ohne
              dieses Setup landen Mails im Spam.
            </p>

            {/* Deliverability Checklist */}
            <div>
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Deliverability-Checkliste
              </h3>
              <div className="space-y-0">
                {deliverabilityChecklist.map((check, i) => (
                  <AnimatedSection
                    key={check.item}
                    delay={i * 40}
                    animation="fade"
                  >
                    <div className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-b-0">
                      <div className="w-6 h-6 rounded border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] text-accent font-mono">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white tracking-tight">
                          {check.item}
                        </p>
                        <p className="text-xs text-[#86868b] mt-0.5 leading-relaxed">
                          {check.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Warmup Plan */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Domain-Warmup (4 Wochen)
              </h3>
              <div className="space-y-0">
                {warmupPlan.map((week, i) => (
                  <AnimatedSection
                    key={week.week}
                    delay={i * 60}
                    animation="fade"
                  >
                    <div className="flex items-start gap-6 py-6 border-b border-white/[0.06] last:border-b-0">
                      <span className="text-accent/60 font-mono text-sm mt-0.5 flex-shrink-0">
                        W{week.week}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between">
                          <p className="font-semibold text-white tracking-tight">
                            {week.volume}
                          </p>
                          <span className="text-xs text-[#86868b] font-mono">
                            {week.mix}
                          </span>
                        </div>
                        <p className="text-sm text-[#86868b] mt-1 leading-relaxed">
                          {week.note}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 6: Timing */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Timing &amp; Versand
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Die richtigen Monate, Tage und Uhrzeiten &ndash; plus deutsche
              ISP-Besonderheiten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Beste Monate
                </h3>
                <ul className="space-y-4">
                  {timingStrategy.bestMonths.map((m, i) => (
                    <li key={m.month} className="flex items-start gap-4 text-sm">
                      <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="font-medium text-white">
                          {m.month}
                        </span>
                        <p className="text-[#86868b] mt-0.5 leading-relaxed">
                          {m.reason}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-4">
                    Vermeiden
                  </h3>
                  <ul className="space-y-2">
                    {timingStrategy.avoidMonths.map((m) => (
                      <li key={m} className="text-sm text-[#86868b]">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Versand-Timing
                </h3>
                <ul className="space-y-0">
                  {[
                    { label: "Beste Tage", value: timingStrategy.bestDays },
                    { label: "Beste Uhrzeit", value: timingStrategy.bestTime },
                  ].map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex justify-between py-4 text-sm ${idx === 0 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <span className="text-[#86868b]">{item.label}</span>
                      <span className="font-medium text-white">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6 mt-10">
                  Deutsche ISP-Besonderheiten
                </h3>
                <ul className="space-y-4">
                  {timingStrategy.germanISPNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm">
                      <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#a1a1a6] leading-relaxed">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 7: KPIs */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Erwartete KPIs
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Benchmark-Werte für die Kampagnen-Performance &ndash; basierend
              auf Branchendaten und den bestehenden Conversion-Mustern.
            </p>

            <div className="space-y-0">
              {expectedKPIs.map((kpi, i) => (
                <AnimatedSection
                  key={kpi.metric}
                  delay={i * 50}
                  animation="fade"
                >
                  <div className="py-6 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {kpi.metric}
                      </h3>
                      <span className="text-lg text-accent font-mono font-bold tabular-nums">
                        {kpi.target}
                      </span>
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {kpi.note}
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
            Operativer Fahrplan &middot; Lead-Generierung &middot;
            Kampagnen-Rollout &middot; Multi-Channel-Strategie
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              href="/"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zu den Kampagnen
            </Link>
            <span className="text-[#48484a]">&middot;</span>
            <Link
              href="/analyse"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zur Analyse
            </Link>
            <span className="text-[#48484a]">&middot;</span>
            <Link
              href="/zielgruppe"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zur Zielgruppe
            </Link>
          </div>
          <p className="text-xs text-[#48484a] pt-6">
            Erstellt für Latuszek Finanzberatung GmbH &middot; Datenbasierter
            Rollout-Plan
          </p>
        </section>
      </main>
    </div>
  );
}
