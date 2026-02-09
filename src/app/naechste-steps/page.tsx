import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

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
              N&auml;chste Steps
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
            <Link
              href="/liste"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Liste
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
              N&auml;chste Steps
            </h1>
            <p className="text-[#86868b] text-lg max-w-2xl leading-relaxed mt-4">
              Was jetzt passieren muss, um die Kampagnen live zu bringen.
            </p>
          </section>
        </AnimatedSection>

        {/* Step 01: Zielgruppe erweitern */}
        <AnimatedSection animation="fade">
          <div className="flex gap-6 py-10 border-t border-white/[0.06]">
            <span className="text-2xl font-bold text-accent tabular-nums flex-shrink-0">
              01
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white tracking-tight">
                Zielgruppe erweitern
              </h2>
              <p className="text-[#86868b] text-sm leading-relaxed mt-2">
                Aktuell haben wir nur die Zielgruppe aus Ihren Antworten:
                Manufacturing &amp; Logistics, 11&ndash;50 Mitarbeiter. Aber
                83% der echten K&auml;ufer kommen aus anderen Branchen.
              </p>

              <p className="text-sm font-medium text-white mt-6">
                Was uns noch fehlt:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "IT / Software \u2013 32% der K\u00E4ufer, gr\u00F6\u00DFte Einzelbranche",
                  "Bau / Immobilien \u2013 23% der K\u00E4ufer",
                  "Beratung / Agenturen \u2013 18% der K\u00E4ufer",
                  "E-Commerce / Handel \u2013 14% der K\u00E4ufer",
                  "Handwerk / Produktion \u2013 13% der K\u00E4ufer",
                  "Kleinstunternehmen mit 1\u201310 Mitarbeitern \u2013 \u00FCber 60% der K\u00E4ufer",
                  "Weibliche Gesch\u00E4ftsf\u00FChrerinnen \u2013 23% der K\u00E4ufer",
                  "UG- und Holding-Strukturen",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#a1a1a6] leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Step 02: Cold Email Kampagnen */}
        <AnimatedSection animation="fade">
          <div className="flex gap-6 py-10 border-t border-white/[0.06]">
            <span className="text-2xl font-bold text-accent tabular-nums flex-shrink-0">
              02
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white tracking-tight">
                Cold Email Kampagnen erstellen
              </h2>
              <p className="text-[#86868b] text-sm leading-relaxed mt-2">
                F&uuml;r jedes neue Segment erstellen wir passende Cold Email
                Kampagnen &ndash; genau wie die 3 Kampagnen auf dieser Webseite.
                Je 3 E-Mails pro Kampagne, personalisiert mit{" "}
                {"{{Anrede}}"}, {"{{Firmenname}}"} und {"{{Branche}}"}.
              </p>

              <ul className="mt-5 space-y-2">
                {[
                  'Kampagne 1 \u201EDer Steuer-Weckruf\u201C \u2192 f\u00FCr IT, Bau, Neugr\u00FCnder',
                  'Kampagne 2 \u201EDer Beweis\u201C \u2192 f\u00FCr Beratung, Handwerk',
                  'Kampagne 3 \u201EDie Herausforderung\u201C \u2192 f\u00FCr E-Commerce, digital-affine GFs',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#a1a1a6] leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Kampagnen ansehen
            </Link>
            <span className="text-[#48484a]">&middot;</span>
            <Link
              href="/analyse"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Analyse ansehen
            </Link>
            <span className="text-[#48484a]">&middot;</span>
            <Link
              href="/zielgruppe"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zielgruppe ansehen
            </Link>
          </div>
          <p className="text-xs text-[#48484a] pt-4">
            Erstellt f&uuml;r Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
