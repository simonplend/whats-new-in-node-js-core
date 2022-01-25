/**
 * Create an abort signal which triggers after 1 second.
 *
 * Added: v17.3.0
 * Backported: v16.14.0
 */

const signal = AbortSignal.timeout(1000);

signal.addEventListener("abort", () => {
  console.log("Signal automatically aborted.");
}, { once: true });
