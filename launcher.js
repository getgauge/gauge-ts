#! /usr/bin/env node

const tsVersion = require("./ts.json").version;

const version = process.versions.node.split(".");
if (Number.parseInt(version[0]) < 10) {
  throw new Error(
    `gauge-ts requires Node.js version 10+. Current version: ${process.versions.node}`,
  );
}

const stepImpl = `
import { Step, Table } from "gauge-ts";
import { strictEqual } from "assert";

export default class StepImplementation {

    private vowels: Array<string>;

    @Step("Vowels in English language are <vowelString>.")
    public async setLanguageVowels(vowelString: string) {
        this.vowels = vowelString.split('');
    }

    @Step("The word <word> has <expectedCount> vowels.")
    public async verifyVowelsCountInWord(word: string, expectedCount: number) {
      strictEqual(this.countVowels(word), parseInt(expectedCount));
    }

    @Step("Almost all words have vowels <wordsTable>")
    public async verifyVowelsCountInMultipleWords(table: Table) {
        for (let row of table.getTableRows()) {
            let word: string = row.getCell("Word");
            let expectedCount = parseInt(row.getCell("Vowel Count"));
            let actualCount = this.countVowels(word);
            strictEqual(expectedCount, actualCount);
        }
    }

    private async countVowels(word: string) {
        return word.split("").filter((elem) => {
            return this.vowels.includes(elem);
        }).length;
    }

}
`;

const defaultProperties = `
#ts.properties
#settings related to gauge-ts.

# Comma separated list of dirs. path should be relative to project root.
STEP_IMPL_DIR = tests
`;

const packageJson = `
{
  "name": "gauge-ts-template",
  "version": "0.0.1",
  "description": "Starter template for writing TypeScript tests for Gauge",
  "dependencies": {
    "gauge-ts": "${tsVersion}"
  },
  "devDependencies": {
    "@types/node": "latest"
  }
}
`;

const tsconfig = `
{
  "compilerOptions": {
      /* Basic Options */
      "target": "es6",
      /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
      "module": "commonjs",
      /* Specify module code generation: 'none', commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      "lib": ["es2016"],                             /* Specify library files to be included in the compilation:  */
      /* Module Resolution Options */
      "moduleResolution": "node",
      /* Experimental Options */
      "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
      "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  },
  "exclude": [
      "node_modules",
  ]
}
`;

const fs = require("node:fs");
const path = require("node:path");
const cp = require("node:child_process");
const os = require("node:os");

const { GAUGE_PROJECT_ROOT } = process.env;

const testsDir = path.join(GAUGE_PROJECT_ROOT, "tests");
const envDir = path.join(GAUGE_PROJECT_ROOT, "env");
const packageJsonFile = path.join(GAUGE_PROJECT_ROOT, "package.json");
const tsconfigFile = path.join(GAUGE_PROJECT_ROOT, "tsconfig.json");

function getCommand(command) {
  const validExecExt = [""];
  if (os.platform() === "win32") validExecExt.push(".bat", ".exe", ".cmd");
  for (const ext of validExecExt) {
    const executable = `${command}${ext}`;
    if (!cp.spawnSync(executable).error) return executable;
  }
}

if (process.argv[2] === "--init") {
  console.log("Initializing Gauge TypeScript project");
  fs.mkdir(testsDir, 484, (err) => {
    if (err && err.code !== "EEXIST") {
      console.error(err);
    } else {
      fs.writeFileSync(path.join(testsDir, "StepImplementation.ts"), stepImpl);
    }
  });

  fs.mkdir(envDir, 484, (err) => {
    if (err && err.code !== "EEXIST") {
      console.error(err);
    } else {
      const defaultDir = path.join(envDir, "default");
      fs.mkdir(defaultDir, 484, (err) => {
        if (err && err.code !== "EEXIST") {
          console.error(err);
        } else {
          fs.writeFileSync(
            path.join(defaultDir, "ts.properties"),
            defaultProperties,
          );
        }
      });
    }
  });

  fs.writeFileSync(packageJsonFile, packageJson);
  fs.writeFileSync(tsconfigFile, tsconfig);

  console.log("Run `npm install` to get project dependencies.");
} else if (process.argv[2] === "--start") {
  const script = `import { GaugeRuntime }  from './dist/GaugeRuntime'; let runner = new GaugeRuntime(); runner.start();`;
  const opts = [
    "ts-node",
    "-O",
    `{"experimentalDecorators": true,"emitDecoratorMetadata": true}`,
    ...(hasModule("tsconfig-paths") ? ["-r", "tsconfig-paths/register"] : []),
    "-e",
    script,
  ];
  const runner = cp.spawn(getCommand("npx"), opts, {
    env: process.env,
    silent: false,
    stdio: "inherit",
    cwd: GAUGE_PROJECT_ROOT,
  });
  runner.on("error", (err) => {
    console.trace(err.stack);
  });
}

function hasModule(name) {
  try {
    require.resolve(name, { paths: [GAUGE_PROJECT_ROOT] });
    return true;
  } catch (e) {
    return false;
  }
}
