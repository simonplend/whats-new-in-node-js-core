/**
 * Throw the value of the abort signal's `reason`
 * property if the abort signal has been triggered.
 *
 * Added: v17.3.0
 */

const ac = new AbortController();

ac.abort();

ac.signal.throwIfAborted();

// > DOMException [AbortError]: This operation was aborted
