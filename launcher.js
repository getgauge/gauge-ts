#! /usr/bin/env node


var version = process.versions.node.split(".");
if (parseInt(version[0]) < 10) {
  throw new Error("gauge-ts requires Node.js version 10+. Current version: " + process.versions.node);
}

let stepImpl = `
import { Step } from "gauge-ts";
import { equal } from "assert";

export default class StepImpl {

    private vowels: Array<string>;

    @Step("Vowels in English language are <vowelString>.")
    public async setLanguageVowels(vowelString: string) {
        this.vowels = vowelString.split('');
    }

    @Step("The word <word> has <expectedCount> vowels.")
    public async verifyVowelsCountInWord(word: string, expectedCount: number) {
        equal(await this.countVowels(word), expectedCount);
    }

    @Step("Almost all words have vowels <wordsTable>")
    public async verifyVowelsCountInMultipleWords(wordsTable: any) {
        for (const row of wordsTable.rows) {
            equal(await this.countVowels(row.cells[0]), parseInt(row.cells[1]));
        }
    }

    private async countVowels(word: string) {
        return word.split("").filter((elem) => {
            return this.vowels.includes(elem);
        }).length;
    }

}
`

let defaultProperties = `
#ts.properties
#settings related to gauge-ts.

# Comma separated list of dirs. path should be relative to project root.
STEP_IMPL_DIR = tests
`


let packageJson = `
{
  "name": "gauge-ts-template",
  "version": "0.0.1",
  "description": "Starter template for writing TypeScript tests for Gauge",
  "dependencies": {
    "gauge-ts": "file:../../projects/gauge-ts",
    "ts-node": "^8.1.0",
    "typescript": "^3.4.5",
    "@types/node": "^12.0.2"
  }
}
`


let fs = require("fs");
let path = require("path");
let cp = require("child_process");

let testsDir = path.join(process.env.GAUGE_PROJECT_ROOT, 'tests');
let envDir = path.join(process.env.GAUGE_PROJECT_ROOT, 'env');
let packageJsonFile = path.join(process.env.GAUGE_PROJECT_ROOT, 'package.json');

if (process.argv[2] === "--init") {
  console.log("Initializing Gauge TypeScript project");
  fs.mkdir(testsDir, 484, function (err) {
    if (err && err.code !== "EEXIST") {
      console.error(err);
    } else {
      fs.writeFileSync(path.join(testsDir, 'StepImplementation.ts'), stepImpl);
    }
  });

  fs.mkdir(envDir, 484, function (err) {
    if (err && err.code !== "EEXIST") {
      console.error(err);
    } else {
      let defaultDir = path.join(envDir, 'default');
      fs.mkdir(defaultDir, 484, function (err) {
        if (err && err.code !== "EEXIST") {
          console.error(err);
        } else {
          fs.writeFileSync(path.join(defaultDir, 'ts.properties'), defaultProperties);
        }
      });
    }
  });

  fs.writeFileSync(packageJsonFile, packageJson);
  console.log("Installing project dependencies...");
  var runner = cp.spawn('npm', ['install'], {
    env: process.env,
    silent: false,
    stdio: "inherit",
    cwd: process.env.GAUGE_PROJECT_ROOT
  });
}

else if (process.argv[2] === "--start") {
  var script = `import {GaugeRuntime} from "gauge-ts/dist/GaugeRuntime";`
    + `let runner = new GaugeRuntime();`
    + `runner.start();`
  var options = `{"experimentalDecorators": true,"emitDecoratorMetadata": true}`
  var runner = cp.spawn('npx', ['ts-node', '-O', options, '-e', script], {
    env: process.env,
    silent: false,
    stdio: "inherit",
    cwd: process.env.GAUGE_PROJECT_ROOT
  });
  runner.on("error", function (err) {
    console.trace(err.stack);
  });
}