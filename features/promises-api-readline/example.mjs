/**
 * `readline/promises` API.
 *
 * Added: v17.0.0
 * Won't be backported (semver-major)
 *
 * Can also be loaded with `require()`.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What is the meaning of life? ");

console.log(`Alright, the meaning of life is ${answer}!`);

rl.close();
