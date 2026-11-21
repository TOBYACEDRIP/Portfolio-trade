import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // YouTube thumbnails for featured videos (src/config/work.ts).
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Legacy routes from the original template.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      // Canonical host: www → apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thetobyace.com" }],
        destination: "https://thetobyace.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
