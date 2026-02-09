import Image from "next/image";
import Link from "next/link";
import { campaigns, optimizations } from "@/data/campaigns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailCard } from "@/components/email-card";
import { StatsBar } from "@/components/stats-bar";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
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
              Cold Email Kampagnen
            </p>
          </div>
          <nav className="flex items-center gap-6">
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
              href="/naechste-steps"
              className="text-sm font-medium text-[#86868b] hover:text-accent transition-colors"
            >
              Nächste Steps
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <AnimatedSection animation="fade">
          <section className="text-center pt-40 pb-24 sm:pt-48 sm:pb-32">
            <p className="text-[#86868b] text-sm font-medium uppercase tracking-widest mb-6">
              266 Gespräche analysiert
            </p>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              Cold Email<br />Kampagnen
            </h2>

            <p className="text-[#86868b] max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mt-6">
              3 optimierte Kampagnen mit je 3 E-Mails für GmbH-Geschäftsführer.
              Jede Mail datenbasiert optimiert für maximale Response Rate.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats */}
        <section className="py-16">
          <StatsBar />
        </section>

        {/* Optimizations */}
        <AnimatedSection animation="fade">
          <section className="py-20">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Angewendete Optimierungen
            </h3>
            <p className="text-[#86868b] mb-12">
              10 datenbasierte Regeln, die jede E-Mail optimieren.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {optimizations.map((opt, i) => (
                <AnimatedSection key={opt.rule} delay={i * 40} animation="fade">
                  <div className="py-1">
                    <p className="font-semibold text-sm text-white tracking-tight">
                      {opt.rule}
                    </p>
                    <p className="text-sm text-[#86868b] mt-1 leading-relaxed">
                      {opt.data}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Campaigns */}
        <Tabs defaultValue="1" className="py-20">
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex rounded-full bg-[#1d1d1f] p-1">
              {campaigns.map((campaign) => (
                <TabsTrigger
                  key={campaign.id}
                  value={String(campaign.id)}
                  className="rounded-full px-6 py-2.5 text-sm font-medium text-[#86868b] transition-colors data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  <span className="hidden sm:inline">Kampagne {campaign.id}</span>
                  <span className="sm:hidden">{campaign.id}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {campaigns.map((campaign) => (
            <TabsContent
              key={campaign.id}
              value={String(campaign.id)}
            >
              {/* Campaign Header */}
              <AnimatedSection animation="fade">
                <div className="py-10">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                    Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
                    {[
                      { label: "Framework", value: campaign.framework },
                      { label: "Tonalität", value: campaign.tone },
                      { label: "Angle", value: campaign.angle },
                    ].map((field) => (
                      <div key={field.label}>
                        <span className="text-xs text-[#86868b] font-medium uppercase tracking-widest">
                          {field.label}
                        </span>
                        <p className="font-medium text-[#a1a1a6] mt-1">{field.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Emails */}
              <div className="divide-y divide-white/[0.06]">
                {campaign.emails.map((email, i) => (
                  <AnimatedSection key={email.id} delay={i * 100} animation="fade">
                    <EmailCard email={email} />
                  </AnimatedSection>
                ))}
              </div>

              {/* Sequence Timeline */}
              <AnimatedSection animation="fade">
                <div className="py-16">
                  <h4 className="text-xl font-semibold text-white tracking-tight mb-10">
                    Sequenz-Ablauf
                  </h4>
                  <div className="flex items-start justify-between gap-4">
                    {campaign.emails.map((email, i) => (
                      <div
                        key={email.id}
                        className="flex items-center gap-4 flex-1 min-w-0"
                      >
                        <div className="flex flex-col items-center text-center flex-shrink-0">
                          <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center text-xs font-medium text-white">
                            {i + 1}
                          </div>
                          <span className="text-xs text-[#86868b] mt-3">
                            {email.timing}
                          </span>
                          <span className="text-xs text-[#a1a1a6] font-medium mt-0.5">
                            {email.title}
                          </span>
                        </div>
                        {i < campaign.emails.length - 1 && (
                          <div className="flex-1 h-px min-w-8 bg-accent/15 mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>
          ))}
        </Tabs>

        {/* Footer */}
        <section className="text-center py-24">
          <p className="text-sm text-[#86868b] leading-relaxed">
            Zielgruppe: GmbH-Geschäftsführer &middot; CTA: Antwort auf E-Mail
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {["Anrede", "Nachname", "Vorname", "Firmenname", "Branche"].map(
              (p) => (
                <code
                  key={p}
                  className="text-[#86868b] px-2 py-1 text-xs font-mono"
                >
                  {`{{${p}}}`}
                </code>
              )
            )}
          </div>
          <p className="text-xs text-[#48484a] pt-6">
            Erstellt für Latuszek Finanzberatung GmbH &middot; Alle E-Mails
            datenbasiert optimiert
          </p>
        </section>
      </main>
    </div>
  );
}
