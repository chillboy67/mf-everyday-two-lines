import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "A toaster is a tiny sunbed for bread: it lies there getting warm and brown until it pops up, done.\nThe analogy works because both use heat to change colour, but it hides that the bread never chooses when to stop — the timer does.");
