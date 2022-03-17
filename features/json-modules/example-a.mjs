/**
 * Importing a JSON module in an ES module (with JSON import assertion).
 *
 * JSON modules unflagged: v17.5.0 (with import assertion syntax only)
 */

/**
 * Static import with JSON import assertion.
 */

import packageJsonExample1 from "./package.json" assert { type: "json" };

console.log({ packageJsonExample1 });

/**
 * Dynamic import with JSON import assertion.
 */

const packageJsonExample2 = await import("./package.json", {
  assert: { type: "json" },
});

console.log({ "packageJsonExample2.default": packageJsonExample2.default });
