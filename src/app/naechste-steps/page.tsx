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
              6 Schritte &middot; Von der Analyse zur Aktion
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05]">
              In 6 Schritten zum<br />Kampagnen-Rollout
            </h1>
            <p className="text-[#86868b] text-lg sm:text-xl max-w-3xl leading-relaxed mt-6">
              Der komplette Fahrplan &ndash; Schritt für Schritt. Von der
              Zielgruppe über die Lead-Listen bis zum laufenden
              Multi-Channel-Outreach.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-16">
          {[
            { value: nextStepsStats.leadSources, label: "Lead-Quellen" },
            { value: nextStepsStats.multiChannelUplift, label: "Multi-Channel Uplift" },
            { value: nextStepsStats.salesCycle, label: "Tage Sales Cycle" },
            { value: nextStepsStats.responseRate, label: "Response Rate" },
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

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 1: Zielgruppe festlegen               */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                01
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Zielgruppe festlegen
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  Wen sprechen wir an? Die erweiterte Zielgruppe basierend auf
                  den tatsächlichen Käufern &ndash; nicht nur Manufacturing &
                  Logistics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
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
                    { label: "Rechtsformen", value: expandedTargetGroup.companyTypes.join(", ") },
                  ].map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex justify-between py-3.5 text-sm ${idx < 4 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <span className="text-[#86868b]">{item.label}</span>
                      <span className="font-medium text-white text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Branchen nach Priorität
                </h3>
                <ul className="space-y-0">
                  {expandedTargetGroup.industries.map((ind, idx) => (
                    <li
                      key={ind.name}
                      className={`flex items-center justify-between py-3.5 text-sm ${idx < expandedTargetGroup.industries.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-medium text-white">{ind.name}</span>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${priorityColors[ind.priority]}`}>
                          {ind.priority}
                        </span>
                      </div>
                      <span className="text-[#86868b] font-mono text-xs tabular-nums">{ind.share}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trigger Events */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                Wann ansprechen? Trigger-Events
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {expandedTargetGroup.triggerEvents.map((te, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-medium text-white">{te.trigger}</span>
                      <p className="text-[#86868b] mt-0.5 text-xs leading-relaxed">{te.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 2: Lead-Listen aufbauen                */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                02
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Lead-Listen aufbauen
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  Woher kommen die Kontakte? 6 Quellen für qualifizierte
                  GmbH-Geschäftsführer &ndash; mit dem passenden
                  Personalisierungswinkel.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-0">
              {leadSources.map((source, i) => (
                <AnimatedSection key={source.name} delay={i * 50} animation="fade">
                  <div className="py-6 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="font-semibold text-white tracking-tight">
                        {source.name}
                      </h3>
                      <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                        {source.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {source.description}
                    </p>
                    <div className="mt-2.5 border-l-2 border-accent/30 pl-4">
                      <p className="text-sm text-[#a1a1a6] leading-relaxed italic">
                        {source.personalizationAngle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                Empfohlene Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {outreachTools.map((tool) => (
                  <div key={tool.name} className="border border-white/[0.06] rounded-xl p-5">
                    <h4 className="font-semibold text-white tracking-tight text-sm">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-accent font-medium mt-1">{tool.note}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {tool.features.map((f) => (
                        <span key={f} className="text-[10px] text-[#86868b] bg-white/5 px-2 py-0.5 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 3: Technisches Setup                   */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                03
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Technisches Setup
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  Was muss eingerichtet werden, bevor die erste Mail rausgeht?
                  Ohne dieses Setup landen Mails im Spam.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
              {/* Checklist */}
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                  Deliverability-Checkliste
                </h3>
                <div className="space-y-0">
                  {deliverabilityChecklist.map((check, i) => (
                    <div key={check.item} className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-b-0">
                      <div className="w-5 h-5 rounded border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[9px] text-accent font-mono">{i + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">{check.item}</p>
                        <p className="text-xs text-[#86868b] mt-0.5">{check.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warmup */}
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                  Domain-Warmup (4 Wochen)
                </h3>
                <div className="space-y-0">
                  {warmupPlan.map((week) => (
                    <div key={week.week} className="py-4 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className="text-accent/60 font-mono text-xs">W{week.week}</span>
                          <p className="font-medium text-white text-sm">{week.volume}</p>
                        </div>
                        <span className="text-xs text-[#86868b] font-mono">{week.mix}</span>
                      </div>
                      <p className="text-xs text-[#86868b] mt-1 pl-8">{week.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 4: Richtige Kampagne wählen            */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                04
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Richtige Kampagne wählen
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  Welche der 3 Kampagnen passt zu welchem Segment? Jede
                  Kampagne ist für einen bestimmten Käufertyp optimiert.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-0">
              {campaignMappings.map((mapping, i) => (
                <AnimatedSection key={mapping.campaignId} delay={i * 80} animation="fade">
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-white tracking-tight">
                            Kampagne {mapping.campaignId}: &ldquo;{mapping.campaignName}&rdquo;
                          </h3>
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${warmthColors[mapping.warmthLevel]}`}>
                            {mapping.warmthLevel}
                          </span>
                        </div>
                        <p className="text-xs text-[#86868b]">{mapping.framework}</p>
                      </div>
                      <span className="text-lg text-accent font-mono font-bold tabular-nums flex-shrink-0">
                        {mapping.expectedResponseRate}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Einsetzen für
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {mapping.idealSegments.map((seg) => (
                            <span key={seg} className="text-xs text-[#a1a1a6] bg-white/5 px-2.5 py-1 rounded-full">
                              {seg}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Funktioniert bei
                        </span>
                        <ul className="mt-2 space-y-1">
                          {mapping.bestFor.map((b) => (
                            <li key={b} className="text-xs text-[#86868b] leading-relaxed">{b}</li>
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

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 5: Multi-Channel-Sequenz starten       */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                05
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Multi-Channel-Sequenz starten
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  10 Tage, LinkedIn + E-Mail kombiniert. Ergibt +287% mehr
                  Antworten als nur E-Mail allein.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-0">
              {multiChannelSequence.map((step, i) => (
                <AnimatedSection key={i} delay={i * 60} animation="fade">
                  <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                          step.channel === "LinkedIn"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-accent/20 text-accent border border-accent/30"
                        }`}
                      >
                        Tag {step.day}
                      </div>
                      <span className="text-[10px] text-[#48484a] font-medium uppercase tracking-widest mt-1.5">
                        {step.channel}
                      </span>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-semibold text-white tracking-tight text-sm">
                        {step.action}
                      </h4>
                      <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-accent/30 pl-4">
              <p className="text-sm text-[#a1a1a6] leading-relaxed">
                <span className="text-accent font-medium">Warum Multi-Channel? </span>
                3+ Touchpoints über verschiedene Kanäle ergeben +287% mehr
                Antworten (SalesLoft Studie). LinkedIn erzeugt Vertrautheit,
                die E-Mail liefert den Wert. Der Prospect &ldquo;kennt&rdquo;
                den Absender bereits.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════ */}
        {/* STEP 6: Messen & Optimieren                 */}
        {/* ═══════════════════════════════════════════ */}
        <AnimatedSection animation="fade">
          <section className="py-20 border-t border-white/[0.06]">
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-5xl sm:text-6xl font-bold text-accent/20 leading-none flex-shrink-0 tabular-nums">
                06
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Messen &amp; Optimieren
                </h2>
                <p className="text-[#86868b] mt-2 leading-relaxed">
                  Woran erkennen wir Erfolg? Die erwarteten KPIs und das
                  optimale Timing für den Versand.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
              {/* KPIs */}
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                  Erwartete KPIs
                </h3>
                <div className="space-y-0">
                  {expectedKPIs.map((kpi) => (
                    <div key={kpi.metric} className="py-3.5 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <span className="text-sm font-medium text-white">{kpi.metric}</span>
                        <span className="text-sm text-accent font-mono font-bold tabular-nums">
                          {kpi.target}
                        </span>
                      </div>
                      <p className="text-xs text-[#86868b]">{kpi.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timing */}
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-5">
                  Bestes Timing
                </h3>
                <div className="space-y-0">
                  {timingStrategy.bestMonths.map((m, idx) => (
                    <div key={m.month} className={`py-3.5 text-sm ${idx < timingStrategy.bestMonths.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                      <span className="font-medium text-white">{m.month}</span>
                      <p className="text-xs text-[#86868b] mt-0.5">{m.reason}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-0">
                  {[
                    { label: "Beste Tage", value: timingStrategy.bestDays },
                    { label: "Beste Uhrzeit", value: timingStrategy.bestTime },
                  ].map((item, idx) => (
                    <div key={item.label} className={`flex justify-between py-3.5 text-sm ${idx === 0 ? "border-b border-white/[0.06]" : ""}`}>
                      <span className="text-[#86868b]">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs text-[#48484a] font-medium uppercase tracking-widest mb-3">
                    Vermeiden
                  </p>
                  {timingStrategy.avoidMonths.map((m) => (
                    <p key={m} className="text-xs text-[#86868b]">{m}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <section className="text-center py-24">
          <p className="text-sm text-[#86868b] leading-relaxed">
            6 Schritte &middot; Datenbasierter Fahrplan &middot;
            Multi-Channel-Strategie
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
