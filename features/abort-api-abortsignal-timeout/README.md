# Feature: AbortSignal.timeout()

## Example A

Create an abort signal which triggers after 1 second.

- [View example code](./example-a.mjs)
- [View example output](./example-a-output.txt)

```bash
npm run example-a
```

The timer created under the hood by `AbortSignal.timeout()` is unref-d.
This means if there is no other activity keeping the event loop running,
the `node` process will exit. For this standalone example, the npm run
script is requiring [keep-process-alive.js](keep-process-alive.js) to
keep the `node` process running while we wait for the abort signal timer
to run.

## Example B

Create an abort signal which triggers after 200 milliseconds and cancels
an HTTP request.

_Requires Node.js >= v17.5.0 as it uses the
[experimental Fetch API](https://nodejs.org/api/globals.html#fetch)._

- [View example code](./example-b.mjs)
- [View example output](./example-b-output.txt)

```bash
npm run example-b
```

<!-- TODO: ## Related links -->

<!-- TODO: Add link to Twitter thread + screenshot -->

<!-- TODO: Add link to blog post -->
