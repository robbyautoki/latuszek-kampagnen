"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { Email } from "@/data/campaigns";

function HighlightPlaceholders({ text }: { text: string }) {
  const parts = text.split(/({{[^}]+}})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") ? (
          <span
            key={i}
            className="bg-brand-lighter/15 text-brand-light ring-1 ring-brand-lighter/30 px-1.5 py-0.5 rounded font-mono text-xs"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function EmailCard({ email }: { email: Email }) {
  const [showVariantB, setShowVariantB] = useState(false);

  const currentSubject = showVariantB ? email.subjectB : email.subjectA;

  return (
    <div className="rounded-2xl shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-500 bg-card border-gradient-brand overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-4 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Badge
              variant={
                email.title === "Erstansprache"
                  ? "default"
                  : email.title === "Breakup"
                  ? "destructive"
                  : "secondary"
              }
              className="font-medium"
            >
              Mail {email.id}
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              {email.timing}
            </span>
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {email.title}
          </span>
        </div>

        {/* Subject line */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Betreff:
            </span>
            <div className="bg-secondary/50 border border-border/40 rounded-lg px-4 py-2.5 flex-1 min-w-0 text-sm font-medium">
              <HighlightPlaceholders text={currentSubject} />
            </div>
          </div>
          {/* A/B Toggle */}
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-full bg-secondary/80 p-0.5">
              <button
                onClick={() => setShowVariantB(false)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  !showVariantB
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                A
              </button>
              <button
                onClick={() => setShowVariantB(true)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  showVariantB
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                B
              </button>
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              A/B-Test
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-4">
        <div className="bg-gradient-to-b from-secondary/20 to-secondary/5 rounded-xl p-6 border border-border/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="whitespace-pre-wrap text-[0.9375rem] leading-[1.75]">
            <HighlightPlaceholders text={email.body} />
          </div>
        </div>
      </div>

      {/* PS */}
      <div className="px-6 pb-6">
        <div className="bg-gold-light/50 border-l-4 border-gold rounded-lg rounded-l-none p-4">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-gold-dark">PS: </span>
            <span className="text-foreground/80">
              <HighlightPlaceholders text={email.ps} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
