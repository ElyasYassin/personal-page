import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * True when a file exists under /public. Lets the UI fall back to a
 * drafting-sheet placeholder until a real photograph is dropped in.
 */
export function publicFileExists(src: string): boolean {
  if (/^https?:\/\//.test(src)) return true;
  return fs.existsSync(path.join(process.cwd(), "public", src));
}
