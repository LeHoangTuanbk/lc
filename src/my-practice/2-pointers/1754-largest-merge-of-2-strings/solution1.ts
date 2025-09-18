export function largestMerge(word1: string, word2: string): string {
  const n = word1.length,
    m = word2.length;
  let i = 0,
    j = 0;
  const res = Array<string>(n + m);
  let k = 0;

  while (i < n && j < m) {
    if (word1.slice(i).localeCompare(word2.slice(j)) > 0) {
      res[k] = word1[i];
      i++;
    } else {
      res[k] = word2[j];
      j++;
    }
    k++;
  }

  while (i < n) {
    res[k++] = word1[i++];
  }

  while (j < m) {
    res[k++] = word2[j++];
  }

  return res.join('');
}

const word1 = 'cabaa',
  word2 = 'bcaaa';
console.log(largestMerge(word1, word2)); // "cbcabaaaaa"
