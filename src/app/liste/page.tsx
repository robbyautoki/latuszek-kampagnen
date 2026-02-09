import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { itCampaigns } from "@/data/it-campaigns";
import { LeadTable } from "./lead-table";

export default function ListePage() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
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
              Lead-Liste
            </p>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/zielgruppe"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zielgruppe
            </Link>
            <Link
              href="/analyse"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Analyse
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

      <main className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
            <p className="text-[#86868b] text-sm font-medium uppercase tracking-widest mb-6">
              IT-Segment · 3 Kampagnen
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
              Lead-Liste
            </h1>
            <p className="text-[#86868b] text-lg max-w-2xl leading-relaxed mt-4">
              3.130 bereinigte Kontakte mit 2 Kampagnen-Varianten.
              GmbH-Geschäftsführer im IT-Segment, Deutschland.
            </p>
          </section>
        </AnimatedSection>

        {/* Password-protected content */}
        <LeadTable campaigns={itCampaigns} />

        {/* Footer */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/zielgruppe"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Zielgruppe ansehen
            </Link>
            <span className="text-[#48484a]">&middot;</span>
            <Link
              href="/analyse"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Analyse ansehen
            </Link>
          </div>
          <p className="text-xs text-[#48484a] pt-4">
            Erstellt f\u00FCr Latuszek Finanzberatung GmbH
          </p>
        </section>
      </main>
    </div>
  );
}
