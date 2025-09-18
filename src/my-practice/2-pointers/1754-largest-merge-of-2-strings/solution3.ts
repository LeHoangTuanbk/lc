export function largestMerge(word1: string, word2: string): string {
  if (!word1) return word2;
  if (!word2) return word1;

  return word1 > word2
    ? word1[0] + largestMerge(word1.slice(1), word2)
    : word2[0] + largestMerge(word1, word2.slice(1));
}

const word1 = 'cabaa',
  word2 = 'bcaaa';
console.log(largestMerge(word1, word2)); // "cbcabaaaaa"
