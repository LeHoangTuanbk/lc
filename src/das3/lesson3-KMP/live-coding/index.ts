export function calculateKMPTable(s: string) {
  const n = s.length;
  const kmpTable = Array(n).fill(0);

  for (let i = 1, j = 0; i < n; i++) {
    while (j > 0 && s[i] != s[j]) {
      j = kmpTable[j - 1];
    }

    if (s[i] === s[j]) {
      kmpTable[i] = ++j;
    }
  }
}

function kmpSearch(haystack: string, pattern: string) {
  const m = haystack.length,
    n = pattern.length;
  const kmpTable = calculateKMPTable(pattern);
}
