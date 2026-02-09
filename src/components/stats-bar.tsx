"use client";

import { stats } from "@/data/campaigns";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedSection } from "@/components/animated-section";

const statItems = [
  { label: "Betreute GFs", value: stats.clients },
  { label: "Ø Ersparnis/Jahr", value: stats.avgSavings },
  { label: "Bewertung", value: stats.rating },
  { label: "Bewertungen", value: stats.reviews },
  { label: "Weiterempfehlung", value: stats.recommendation },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
      {statItems.map((stat, i) => (
        <AnimatedSection key={stat.label} delay={i * 50} animation="fade">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="text-xs text-[#86868b] mt-3 font-medium uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
