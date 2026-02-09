"use client";

import { useState, useMemo } from "react";
import { PasswordGate } from "@/components/password-gate";
import { AnimatedSection } from "@/components/animated-section";
import leads from "@/data/leads.json";
import type { Campaign } from "@/data/campaigns";

interface Lead {
  anrede: string;
  kerngeschaeft: string;
  vorname: string;
  nachname: string;
  firma: string;
  email: string;
  stadt: string;
  mitarbeiter: string;
  titel: string;
}

const typedLeads = leads as Lead[];
const PAGE_SIZE = 50;

export function LeadTable({ campaign }: { campaign: Campaign }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search.trim()) return typedLeads;
    const q = search.toLowerCase();
    return typedLeads.filter(
      (l) =>
        l.vorname.toLowerCase().includes(q) ||
        l.nachname.toLowerCase().includes(q) ||
        l.firma.toLowerCase().includes(q) ||
        l.stadt.toLowerCase().includes(q) ||
        l.kerngeschaeft.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q)
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageData = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <PasswordGate>
      {/* Stats */}
      <AnimatedSection animation="fade">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-12 border-t border-white/[0.06]">
          {[
            { label: "Kontakte", value: typedLeads.length.toLocaleString("de-DE") },
            { label: "Unique Firmen", value: new Set(typedLeads.map((l) => l.firma)).size.toLocaleString("de-DE") },
            { label: "Durchschn. MA", value: Math.round(typedLeads.reduce((s, l) => s + (parseInt(l.mitarbeiter) || 0), 0) / typedLeads.length).toString() },
            { label: "St\u00E4dte", value: new Set(typedLeads.filter((l) => l.stadt).map((l) => l.stadt)).size.toLocaleString("de-DE") },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs text-[#86868b] font-medium uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Search + Table */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Alle Kontakte
          </h2>
          <p className="text-sm text-[#86868b]">
            {filtered.length === typedLeads.length
              ? `${typedLeads.length} Kontakte`
              : `${filtered.length} von ${typedLeads.length}`}
          </p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          placeholder="Suche nach Name, Firma, Stadt, Kerngesch\u00E4ft..."
          className="w-full px-4 py-3 mb-6 bg-[#1d1d1f] border border-white/[0.06] rounded-lg text-sm text-white placeholder:text-[#48484a] focus:outline-none focus:border-accent/40 transition-colors"
        />

        <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] bg-[#1d1d1f]">
                {["#", "Anrede", "Kerngesch\u00E4ft", "Firma", "Email", "Stadt", "MA"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-medium text-[#86868b] uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {pageData.map((lead, i) => (
                <tr
                  key={`${lead.email}-${i}`}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-4 py-3 text-[#48484a] tabular-nums">
                    {page * PAGE_SIZE + i + 1}
                  </td>
                  <td className="px-4 py-3 text-white whitespace-nowrap">
                    {lead.anrede}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                      {lead.kerngeschaeft}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#a1a1a6] whitespace-nowrap">
                    {lead.firma}
                  </td>
                  <td className="px-4 py-3 text-[#86868b] font-mono text-xs">
                    {lead.email}
                  </td>
                  <td className="px-4 py-3 text-[#86868b] whitespace-nowrap">
                    {lead.stadt || "\u2013"}
                  </td>
                  <td className="px-4 py-3 text-[#86868b] tabular-nums">
                    {lead.mitarbeiter || "\u2013"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="px-4 py-2 text-sm font-medium text-[#86868b] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              \u2190 Zur\u00FCck
            </button>
            <span className="text-sm text-[#86868b] tabular-nums">
              Seite {page + 1} von {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 text-sm font-medium text-[#86868b] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Weiter \u2192
            </button>
          </div>
        )}
      </section>

      {/* Campaign Emails */}
      <section className="py-12 border-t border-white/[0.06]">
        <AnimatedSection animation="fade">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Kampagne 1: &ldquo;{campaign.name}&rdquo;
          </h2>
          <p className="text-[#86868b] text-sm mb-4">
            {campaign.framework} \u00B7 {campaign.tone}
          </p>
          <p className="text-sm text-[#a1a1a6] leading-relaxed mb-10">
            Diese 3 E-Mails werden an die IT-Segment Leads verschickt.
            Jede E-Mail enth\u00E4lt Platzhalter die automatisch mit den
            Lead-Daten bef\u00FCllt werden.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {campaign.emails.map((email, i) => (
            <AnimatedSection key={email.id} delay={i * 80} animation="fade">
              <div className="border border-white/[0.06] rounded-lg overflow-hidden">
                {/* Email Header */}
                <div className="px-6 py-4 bg-[#1d1d1f] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-accent tabular-nums">
                      Mail {email.id}
                    </span>
                    <span className="text-xs text-[#86868b]">
                      {email.title}
                    </span>
                  </div>
                  <span className="text-xs text-[#48484a]">
                    {email.timing}
                  </span>
                </div>

                {/* Subject Lines */}
                <div className="px-6 py-3 border-b border-white/[0.06]">
                  <p className="text-xs text-[#86868b] mb-1">Betreff A:</p>
                  <p className="text-sm text-white">{email.subjectA}</p>
                  <p className="text-xs text-[#86868b] mt-2 mb-1">Betreff B:</p>
                  <p className="text-sm text-white">{email.subjectB}</p>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-sm text-[#a1a1a6] leading-relaxed whitespace-pre-wrap">
                    {email.body}
                  </p>
                  {email.ps && (
                    <p className="text-sm text-accent/70 leading-relaxed mt-4 italic">
                      {email.ps}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholders Reference */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#48484a] mb-3">
            Verf\u00FCgbare Platzhalter f\u00FCr diese Liste:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Anrede", "Vorname", "Nachname", "Firmenname", "Kerngeschaeft", "Branche"].map(
              (p) => (
                <code
                  key={p}
                  className="text-[#86868b] px-2 py-1 text-xs font-mono bg-[#1d1d1f] rounded"
                >
                  {`{{${p}}}`}
                </code>
              )
            )}
          </div>
        </div>
      </section>
    </PasswordGate>
  );
}
