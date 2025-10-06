export function longestPrefix(s: string): string {
  const m = s.length;
  const lps: number[] = Array(m).fill(0);
  let len = 0;
  let i = 1;
  while (i < m) {
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return s.slice(0, lps[m - 1]);
}
