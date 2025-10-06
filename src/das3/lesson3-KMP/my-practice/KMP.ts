function buildLPS(pattern: string) {
  const n = pattern.length;
  const lps = new Array(n).fill(0);
  let j = 0;
  for (let i = 1; i <= n; i++) {
    while (j > 0 && pattern[i] != pattern[j]) {
      j = lps[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
      lps[i] = j;
    }
  }
  return lps;
}

export function kmpSearch(text: string, pattern: string) {
  const m = text.length,
    n = pattern.length;
  if (m === 0) return [];
  const lps = buildLPS(pattern);
  const result: number[] = [];

  let j = 0;
  for (let i = 0; i < m; i++) {
    while (j > 0 && text[i] != pattern[j]) {
      j = lps[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
      if (j === n) {
        result.push(i - n + 1);
        j = lps[j - 1];
      }
    }
  }

  return result;
}

console.log(kmpSearch('abcxabcdabcdabcy', 'abcdabcy'));
