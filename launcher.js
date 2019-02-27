#! /usr/bin/env node

let stepImpl = `
import { Step } from "gauge-ts";
import { equal } from "assert";

class StepImpl {

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
STEP_IMPL_DIR = src
`


let packageJson = `
{
  "name": "gauge-ts-template",
  "version": "0.0.1",
  "description": "Starter template for writing TypeScript tests for Gauge",
  "dependencies": {
    "gauge-ts": "file:../../projects/gauge-ts"
  }
}
`


let fs = require("fs");
let path = require("path");
let cp = require("child_process");

let srcDir = path.join(process.env.GAUGE_PROJECT_ROOT, 'src');
let envDir = path.join(process.env.GAUGE_PROJECT_ROOT, 'env');
let packageJsonFile = path.join(process.env.GAUGE_PROJECT_ROOT, 'package.json');

if (process.argv[2] === "--init") {
  console.log("Initializing Gauge TypeScript project");
  fs.mkdir(srcDir, 484, function (err) {
    if (err && err.code !== "EEXIST") {
      console.error(err);
    } else {
      fs.writeFileSync(path.join(srcDir, 'StepImplementation.ts'), stepImpl);
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
}

else if (process.argv[2] === "--start") {
  var runner = cp.spawn('npx', ['gauge_ts'], {
    env: process.env,
    silent: false,
    stdio: "inherit",
    cwd: process.env.GAUGE_PROJECT_ROOT
  });
  runner.on("error", function (err) {
    console.trace(err.stack);
  });
}