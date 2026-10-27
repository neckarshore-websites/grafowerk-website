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
  // Next 16 writes a managed block into AGENTS.md on `next dev` when it detects an
  // AI coding agent. Off, as in every estate website (#2360, revised 2026-09-25);
  // our AGENTS.md is hand-written. scripts/agent-rules.test.mjs fails if this goes.
  agentRules: false,
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
