// Copy each dist/**/*.d.ts to a .d.cts sibling for CJS consumers.
import { readdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(file);
    } else if (file.endsWith(".d.ts")) {
      copyFileSync(file, file.slice(0, -".d.ts".length) + ".d.cts");
    }
  }
}

walk("dist");
