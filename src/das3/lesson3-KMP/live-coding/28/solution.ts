export function strStr(haystack: string, needle: string): number {
  const m = haystack.length,
    n = needle.length;

  const kmp = Array(n).fill(0);
  for (let i = 1, j = 0; i < n; i++) {
    while (j > 0 && needle[i] != needle[j]) {
      j = kmp[j - 1];
    }
    if (needle[i] === needle[j]) {
      kmp[i] = ++j;
    }
  }

  for (let i = 0, j = 0; i < m; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = kmp[j - 1];
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
