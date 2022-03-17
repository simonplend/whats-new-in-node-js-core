# Feature: JSON modules

- [View example code](./example-a.mjs)
- [View example output](./example-output.txt)

## Example A

```bash
npm run example-a
```

The `start` npm run script passes the `--experimental-json-modules` flag to
`node`.

For versions of Node.js < v17.5.0 you need to use the
`--experimental-json-modules` flag to use JSON imports in ES modules.
If you want to try JSON imports with the import assertion syntax in
Node.js v16 you'll need to be running >= v16.14.0 and pass the
experimental flag.

## Related links

- [Twitter thread about JSON import assertions](https://twitter.com/simonplend/status/1485963681645142019)

<!-- TODO: Add screenshot of tweet -->

<!-- TODO: Add link to blog post -->
