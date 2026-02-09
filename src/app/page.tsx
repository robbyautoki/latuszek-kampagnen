import Image from "next/image";
import { campaigns, optimizations } from "@/data/campaigns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EmailCard } from "@/components/email-card";
import { StatsBar } from "@/components/stats-bar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Latuszek & partners"
              width={180}
              height={37}
              priority
            />
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <p className="text-sm text-muted-foreground hidden sm:block">Cold Email Kampagnen</p>
          </div>
          <Badge variant="outline" className="hidden sm:inline-flex">
            3 Kampagnen &middot; 9 E-Mails
          </Badge>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Hero */}
        <section className="text-center space-y-4 py-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Cold Email Kampagnen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            3 optimierte Kampagnen mit je 3 E-Mails für GmbH-Geschäftsführer.
            Jede Mail datenbasiert optimiert für maximale Response Rate.
          </p>
        </section>

        {/* Stats */}
        <StatsBar />

        <Separator />

        {/* Optimizations */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Angewendete Optimierungen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {optimizations.map((opt) => (
              <div
                key={opt.rule}
                className="p-3 rounded-lg border border-border/60 bg-card shadow-sm"
              >
                <p className="font-medium text-sm">{opt.rule}</p>
                <p className="text-xs text-muted-foreground mt-1">{opt.data}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Campaigns */}
        <Tabs defaultValue="1" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            {campaigns.map((campaign) => (
              <TabsTrigger
                key={campaign.id}
                value={String(campaign.id)}
                className="flex flex-col py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="font-semibold text-sm">Kampagne {campaign.id}</span>
                <span className="text-xs opacity-80 hidden sm:block">{campaign.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {campaigns.map((campaign) => (
            <TabsContent key={campaign.id} value={String(campaign.id)} className="space-y-6">
              {/* Campaign Header */}
              <div className="bg-card rounded-xl border border-border/60 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Kampagne {campaign.id}: &ldquo;{campaign.name}&rdquo;
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Framework:</span>
                    <p className="font-medium">{campaign.framework}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tonalität:</span>
                    <p className="font-medium">{campaign.tone}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Angle:</span>
                    <p className="font-medium">{campaign.angle}</p>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-6">
                {campaign.emails.map((email) => (
                  <EmailCard key={email.id} email={email} />
                ))}
              </div>

              {/* Sequence Timeline */}
              <div className="bg-card rounded-xl border border-border/60 p-6 shadow-sm">
                <h4 className="font-semibold mb-4">Sequenz-Ablauf</h4>
                <div className="flex items-center justify-between gap-2 overflow-x-auto">
                  {campaign.emails.map((email, i) => (
                    <div key={email.id} className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="flex flex-col items-center text-center flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            i === 0
                              ? "bg-primary text-primary-foreground"
                              : i === 2
                              ? "bg-destructive text-white"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">
                          {email.timing}
                        </span>
                        <span className="text-xs font-medium">{email.title}</span>
                      </div>
                      {i < campaign.emails.length - 1 && (
                        <div className="flex-1 h-0.5 bg-border min-w-8" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Separator />

        {/* Footer Info */}
        <section className="text-center py-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            Zielgruppe: GmbH-Geschäftsführer &middot; CTA: Antwort auf E-Mail &middot; Platzhalter:{" "}
            <code className="bg-muted px-1 rounded text-xs">{"{{Vorname}}"}</code>,{" "}
            <code className="bg-muted px-1 rounded text-xs">{"{{Firmenname}}"}</code>,{" "}
            <code className="bg-muted px-1 rounded text-xs">{"{{Branche}}"}</code>
          </p>
          <p className="text-xs text-muted-foreground">
            Erstellt für Latuszek Finanzberatung GmbH &middot; Alle E-Mails datenbasiert optimiert
          </p>
        </section>
      </main>
    </div>
  );
}
