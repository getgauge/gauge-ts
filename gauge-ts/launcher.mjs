#!/usr/bin/env node

const version = process.versions.node.split(".");
if (Number.parseInt(version[0]) < 20) {
  throw new Error(
    `gauge-ts requires Node.js version 20+. Current version: ${process.versions.node}`,
  );
}

import { spawn } from "node:child_process";

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
  const script = `"import { start } from 'gauge-ts/dist/GaugeRuntime'; start();"`;

  const opts = [
    "ts-node",
    "-O",
    `'{"experimentalDecorators": true, "emitDecoratorMetadata": true}'`,
    ...(hasModule("tsconfig-paths") ? ["-r", "tsconfig-paths/register"] : []),
    "-e",
    script,
  ];

  const runner = spawn("npx", opts, {
    env: process.env,
    silent: false,
    stdio: "inherit",
    shell: true,
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
