import * as assert from "node:assert";
import type { Person } from "@lib/Person";
import { Step } from "gauge-ts";

export default class Parameter {
  @Step("Trimmed <original> is the same as <expected>")
  public async checkTrimmedWord(original: string, expected: string) {
    assert.strictEqual(original.trim(), expected);
  }

  @Step("This step uses a custom parameter of type Person and value <person>")
  public async validatePerson(person: Person) {
    assert.strictEqual(person.name, "John");
    assert.strictEqual(person.age, 30);
    assert.ok(person.isAdult());
  }
}
