export default class VowelCounter {
  private vowels: string[];

  constructor(vowels: string[]) {
    this.vowels = vowels;
  }

  countVowels(word: string): number {
    let count = 0;
    for (const char of word) {
      if (this.vowels.includes(char.toLowerCase())) {
        count++;
      }
    }
    return count;
  }
}
