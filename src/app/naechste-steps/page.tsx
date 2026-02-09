import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

const steps = [
  {
    number: "01",
    title: "Zielgruppe definieren",
    description:
      "GmbH-Geschäftsführer mit 1–50 Mitarbeitern in Deutschland. Fokus auf die 5 Branchen mit den meisten Käufern:",
    bullets: [
      "IT / Software (32%)",
      "Bau / Immobilien (23%)",
      "Beratung / Agenturen (18%)",
      "E-Commerce / Handel (14%)",
      "Handwerk / Produktion (13%)",
    ],
  },
  {
    number: "02",
    title: "Lead-Listen aufbauen",
    description:
      "Kontakte aus 3 Hauptquellen sammeln und mit personalisierten Daten anreichern.",
    bullets: [
      "Handelsregister – GF-Wechsel, Neugründungen als Trigger",
      "Bundesanzeiger – Jahresabschlüsse für Umsatz/Gewinn-Daten",
      "LinkedIn – Profil-Besuche & Connection Requests als Touchpoint",
    ],
  },
  {
    number: "03",
    title: "Technisches Setup",
    description:
      "Bevor die erste Mail rausgeht: Separate Sending-Domain einrichten (z.B. mail.latuszek-partner.de), SPF, DKIM und DMARC konfigurieren. Dann 4 Wochen Domain-Warmup – von 10 Mails/Tag langsam auf 150–200 hochfahren.",
  },
  {
    number: "04",
    title: "Kampagne zuordnen",
    description: "Jede der 3 Kampagnen passt zu einem anderen Käufertyp:",
    bullets: [
      'Kampagne 1 \u201EDer Steuer-Weckruf\u201C \u2192 IT, Bau, Neugr\u00FCnder (8\u201312% Response)',
      'Kampagne 2 \u201EDer Beweis\u201C \u2192 Beratung, Handwerk, risikoscheue GFs (10\u201315% Response)',
      'Kampagne 3 \u201EDie Herausforderung\u201C \u2192 E-Commerce, digital-affine GFs (6\u201310% Response)',
    ],
  },
  {
    number: "05",
    title: "Multi-Channel starten",
    description:
      "LinkedIn + E-Mail über 10 Tage kombinieren. 6 Touchpoints insgesamt – ergibt +287% mehr Antworten als nur E-Mail.",
    bullets: [
      "Tag 0–1: LinkedIn Profil besuchen & Connection Request",
      "Tag 2: Mail 1 – Erstansprache",
      "Tag 5: Mail 2 – Follow-up mit neuem Angle",
      "Tag 7: LinkedIn Post liken/kommentieren",
      "Tag 10: Mail 3 – Breakup mit offenem Ende",
    ],
  },
  {
    number: "06",
    title: "Messen & optimieren",
    description:
      "Ziel: 45–65% Open Rate, 8–15% Response Rate, 3–5% Meeting Rate. Beste Monate: Oktober bis Februar. Beste Tage: Dienstag & Mittwoch, 9–11 Uhr. Juni–August und Dezember vermeiden.",
  },
];

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

      <main className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
              Nächste Steps
            </h1>
            <p className="text-[#86868b] text-lg max-w-2xl leading-relaxed mt-4">
              Der Fahrplan in 6 Schritten &ndash; von der Zielgruppe bis zum
              laufenden Outreach.
            </p>
          </section>
        </AnimatedSection>

        {/* Steps */}
        <div className="pb-20">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 60} animation="fade">
              <div className="flex gap-6 py-10 border-t border-white/[0.06]">
                <span className="text-2xl font-bold text-accent tabular-nums flex-shrink-0">
                  {step.number}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-[#86868b] text-sm leading-relaxed mt-2">
                    {step.description}
                  </p>
                  {step.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm text-[#a1a1a6] leading-relaxed"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

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
            Erstellt für Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
