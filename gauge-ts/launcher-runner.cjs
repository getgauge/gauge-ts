const PACKAGE_RUNNERS = Object.freeze({
  npx: ["npx"],
  npm: ["npm", "exec", "--"],
  pnpm: ["pnpm", "exec"],
  yarn: ["yarn", "exec"],
  bun: ["bun", "x"],
});

// Loading the runner through a dynamic import keeps this a plain CommonJS eval
// script: no --input-type is needed, and the single quotes survive cmd.exe.
const BOOTSTRAP =
  "import('gauge-ts/dist/RunnerServer.js')" +
  ".then((runner) => runner.start())" +
  ".catch((err) => { console.error(err); process.exit(1); });";

function getPackageRunner(value = process.env.GAUGE_TS_PACKAGE_RUNNER) {
  const name = value ?? "npx";
  const runner = PACKAGE_RUNNERS[name];

  if (!runner) {
    throw new Error(
      `Unsupported GAUGE_TS_PACKAGE_RUNNER: ${JSON.stringify(name)}. ` +
        `Supported values: ${Object.keys(PACKAGE_RUNNERS).join(", ")}`,
    );
  }

  return runner;
}

// Default path: run the bootstrap on this Node with tsx preloaded from an
// absolute file URL. Nothing has to be linked into the project's
// node_modules/.bin, which is what makes it work under pnpm's isolated layout.
function getNodeArgs({ tsxUrl }) {
  return ["--import", tsxUrl, "--eval", BOOTSTRAP];
}

// Opt-in path for GAUGE_TS_PACKAGE_RUNNER: delegate to the project's package
// manager, which then has to resolve the `tsx` binary itself.
function getPackageRunnerArgs({ useShell }) {
  const shellQuote = useShell ? '"' : "";

  return ["tsx", "--eval", `${shellQuote}${BOOTSTRAP}${shellQuote}`];
}

module.exports = {
  BOOTSTRAP,
  getNodeArgs,
  getPackageRunner,
  getPackageRunnerArgs,
};
