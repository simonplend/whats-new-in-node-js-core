/**
 * Trigger the abort signal instance with a reason
 * (can be any value).
 *
 * Added: v17.2.0
 */

const ac = new AbortController();

ac.abort(new Error("The reason the signal was aborted."));

console.log(ac.signal.reason);

// > Error: The reason the signal was aborted.
