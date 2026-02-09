"use client";

import { useState } from "react";
import type { Email } from "@/data/campaigns";

function HighlightPlaceholders({ text }: { text: string }) {
  const parts = text.split(/({{[^}]+}})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") ? (
          <span
            key={i}
            className="text-accent/70 font-mono text-xs"
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
    <div className="py-10">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#86868b] uppercase tracking-widest">
            Mail {email.id}
          </span>
          <span className="text-sm text-[#86868b]">
            {email.timing}
          </span>
        </div>
        <span className="text-xs font-medium text-[#86868b] uppercase tracking-widest">
          {email.title}
        </span>
      </div>

      {/* Subject line */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-[#86868b] font-medium uppercase tracking-widest">
            Betreff:
          </span>
          <div className="inline-flex rounded-full bg-[#1d1d1f] p-0.5">
            <button
              onClick={() => setShowVariantB(false)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !showVariantB
                  ? "bg-accent text-white"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              A
            </button>
            <button
              onClick={() => setShowVariantB(true)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                showVariantB
                  ? "bg-accent text-white"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              B
            </button>
          </div>
        </div>
        <p className="text-lg font-semibold text-white tracking-tight">
          <HighlightPlaceholders text={currentSubject} />
        </p>
      </div>

      {/* Body */}
      <div className="mb-6">
        <div className="whitespace-pre-wrap text-[0.9375rem] leading-[1.85] text-[#a1a1a6]">
          <HighlightPlaceholders text={email.body} />
        </div>
      </div>

      {/* PS */}
      <div className="border-t border-white/[0.06] pt-5">
        <p className="text-sm leading-relaxed text-[#a1a1a6]">
          <span className="font-semibold text-accent">PS: </span>
          <HighlightPlaceholders text={email.ps} />
        </p>
      </div>
    </div>
  );
}
