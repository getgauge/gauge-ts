import * as assert from "node:assert";
import { Step } from "gauge-ts";

export default class Parameter {
  @Step("Trimmed <original> is the same as <expected>")
  public async checkTrimmedWord(original: string, expected: string) {
    assert.strictEqual(original.trim(), expected);
  }
}
