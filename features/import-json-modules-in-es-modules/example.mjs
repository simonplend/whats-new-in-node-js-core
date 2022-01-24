/**
 * Importing a JSON module in an ES module with JSON import assertion.
 *
 * Added: v17.1.0
 * Backported to: 16.x (likely in next minor release)
 *
 * You must use the node `--experimental-json-modules` flag
 * for this code to work.
 */

/**
 * Static import with JSON import asertion.
 */

import packageJsonExample1 from "./package.json" assert { type: "json" };

console.log({ packageJsonExample1 });

/**
 * Dynamic import with JSON import assertion.
 */

const packageJsonExample2 = await import("./package.json", {
	assert: { type: "json" },
});

console.log({ 'packageJsonExample2.default': packageJsonExample2.default });
