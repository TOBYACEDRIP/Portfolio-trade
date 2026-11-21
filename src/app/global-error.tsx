"use client";

/** Last-resort boundary for errors in the root layout itself. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-GB">
      <body style={{ margin: 0, minHeight: "100dvh", display: "grid", placeItems: "center", background: "#0B0B0B", color: "#F5F5F5", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center", padding: 24 }}>
          <p style={{ color: "#C6A66B", letterSpacing: "0.18em", fontSize: 12, textTransform: "uppercase" }}>TheTobyAce</p>
          <h1 style={{ fontWeight: 400, fontSize: 36, margin: "16px 0" }}>Something went wrong.</h1>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 16, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#F5F5F5", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
