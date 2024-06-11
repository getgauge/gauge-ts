import * as assert from "node:assert";
import { DataStoreFactory, Step, type Table } from "gauge-ts";

class Implementation {
  static vowelsCount = (word: string): number => {
    const vowels = DataStoreFactory.getSpecDataStore().get(
      "vowels",
    ) as string[];
    return word.split("").filter((c) => vowels.includes(c)).length;
  };

  @Step("Vowels in English language are <aeiou>.")
  public async listVowels(vowels: string) {
    DataStoreFactory.getSpecDataStore().put("vowels", vowels.split(""));
  }

  @Step("The word <gauge> has <3> vowels.")
  public async checkWord(word: string, count: string) {
    assert.equal(Implementation.vowelsCount(word), Number.parseInt(count));
  }

  @Step("Almost all words have vowels <table>")
  public async checkTableOfWords(table: Table) {
    for (const row of table.getTableRows()) {
      const word = row.getCell("Word");
      const count = row.getCell("Vowel Count");
      assert.equal(Implementation.vowelsCount(word), Number.parseInt(count));
    }
  }
}
