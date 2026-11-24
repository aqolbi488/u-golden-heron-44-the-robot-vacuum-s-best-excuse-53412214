import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse — program/v1 entry.
// Writes exactly one excuse line (1-140 chars, the gate's limit) to
// /output/entry.txt. Fully deterministic: a fixed string, no randomness,
// no network, no reads outside this repo, so every run is byte-identical.

const EXCUSE =
  "My bumper hit the chair leg, my map blamed the wall, and while they argued about it, my battery quietly filed for retirement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
