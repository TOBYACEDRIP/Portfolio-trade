"use client";

/** Last-resort boundary for errors in the root layout itself. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-GB">
      <body style={{ margin: 0, minHeight: "100dvh", display: "grid", placeItems: "center", background: "#F4F7FA", color: "#101D36", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center", padding: 24 }}>
          <p style={{ color: "#1c76b3", letterSpacing: "0.18em", fontSize: 12, textTransform: "uppercase" }}>TheTobyAce</p>
          <h1 style={{ fontWeight: 800, fontSize: 36, margin: "16px 0" }}>Something went wrong.</h1>
          <button type="button" onClick={reset} style={{ marginTop: 16, padding: "12px 22px", borderRadius: 999, border: 0, background: "#101D36", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
