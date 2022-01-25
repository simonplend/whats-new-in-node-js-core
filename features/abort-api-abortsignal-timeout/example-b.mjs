/**
 * Create an abort signal which triggers after 200 milliseconds
 * and use it to cancel an HTTP request.
 *
 * Added: v17.3.0
 * Backported: v16.14.0
 *
 * This example uses the experimental Fetch API, introduced
 * behind the `--experimental-fetch` flag in v17.5.0.
 *
 * Note: You don't need the experimental Fetch API to use
 * `AbortSignal.timeout()`.
 */

try {
  const signal = AbortSignal.timeout(200);

  const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
    signal,
  });

  const json = await response.json();

  console.log(json);
} catch (error) {
  if (error.name === "AbortError") {
    console.error("The HTTP request was automatically cancelled.");
  } else {
    throw error;
  }
}
