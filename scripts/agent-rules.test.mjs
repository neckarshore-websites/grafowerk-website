/**
 * Guard for `agentRules: false` (estate decision #2360, revised 2026-09-25).
 *
 * Next 16 writes a managed block into AGENTS.md on `next dev` whenever it detects an
 * AI coding agent, and the block itself tells agents to commit it. This repo's
 * AGENTS.md is HAND-WRITTEN (scaffold, PR #1) and stays; what must never land in it,
 * or in CLAUDE.md, is the framework's block. So two things must hold:
 *
 * 1. next.config.ts sets `agentRules: false`. The test imports the REAL config
 *    (Node strips the types natively), so a commented-out key counts as missing.
 * 2. No instruction file carries the generated marker.
 *
 * Run: npm run test:agent-rules (CI: lint.yml, step "Agent-rules guard").
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const { default: nextConfig } = await import("../next.config.ts");

const MARKER = "<!-- BEGIN:nextjs-agent-rules -->";

test("next.config turns off the generated agent files", () => {
  assert.equal(nextConfig.agentRules, false);
});

test("no instruction file carries the nextjs-agent-rules block", () => {
  for (const file of ["AGENTS.md", "CLAUDE.md"]) {
    if (existsSync(file)) {
      assert.ok(!readFileSync(file, "utf8").includes(MARKER), `${file} carries ${MARKER}`);
    }
  }
});
