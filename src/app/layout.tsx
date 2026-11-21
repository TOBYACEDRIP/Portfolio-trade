import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { person, seoDefaults, site } from "@/config/site";
import { jsonLdScript, personJsonLd, websiteJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-serif",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: person.brand, url: site.url }],
  creator: person.brand,
  publisher: person.brand,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: seoDefaults.twitterHandle,
    site: seoDefaults.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(seoDefaults.googleVerification
    ? { verification: { google: seoDefaults.googleVerification } }
    : {}),
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(personJsonLd())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())} />
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
