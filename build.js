import { globSync } from "fs";
import { run } from "./helpers.js";

const latest = globSync("20*/**/run.js").sort().pop();
const [year, day] = latest.split("\\");

await run(year, day);
