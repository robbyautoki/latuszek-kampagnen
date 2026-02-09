"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "latuszek2025";
const STORAGE_KEY = "latuszek-liste-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setAuthenticated(true);
      }
      setChecking(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, "true");
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) {
    return null;
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#1d1d1f] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-5 h-5 text-[#86868b]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white">
            Passwort erforderlich
          </h2>
          <p className="text-sm text-[#86868b] mt-1">
            Diese Seite ist gesch\u00FCtzt.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Passwort eingeben"
            className="w-full px-4 py-3 bg-[#1d1d1f] border border-white/[0.06] rounded-lg text-sm text-white placeholder:text-[#48484a] focus:outline-none focus:border-accent/40 transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-xs text-red-400 mt-2">
              Falsches Passwort.
            </p>
          )}
          <button
            type="submit"
            className="w-full mt-4 px-4 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Zugang
          </button>
        </form>
      </div>
    </div>
  );
}
