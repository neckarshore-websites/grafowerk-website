import type { NextConfig } from "next";

/**
 * Minimal, clean base config for the Grafowerk website.
 *
 * Deliberately NOT inheriting neckarshore.ai's CSP / redirects / analytics —
 * those are added back here intentionally once Grafowerk has real content and
 * a security posture is defined. For now: strict React + no framework header
 * leakage + a small set of safe, content-agnostic security headers.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
