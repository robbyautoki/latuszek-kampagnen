"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade" | "slide-left" | "slide-right" | "zoom";
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && "opacity-100 animate-in fade-in duration-1000 fill-mode-forwards",
        className
      )}
      style={
        isVisible && delay > 0
          ? { animationDelay: `${Math.min(delay, 200)}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
