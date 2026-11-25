// Writes the two-line toaster entry to entry.txt for the make.fun run.
// Two lines, one file: the break between them is part of the entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const firstLine =
  "A toaster is a tiny sunbed for bread: it lies there getting warm and brown until it pops up, done.";
const secondLine =
  "The analogy works because both use heat to change colour, but it hides that the bread never chooses when to stop — the timer does.";
const entryText = firstLine + "\n" + secondLine;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryText);
console.log("entry.txt is ready in " + outputDir);
