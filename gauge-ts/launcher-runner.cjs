const PACKAGE_RUNNERS = Object.freeze({
  npx: ["npx"],
  npm: ["npm", "exec", "--"],
  pnpm: ["pnpm", "exec"],
  yarn: ["yarn", "exec"],
  bun: ["bun", "x"],
});

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

function getTsNodeArgs({ hasTsconfigPaths, useShell }) {
  const shellQuote = useShell ? '"' : "";

  return [
    "ts-node",
    "--esm",
    ...(hasTsconfigPaths ? ["-r", "tsconfig-paths/register"] : []),
    "-e",
    `${shellQuote}import { start } from 'gauge-ts/dist/RunnerServer'; start();${shellQuote}`,
  ];
}

module.exports = { getPackageRunner, getTsNodeArgs };
