export async function run(year, day) {
  const { run: runDay } = await import(`./${year}/${day}/run.js`);
  runDay();
}
