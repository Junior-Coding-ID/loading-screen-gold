// Loading Screen Gold: A Tip in 200 Characters
// Entry: one sharp, funny loading-screen tip for stressed developers
// and AI coding agents. Writes the tip to /output/entry.txt.
//
// The tip below is 125 characters (verified by counting it myself),
// inside the bounty limit of 1-200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Check git diff before you say 'ship it'; both the human and the agent are secretly counting on the other one to have read it.";

// Exact length check: the tip must be exactly 125 characters.
// Counted in code points so any future non-ASCII edit is still
// measured the way a reader counts characters, not UTF-16 units.
const EXPECTED_LENGTH = 125;

const charCount = [...ENTRY].length;

if (charCount !== EXPECTED_LENGTH) {
  throw new Error(
    `Entry length mismatch: expected ${EXPECTED_LENGTH} characters, got ${charCount}.`,
  );
}

if (charCount < 1 || charCount > 200) {
  throw new Error(
    `Entry length ${charCount} is outside the bounty limit of 1-200 characters.`,
  );
}

if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

// Write the entry. The output directory is created recursively so
// the program works even when /output does not exist yet.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

console.log(`Wrote /output/entry.txt (${charCount} characters).`);
