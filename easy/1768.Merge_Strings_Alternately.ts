function mergeAlternately(word1: string, word2: string): string {
  const end = Math.min(word1.length, word2.length);
  let i = 0;
  let str = "";
  while (i < end) {
    str += `${word1[i]}${word2[i]}`;
    i++;
  }
  str += `${word1.substring(i)}${word2.substring(i)}`;
  return str;
}
