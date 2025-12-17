import { run } from "./helpers.js";

const args = process.argv.slice(2);
const year = args[0];
const day = args[1].padStart(2, "0");

run(year, day);
