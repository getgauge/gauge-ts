#!/usr/bin/env node

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const version = process.versions.node.split(".");
if (Number.parseInt(version[0]) < 20) {
  throw new Error(
    `gauge-ts requires Node.js version 20+. Current version: ${process.versions.node}`,
  );
}

import { spawn } from "node:child_process";
import launcherRunner from "./launcher-runner.cjs";

const { getPackageRunner, getTsNodeArgs } = launcherRunner;

const { GAUGE_PROJECT_ROOT } = process.env;

function hasModule(name) {
  try {
    require.resolve(name, { paths: [GAUGE_PROJECT_ROOT] });
    return true;
  } catch (e) {
    return false;
  }
}

function startCommand() {
  const useShell = process.platform === "win32";
  const opts = getTsNodeArgs({
    hasTsconfigPaths: hasModule("tsconfig-paths"),
    useShell,
  });

  const [command, ...runnerArgs] = getPackageRunner();
  const runner = spawn(command, [...runnerArgs, ...opts], {
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
