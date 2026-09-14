const {
  BOOTSTRAP,
  getNodeArgs,
  getPackageRunner,
  getPackageRunnerArgs,
} = require("../launcher-runner.cjs");

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

describe("bootstrap script", () => {
  test("imports the runner without static ESM syntax", () => {
    // A dynamic import keeps the eval script valid CommonJS, so no
    // --input-type=module is needed and the quoting stays shell-safe.
    expect(BOOTSTRAP).toContain("import('gauge-ts/dist/RunnerServer.js')");
    expect(BOOTSTRAP).not.toContain("import {");
    expect(BOOTSTRAP).not.toContain('"');
  });
});

describe("node arguments", () => {
  test("preloads tsx from an absolute file URL", () => {
    const tsxUrl = "file:///project/node_modules/tsx/dist/loader.mjs";

    expect(getNodeArgs({ tsxUrl })).toEqual([
      "--import",
      tsxUrl,
      "--eval",
      BOOTSTRAP,
    ]);
  });
});

describe("package runner arguments", () => {
  test("runs tsx through the package runner", () => {
    expect(getPackageRunnerArgs({ useShell: false })).toEqual([
      "tsx",
      "--eval",
      BOOTSTRAP,
    ]);
  });

  test("quotes the eval script when using a shell", () => {
    const args = getPackageRunnerArgs({ useShell: true });

    expect(args.at(-1)).toBe(`"${BOOTSTRAP}"`);
  });
});
