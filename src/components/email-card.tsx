"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Email } from "@/data/campaigns";

function HighlightPlaceholders({ text }: { text: string }) {
  const parts = text.split(/({{[^}]+}})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") ? (
          <span
            key={i}
            className="bg-amber-100 text-amber-800 px-1 rounded font-mono text-sm"
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
    <Card className="overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3 space-y-3">
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
            >
              Mail {email.id}
            </Badge>
            <span className="text-sm text-muted-foreground">{email.timing}</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {email.title}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground font-medium">Betreff:</span>
            <code className="bg-muted px-2 py-1 rounded text-sm font-medium flex-1 min-w-0">
              <HighlightPlaceholders text={currentSubject} />
            </code>
          </div>
          <div className="flex gap-1">
            <Button
              variant={!showVariantB ? "default" : "outline"}
              size="sm"
              className="h-6 text-xs px-2"
              onClick={() => setShowVariantB(false)}
            >
              A
            </Button>
            <Button
              variant={showVariantB ? "default" : "outline"}
              size="sm"
              className="h-6 text-xs px-2"
              onClick={() => setShowVariantB(true)}
            >
              B
            </Button>
            <span className="text-xs text-muted-foreground ml-1 self-center">
              A/B-Test
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            <HighlightPlaceholders text={email.body} />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-sm">
            <span className="font-semibold text-amber-800">PS: </span>
            <span className="text-amber-900">
              <HighlightPlaceholders text={email.ps} />
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
