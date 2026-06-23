const { getPackageRunner, getTsNodeArgs } = require("../launcher-runner.cjs");

describe("launcher package runner", () => {
  test.each([
    [undefined, ["npx"]],
    ["npx", ["npx"]],
    ["npm", ["npm", "exec", "--"]],
    ["pnpm", ["pnpm", "exec"]],
    ["yarn", ["yarn", "exec"]],
    ["bun", ["bun", "x"]],
  ])("maps %p to %p", (value, expected) => {
    expect(getPackageRunner(value)).toEqual(expected);
  });

  test.each(["", "pnpm exec", '["pnpm", "exec"]', "custom-runner"])(
    "rejects unsupported value %p",
    (value) => {
      expect(() => getPackageRunner(value)).toThrow(
        `Unsupported GAUGE_TS_PACKAGE_RUNNER: ${JSON.stringify(value)}`,
      );
    },
  );
});

describe("ts-node arguments", () => {
  test("preloads tsconfig-paths when it is installed", () => {
    expect(getTsNodeArgs({ hasTsconfigPaths: true, useShell: false })).toEqual([
      "ts-node",
      "--esm",
      "-r",
      "tsconfig-paths/register",
      "-e",
      "import { start } from 'gauge-ts/dist/RunnerServer'; start();",
    ]);
  });

  test("does not preload tsconfig-paths when it is not installed", () => {
    expect(getTsNodeArgs({ hasTsconfigPaths: false, useShell: false })).toEqual(
      [
        "ts-node",
        "--esm",
        "-e",
        "import { start } from 'gauge-ts/dist/RunnerServer'; start();",
      ],
    );
  });

  test("quotes the eval script when using a shell", () => {
    const args = getTsNodeArgs({ hasTsconfigPaths: false, useShell: true });

    expect(args.at(-1)).toBe(
      "\"import { start } from 'gauge-ts/dist/RunnerServer'; start();\"",
    );
  });
});
