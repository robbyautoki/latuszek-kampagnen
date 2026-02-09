import Image from "next/image";
import Link from "next/link";
import {
  currentTargetGroup,
  actualBuyerIndustries,
  detailedIndustries,
  actualBuyerProfile,
  gapAnalysis,
  expansionSuggestions,
  targetGroupStats,
} from "@/data/target-group";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCounter } from "@/components/animated-counter";

const potentialColors: Record<string, string> = {
  Hoch: "bg-accent text-white",
  "Mittel-Hoch": "bg-accent/70 text-white",
  Mittel: "bg-accent/40 text-white",
  Nische: "bg-white/10 text-[#a1a1a6]",
};

export default function ZielgruppePage() {
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
              Zielgruppe
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
              href="/naechste-steps"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Nächste Steps
            </Link>
            <Link
              href="/liste"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Liste
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-20 sm:pt-48 sm:pb-24">
            <p className="text-[#86868b] text-sm font-medium uppercase tracking-widest mb-6">
              {targetGroupStats.buyersAnalyzed} Käufer &middot;{" "}
              {targetGroupStats.totalConversations} Gespräche analysiert
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05]">
              Wer kauft wirklich?
            </h1>
            <p className="text-[#86868b] text-lg sm:text-xl max-w-3xl leading-relaxed mt-6">
              Die definierte Zielgruppe deckt nur einen Bruchteil der
              tatsächlichen Käufer ab. Diese Analyse zeigt, wo das größte
              ungenutzte Potenzial liegt &ndash; und wie man es erschließt.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-16">
          {[
            {
              value: targetGroupStats.industriesFound,
              label: "Branchen gefunden",
            },
            {
              value: targetGroupStats.outsideTargetGroup,
              label: "Käufer außerhalb Zielgruppe",
            },
            {
              value: targetGroupStats.femalePercentage,
              label: "Weibliche Käufer",
            },
            {
              value: targetGroupStats.companySizeMode,
              label: "Häufigste Unternehmensgröße",
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

        {/* Section 1: Aktuelle Zielgruppe (Latuszek) */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Aktuelle Zielgruppe
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed">
              So ist die Zielgruppe aktuell definiert &ndash; basierend auf
              Latuszeks Angaben.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Definition
                </h3>
                <ul className="space-y-0">
                  {[
                    { label: "Position", value: currentTargetGroup.position },
                    { label: "Ebene", value: currentTargetGroup.department },
                    {
                      label: "Unternehmensgröße",
                      value: currentTargetGroup.companySize,
                    },
                    { label: "Region", value: currentTargetGroup.geography },
                    {
                      label: "Branchen",
                      value: currentTargetGroup.industries.join(", "),
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
                  {currentTargetGroup.traits.map((trait, i) => (
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
          </section>
        </AnimatedSection>

        {/* Section 2: Tatsächliches Käufer-Profil */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tatsächliches Käufer-Profil
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed">
              Basierend auf {targetGroupStats.buyersAnalyzed} analysierten
              Käufer-Transkripten &ndash; ein deutlich breiteres Bild.
            </p>

            {/* Industry Bars */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Branchen der tatsächlichen Käufer
              </h3>
              <div className="space-y-0">
                {actualBuyerIndustries.map((ind, i) => (
                  <AnimatedSection
                    key={ind.name}
                    delay={i * 50}
                    animation="fade"
                  >
                    <div className="py-5 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {ind.name}
                        </h4>
                        <span className="text-sm text-[#86868b] font-mono tabular-nums">
                          {ind.share}%
                        </span>
                      </div>
                      <div className="h-px w-full bg-[#1d1d1f] mb-2">
                        <div
                          className="h-px bg-accent transition-all duration-1000"
                          style={{ width: `${ind.share}%` }}
                        />
                      </div>
                      {ind.examples && (
                        <p className="text-xs text-[#86868b]">
                          {ind.examples}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Detailed Industries */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Alle identifizierten Branchen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                {detailedIndustries.map((ind, i) => (
                  <div key={ind} className="flex items-start gap-4 text-sm">
                    <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a1a1a6] leading-relaxed">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                  Demografie
                </h3>
                <ul className="space-y-0">
                  {[
                    { label: "Alter", value: actualBuyerProfile.ageRange },
                    {
                      label: "Unternehmensgröße",
                      value: actualBuyerProfile.companySize,
                    },
                    { label: "Umsatz", value: actualBuyerProfile.revenue },
                    {
                      label: "GmbHs pro Käufer",
                      value: actualBuyerProfile.companiesPerBuyer,
                    },
                    {
                      label: "Monatl. Investment",
                      value: actualBuyerProfile.monthlyInvestment,
                    },
                    {
                      label: "Geschlecht",
                      value: `${actualBuyerProfile.genderSplit.male}% männlich, ${actualBuyerProfile.genderSplit.female}% weiblich`,
                    },
                  ].map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex justify-between py-4 text-sm ${idx < 5 ? "border-b border-white/[0.06]" : ""}`}
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
                  Unternehmensformen
                </h3>
                <ul className="space-y-0">
                  {actualBuyerProfile.companyTypes.map((type, idx) => (
                    <li
                      key={type}
                      className={`flex items-center py-4 text-sm ${idx < actualBuyerProfile.companyTypes.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <span className="font-medium text-white">{type}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6 mt-10">
                  Entdeckungskanäle
                </h3>
                <ul className="space-y-0">
                  {actualBuyerProfile.discoveryChannels.map((ch, idx) => (
                    <li
                      key={ch.channel}
                      className={`flex justify-between py-4 text-sm ${idx < actualBuyerProfile.discoveryChannels.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      <span className="text-[#86868b]">{ch.channel}</span>
                      <span className="font-medium text-white">
                        {ch.share}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Psychographics */}
            <div className="mt-12">
              <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
                Psychografie der Käufer
              </h3>
              <ul className="space-y-4">
                {actualBuyerProfile.psychographics.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <span className="text-[#48484a] font-mono text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a1a1a6] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 3: Gap-Analyse */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Gap-Analyse
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Vergleich zwischen der definierten Zielgruppe und den
              tatsächlichen Käufern &ndash; wo geht Potenzial verloren?
            </p>

            <div className="space-y-0">
              {gapAnalysis.map((gap, i) => (
                <AnimatedSection
                  key={gap.dimension}
                  delay={i * 50}
                  animation="fade"
                >
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {gap.dimension}
                      </h3>
                      <span className="text-sm text-accent font-mono tabular-nums">
                        {gap.gapPercent}% Gap
                      </span>
                    </div>
                    <div className="h-px w-full bg-[#1d1d1f] mb-4">
                      <div
                        className="h-px bg-accent transition-all duration-1000"
                        style={{ width: `${gap.gapPercent}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Definition
                        </span>
                        <p className="text-[#86868b] mt-1 leading-relaxed">
                          {gap.latuszek}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-[#48484a] font-medium uppercase tracking-widest">
                          Realität
                        </span>
                        <p className="text-[#a1a1a6] mt-1 leading-relaxed">
                          {gap.realitaet}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-accent/80 mt-4 font-medium">
                      {gap.gapLabel}
                    </p>
                    <p className="text-sm text-[#a1a1a6] mt-2 leading-relaxed">
                      <span className="text-accent font-medium">
                        Empfehlung:{" "}
                      </span>
                      {gap.recommendation}
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
                Die aktuelle Zielgruppe erfasst nur ca. 17% der tatsächlichen
                Käufer korrekt. 83% der zahlenden Kunden kommen aus Branchen,
                Unternehmensgrößen oder Lebenssituationen, die in der
                aktuellen Definition nicht vorkommen. Das bedeutet: Mit einer
                erweiterten Zielgruppe kann der adressierbare Markt um ein
                Vielfaches vergrößert werden.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: Erweiterungsvorschläge */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Erweiterungsvorschläge
            </h2>
            <p className="text-[#86868b] mt-2 leading-relaxed mb-12">
              Konkrete Maßnahmen, um die Zielgruppe datenbasiert zu erweitern
              &ndash; sortiert nach Potenzial.
            </p>

            <div className="space-y-0">
              {expansionSuggestions.map((suggestion, i) => (
                <AnimatedSection
                  key={suggestion.title}
                  delay={i * 50}
                  animation="fade"
                >
                  <div className="py-8 border-b border-white/[0.06] last:border-b-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {suggestion.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ${potentialColors[suggestion.potential]}`}
                      >
                        {suggestion.potential}
                      </span>
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {suggestion.reason}
                    </p>
                    <div className="mt-4 border-l-2 border-accent/30 pl-4">
                      <p className="text-sm text-[#a1a1a6] leading-relaxed">
                        <span className="text-accent font-medium">
                          Maßnahme:{" "}
                        </span>
                        {suggestion.action}
                      </p>
                    </div>
                    <p className="text-xs text-[#48484a] font-medium mt-3">
                      Geschätzter Impact: {suggestion.estimatedReach}
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
            Analyse basierend auf {targetGroupStats.buyersAnalyzed} Käufer-Transkripten
            &middot; {targetGroupStats.totalConversations} Gespräche insgesamt
            &middot; {targetGroupStats.industriesFound} Branchen identifiziert
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
              Zur Strategie-Analyse
            </Link>
          </div>
          <p className="text-xs text-[#48484a] pt-6">
            Erstellt für Latuszek Finanzberatung GmbH &middot; Datenbasierte
            Zielgruppen-Erweiterung
          </p>
        </section>
      </main>
    </div>
  );
}
