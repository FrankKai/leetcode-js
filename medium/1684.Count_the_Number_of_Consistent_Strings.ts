function countConsistentStrings(allowed: string, words: string[]): number {
  function isConsistent(word: string, allowed: string): boolean {
    for (const char of word) {
      if (allowed.indexOf(char) === -1) {
        return false;
      }
    }
    return true;
  }
  let count = 0;
  for (const word of words) {
    if (isConsistent(word, allowed)) count++;
  }
  return count;
}
