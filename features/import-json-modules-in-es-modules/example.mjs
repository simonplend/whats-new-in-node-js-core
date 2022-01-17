/**
 * Usage:
 *
 *   node --experimental-json-modules example.mjs
 */

import packageJson from "./package.json" assert { type: "json" };

console.log({ packageJson });
