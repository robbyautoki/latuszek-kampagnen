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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {statItems.map((stat, i) => (
        <AnimatedSection key={stat.label} delay={i * 100} animation="fade-up">
          <div
            className="glass-card text-center p-6 rounded-2xl border-gradient-brand
                        hover:-translate-y-1 hover:shadow-premium-hover
                        transition-all duration-500 ease-out"
          >
            <div className="text-3xl font-bold text-gradient-brand tracking-tight">
              <AnimatedCounter value={stat.value} duration={2000} />
            </div>
            <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
