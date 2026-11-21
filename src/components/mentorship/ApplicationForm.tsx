"use client";

import { useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import { applicationEmailSubject, applicationFields, telegramHref } from "@/config/mentorship";
import { contact } from "@/config/site";
import { SocialIcon } from "@/components/icons/SocialIcon";

/**
 * Short application for private mentorship. No backend: the answers are
 * composed into a message and sent by email (mailto) or copied for Telegram.
 */
export function ApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "copied" | "emailed">("idle");

  function compose(): string | null {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return null;
    const data = new FormData(form);
    const lines = applicationFields
      .map((f) => {
        const v = String(data.get(f.id) ?? "").trim();
        return v ? `${f.label}\n${v}` : null;
      })
      .filter(Boolean);
    return `${applicationEmailSubject}\n\n${lines.join("\n\n")}`;
  }

  function sendEmail() {
    const body = compose();
    if (!body) return;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(applicationEmailSubject)}&body=${encodeURIComponent(body)}`;
    setStatus("emailed");
  }

  async function sendTelegram() {
    const body = compose();
    if (!body || !telegramHref) return;
    try {
      await navigator.clipboard.writeText(body);
      setStatus("copied");
    } catch {
      setStatus("idle");
    }
    window.open(telegramHref, "_blank", "noopener,noreferrer");
  }

  const field = "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-sky focus:bg-white/[0.09]";

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
      className="grid gap-5 sm:grid-cols-2"
      aria-describedby="application-note"
    >
      {applicationFields.map((f) => (
        <div key={f.id} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
          <label htmlFor={`app-${f.id}`} className="text-sm font-semibold text-white">
            {f.label}
            {f.required && <span className="text-sky" aria-hidden="true"> *</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea id={`app-${f.id}`} name={f.id} required={f.required} rows={3} placeholder={f.placeholder} className={field} />
          ) : f.type === "select" ? (
            <select id={`app-${f.id}`} name={f.id} required={f.required} defaultValue="" className={`${field} [&>option]:text-navy`}>
              <option value="" disabled>
                Select…
              </option>
              {f.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input id={`app-${f.id}`} name={f.id} type="text" required={f.required} autoComplete={f.autoComplete} className={field} />
          )}
        </div>
      ))}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:flex-wrap sm:items-center">
        {telegramHref && (
          <button
            type="button"
            onClick={sendTelegram}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky px-6 text-sm font-semibold text-navy transition-colors hover:bg-[#86d2f8]"
          >
            <SocialIcon platform="telegram" size={16} /> Apply on Telegram
          </button>
        )}
        <button
          type="submit"
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors ${
            telegramHref ? "border border-white/25 text-white hover:bg-white/10" : "bg-sky text-navy hover:bg-[#86d2f8]"
          }`}
        >
          <Send size={16} aria-hidden="true" /> Apply by email
        </button>
      </div>

      <p id="application-note" className="text-xs leading-relaxed text-white/55 sm:col-span-2" aria-live="polite">
        {status === "copied" ? (
          <span className="inline-flex items-center gap-1.5 text-sky">
            <Check size={14} aria-hidden="true" /> Your application has been copied — paste it into the Telegram chat that just opened.
          </span>
        ) : status === "emailed" ? (
          <span className="inline-flex items-center gap-1.5 text-sky">
            <Check size={14} aria-hidden="true" /> Your email app should open with the application filled in — just press send.
          </span>
        ) : (
          "Nothing is stored on this website. Your answers are sent directly to me by Telegram or email."
        )}
      </p>
    </form>
  );
}
