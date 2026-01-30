export function minDistance(word1: string, word2: string): number {
  const m = word1.length,
    n = word2.length;
  let preRow: number[] = Array(n + 1).fill(0);
  const curRow: number[] = Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        curRow[j] = preRow[j - 1] + 1;
      } else {
        curRow[j] = Math.max(preRow[j], curRow[j - 1]);
      }
    }
    preRow = [...curRow];
  }

  return n + m - 2 * curRow[n];
}

const word1 = 'sea',
  word2 = 'eat';
console.log(minDistance(word1, word2));
