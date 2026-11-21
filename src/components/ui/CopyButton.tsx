"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-fg"
    >
      {copied ? <Check size={16} className="text-gold" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
