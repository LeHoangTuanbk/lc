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

  return kmpTable;
}

export function shortestPalindrome(s: string): string {
  const s2 = s + '#' + s.split('').reverse().join('');
  const kmp = calculateKMPTable(s2);

  const l = kmp[s2.length - 1];

  let suffix = s.slice(l);

  suffix = suffix.split('').reverse().join('');

  return suffix + s;
}
/* 
Example 1:

Input: s = "aacecaa a"
Output: "aaacecaaa"
Example 2:

Input: s = "aba d"
Output: "dcbabcd"
*/
