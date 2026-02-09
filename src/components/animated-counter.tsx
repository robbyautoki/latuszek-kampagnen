"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  className,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  const parseValue = useCallback((val: string) => {
    const match = val.match(/^([^0-9]*)([0-9][0-9.,]*)(.*)$/);
    if (!match)
      return {
        prefix: "",
        number: 0,
        suffix: val,
        decimals: 0,
        useComma: false,
        useDot: false,
      };

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];

    const useComma = numStr.includes(",");
    const useDot = numStr.includes(".");

    let cleanNum = numStr;
    if (useDot && useComma) {
      cleanNum = numStr.replace(/\./g, "").replace(",", ".");
    } else if (useDot) {
      cleanNum = numStr.replace(/\./g, "");
    } else if (useComma) {
      cleanNum = numStr.replace(",", ".");
    }

    const number = parseFloat(cleanNum);
    const decimalPart = useComma ? numStr.split(",")[1] : "";
    const decimals = decimalPart ? decimalPart.length : 0;

    return { prefix, number, suffix, decimals, useComma, useDot };
  }, []);

  const formatNumber = useCallback(
    (
      num: number,
      decimals: number,
      useComma: boolean,
      useDot: boolean
    ) => {
      let result: string;
      if (decimals > 0) {
        result = num.toFixed(decimals);
        if (useComma) {
          result = result.replace(".", ",");
        }
      } else {
        result = Math.round(num).toString();
      }

      if (useDot || (!useComma && num >= 1000)) {
        const parts = result.split(useComma ? "," : ".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        result = parts.join(useComma ? "," : ".");
      }

      return result;
    },
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const { prefix, number, suffix, decimals, useComma, useDot } =
            parseValue(value);
          if (number === 0) {
            setDisplayValue(value);
            return;
          }

          const startTime = performance.now();
          const easeOutExpo = (t: number) =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const currentNum = easedProgress * number;

            setDisplayValue(
              prefix +
                formatNumber(currentNum, decimals, useComma, useDot) +
                suffix
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated, parseValue, formatNumber]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue}
    </span>
  );
}
