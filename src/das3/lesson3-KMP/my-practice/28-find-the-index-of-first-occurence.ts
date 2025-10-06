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

function strStr(haystack: string, needle: string): number {
  const m = haystack.length,
    n = needle.length;
  if (m === 0) return -1;
  const lps = buildLPS(needle);

  let j = 0;
  for (let i = 0; i < m; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = lps[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
      if (j === n) {
        return i - n + 1;
      }
    }
  }
  return -1;
}
