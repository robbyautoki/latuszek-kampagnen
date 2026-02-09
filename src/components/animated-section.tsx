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

  const animationClasses: Record<string, string> = {
    "fade-up": "animate-in fade-in slide-in-from-bottom-4",
    fade: "animate-in fade-in",
    "slide-left": "animate-in fade-in slide-in-from-left-8",
    "slide-right": "animate-in fade-in slide-in-from-right-8",
    zoom: "animate-in fade-in zoom-in-95",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible &&
          `opacity-100 ${animationClasses[animation]} duration-700 fill-mode-forwards`,
        className
      )}
      style={
        isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined
      }
    >
      {children}
    </div>
  );
}
