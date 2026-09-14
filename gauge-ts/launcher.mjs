#!/usr/bin/env node

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// The runner reads TypeScript 7's compiler API, which ships as ESM only, from
// CommonJS. That needs `require(esm)`, unflagged in Node 20.19 and 22.12.
const [major, minor] = process.versions.node.split(".").map(Number);
const supported =
  major > 22 || (major === 22 && minor >= 12) || (major === 20 && minor >= 19);

if (!supported) {
  throw new Error(
    `gauge-ts requires Node.js 20.19+, 22.12+ or 24+. Current version: ${process.versions.node}`,
  );
}

import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";
import launcherRunner from "./launcher-runner.cjs";

const { getNodeArgs, getPackageRunner, getPackageRunnerArgs } = launcherRunner;

const { GAUGE_PROJECT_ROOT } = process.env;

function resolveTsx() {
  // gauge-ts depends on tsx, so resolve it the way Node would from inside
  // gauge-ts itself. Resolving from the project root alone only works on
  // hoisted layouts; pnpm keeps transitive dependencies out of the project's
  // node_modules, and yarn PnP never puts them on a plain path.
  try {
    const gaugeTs = require.resolve("gauge-ts", {
      paths: [GAUGE_PROJECT_ROOT],
    });

    return createRequire(gaugeTs).resolve("tsx");
  } catch (e) {
    // Fall through to the project's own tsx, if it declares one.
  }

  try {
    return require.resolve("tsx", { paths: [GAUGE_PROJECT_ROOT] });
  } catch (e) {
    return null;
  }
}

function startCommand() {
  const packageRunner = process.env.GAUGE_TS_PACKAGE_RUNNER;
  const useShell = Boolean(packageRunner) && process.platform === "win32";
  let command;
  let args;

  if (packageRunner) {
    const [runnerCommand, ...runnerArgs] = getPackageRunner(packageRunner);

    command = runnerCommand;
    args = [...runnerArgs, ...getPackageRunnerArgs({ useShell })];
  } else {
    const tsxPath = resolveTsx();

    if (!tsxPath) {
      throw new Error(
        `Could not resolve 'tsx' from ${GAUGE_PROJECT_ROOT}. Run your package manager's install so that 'gauge-ts' (which depends on tsx) is present, or add 'tsx' to the project's dependencies.`,
      );
    }

    command = process.execPath;
    args = getNodeArgs({ tsxUrl: pathToFileURL(tsxPath).href });
  }

  const runner = spawn(command, args, {
    env: process.env,
    silent: false,
    stdio: "inherit",
    // Package-manager shims are .cmd files on Windows and require cmd.exe.
    // `command` is safe to pass to the shell because it comes from a fixed map.
    shell: useShell,
    cwd: GAUGE_PROJECT_ROOT,
  });
  runner.on("error", (err) => {
    console.trace(err.stack);
  });
}

const commands = {
  "--start": startCommand,
};

function main() {
  const command = process.argv[2];

  if (commands[command]) {
    commands[command]();
  } else {
    throw new Error(`Unknown or missing command: ${command}`);
  }
}

main();
