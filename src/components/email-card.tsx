"use client";

import { useState, useCallback } from "react";
import type { Email } from "@/data/campaigns";

function HighlightPlaceholders({ text }: { text: string }) {
  // Match both simple {{Var}} and nested {{RANDOM|{{Var}} text|other}}
  const tokens: { type: "text" | "placeholder"; value: string }[] = [];
  let i = 0;
  while (i < text.length) {
    if (text[i] === "{" && text[i + 1] === "{") {
      // Find the matching closing }} accounting for nesting
      let depth = 0;
      let j = i;
      while (j < text.length) {
        if (text[j] === "{" && text[j + 1] === "{") {
          depth++;
          j += 2;
        } else if (text[j] === "}" && text[j + 1] === "}") {
          depth--;
          j += 2;
          if (depth === 0) break;
        } else {
          j++;
        }
      }
      tokens.push({ type: "placeholder", value: text.slice(i, j) });
      i = j;
    } else {
      // Collect plain text until next {{
      let j = i;
      while (j < text.length && !(text[j] === "{" && text[j + 1] === "{")) {
        j++;
      }
      tokens.push({ type: "text", value: text.slice(i, j) });
      i = j;
    }
  }

  return (
    <>
      {tokens.map((token, idx) =>
        token.type === "placeholder" ? (
          <span key={idx} className="text-accent/70 font-mono text-xs">
            {token.value}
          </span>
        ) : (
          <span key={idx}>{token.value}</span>
        )
      )}
    </>
  );
}

function CopyButton({ text, label = "Kopieren" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors bg-white/[0.04] hover:bg-white/[0.08] text-[#86868b] hover:text-white"
    >
      {copied ? (
        <>
          <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Kopiert!
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {label}
        </>
      )}
    </button>
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
          <CopyButton text={currentSubject} label="Betreff" />
        </div>
        <p className="text-lg font-semibold text-white tracking-tight">
          <HighlightPlaceholders text={currentSubject} />
        </p>
      </div>

      {/* Body */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[#86868b] font-medium uppercase tracking-widest">
            Body:
          </span>
          <CopyButton text={email.body} label="Body" />
        </div>
        <div className="whitespace-pre-wrap text-[0.9375rem] leading-[1.85] text-[#a1a1a6]">
          <HighlightPlaceholders text={email.body} />
        </div>
      </div>

      {/* PS */}
      {email.ps && (
        <div className="border-t border-white/[0.06] pt-5">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm leading-relaxed text-[#a1a1a6] flex-1">
              <span className="font-semibold text-accent">PS: </span>
              <HighlightPlaceholders text={email.ps} />
            </p>
            <CopyButton text={`PS: ${email.ps}`} label="PS" />
          </div>
        </div>
      )}
    </div>
  );
}
