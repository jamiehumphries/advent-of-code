import { readFileSync } from "fs";
import { resolve } from "path";

const input = readFileSync(resolve(import.meta.dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

export function run() {
  console.log(input[0]);
}
