import Image from "next/image";
import Link from "next/link";
import { campaigns, optimizations } from "@/data/campaigns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { EmailCard } from "@/components/email-card";
import { StatsBar } from "@/components/stats-bar";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
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
              Cold Email Kampagnen
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/analyse"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/80 hidden sm:inline-flex"
            >
              Transkript-Analyse
            </Link>
            <Badge
              variant="outline"
              className="hidden sm:inline-flex border-brand-lighter/40 text-brand-light bg-brand-lighter/10 font-medium"
            >
              3 Kampagnen &middot; 9 E-Mails
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-8 space-y-8">
        {/* Hero */}
        <AnimatedSection animation="fade-up">
          <section className="text-center space-y-6 py-16 sm:py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand-lighter)_0%,transparent_70%)] opacity-[0.12] blur-3xl" />
            </div>

            <Badge
              variant="outline"
              className="border-brand-lighter/40 text-brand-light bg-brand-lighter/10 font-medium text-xs"
            >
              Datenbasiert optimiert &middot; 266 Gespräche analysiert
            </Badge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient-brand leading-[1.1]">
              Cold Email Kampagnen
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
              3 optimierte Kampagnen mit je 3 E-Mails für GmbH-Geschäftsführer.
              Jede Mail datenbasiert optimiert für maximale Response Rate.
            </p>
          </section>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fade-up" delay={200}>
          <StatsBar />
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* Optimizations */}
        <AnimatedSection animation="fade-up">
          <section className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight">
                Angewendete Optimierungen
              </h3>
              <p className="text-sm text-muted-foreground">
                10 datenbasierte Regeln, die jede E-Mail optimieren.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {optimizations.map((opt, i) => (
                <AnimatedSection key={opt.rule} delay={i * 75} animation="fade-up">
                  <div className="stripe-brand p-4 pl-5 rounded-xl glass-card hover:-translate-y-0.5 hover:shadow-premium-hover transition-all duration-500 ease-out h-full">
                    <p className="font-semibold text-sm tracking-tight">
                      {opt.rule}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {opt.data}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* Campaigns */}
        <Tabs defaultValue="1" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-auto rounded-2xl bg-secondary/60 p-1.5 backdrop-blur-sm border border-border/30">
            {campaigns.map((campaign) => (
              <TabsTrigger
                key={campaign.id}
                value={String(campaign.id)}
                className="flex flex-col py-4 px-4 rounded-xl transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-premium data-[state=active]:text-foreground"
              >
                <span className="font-semibold text-sm tracking-tight">
                  Kampagne {campaign.id}
                </span>
                <span className="text-xs opacity-70 hidden sm:block mt-0.5">
                  {campaign.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {campaigns.map((campaign) => (
            <TabsContent
              key={campaign.id}
              value={String(campaign.id)}
              className="space-y-6"
            >
              {/* Campaign Header */}
              <AnimatedSection animation="fade-up">
                <div className="rounded-2xl glass-card border-gradient-brand p-8">
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    {[
                      { label: "Framework", value: campaign.framework },
                      { label: "Tonalität", value: campaign.tone },
                      { label: "Angle", value: campaign.angle },
                    ].map((field) => (
                      <div key={field.label} className="space-y-1">
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          {field.label}
                        </span>
                        <p className="font-medium">{field.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Emails */}
              <div className="space-y-6">
                {campaign.emails.map((email, i) => (
                  <AnimatedSection key={email.id} delay={i * 150} animation="fade-up">
                    <EmailCard email={email} />
                  </AnimatedSection>
                ))}
              </div>

              {/* Sequence Timeline */}
              <AnimatedSection animation="fade-up">
                <div className="rounded-2xl glass-card p-8">
                  <h4 className="font-semibold text-lg tracking-tight mb-6">
                    Sequenz-Ablauf
                  </h4>
                  <div className="flex items-center justify-between gap-3 overflow-x-auto">
                    {campaign.emails.map((email, i) => (
                      <div
                        key={email.id}
                        className="flex items-center gap-3 flex-1 min-w-0"
                      >
                        <div className="flex flex-col items-center text-center flex-shrink-0">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ring-4 transition-all ${
                              i === 0
                                ? "bg-primary text-primary-foreground ring-primary/20"
                                : i === 2
                                ? "bg-destructive text-white ring-destructive/20"
                                : "bg-secondary text-secondary-foreground ring-secondary"
                            }`}
                          >
                            {i + 1}
                          </div>
                          <span className="text-xs text-muted-foreground mt-2 font-medium">
                            {email.timing}
                          </span>
                          <span className="text-xs font-semibold mt-0.5">
                            {email.title}
                          </span>
                        </div>
                        {i < campaign.emails.length - 1 && (
                          <div className="flex-1 h-0.5 min-w-8 rounded-full bg-gradient-to-r from-primary/30 via-brand-lighter/20 to-secondary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>
          ))}
        </Tabs>

        {/* Divider */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* Footer */}
        <section className="text-center py-16 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Zielgruppe: GmbH-Geschäftsführer &middot; CTA: Antwort auf E-Mail
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Anrede", "Nachname", "Vorname", "Firmenname", "Branche"].map(
              (p) => (
                <code
                  key={p}
                  className="bg-secondary/60 text-brand-light px-2.5 py-1 rounded-lg text-xs font-mono border border-border/30"
                >
                  {`{{${p}}}`}
                </code>
              )
            )}
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            Erstellt für Latuszek Finanzberatung GmbH &middot; Alle E-Mails
            datenbasiert optimiert
          </p>
        </section>
      </main>
    </div>
  );
}
