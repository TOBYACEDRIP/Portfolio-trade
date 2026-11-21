import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Providers } from "@/components/ui/Providers";
import { person, seoDefaults, site } from "@/config/site";
import { jsonLdScript, personJsonLd, websiteJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-face", display: "swap" });

const handle = seoDefaults.twitterHandle || undefined;

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
    ...(handle ? { creator: handle, site: handle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(seoDefaults.googleVerification ? { verification: { google: seoDefaults.googleVerification } } : {}),
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-canvas font-sans text-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(personJsonLd())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())} />
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
