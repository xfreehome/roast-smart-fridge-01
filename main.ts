// Roast the Smart Fridge — make.fun bounty
// Writes one roast line (<=160 chars) to /output/entry.txt.
// Gate: /output/entry.txt, UTF-8, 1-160 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My smart fridge sends me a notification that the milk expired — it watched it die in 4K and did nothing, like a lifeguard who can't swim.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
console.log(entry);
