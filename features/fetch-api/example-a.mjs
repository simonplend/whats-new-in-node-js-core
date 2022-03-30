/**
 * Make an HTTP request with the `fetch()` function and
 * output the JSON response.
 *
 * Added: v17.5.0
 *
 * Requires the `--experimental-fetch` flag to be passed
 * to `node`.
 */
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

const responseData = await response.json();

console.log({ responseData });
