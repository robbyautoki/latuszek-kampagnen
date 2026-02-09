"use client";

import { stats } from "@/data/campaigns";

const statItems = [
  { label: "Betreute GFs", value: stats.clients },
  { label: "Ø Ersparnis/Jahr", value: stats.avgSavings },
  { label: "Bewertung", value: stats.rating },
  { label: "Bewertungen", value: stats.reviews },
  { label: "Weiterempfehlung", value: stats.recommendation },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {statItems.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-4 bg-card rounded-xl border border-border/60 shadow-sm"
        >
          <div className="text-2xl font-bold text-primary">{stat.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
