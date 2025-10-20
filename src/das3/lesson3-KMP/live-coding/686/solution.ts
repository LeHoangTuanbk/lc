function find(haystack: string, needle: string) {
  const l2 = haystack.length,
    l1 = needle.length;
  const s = needle + '#' + haystack;
  const n = s.length;
  const kmp = Array(n).fill(0);

  for (let i = 1, j = 0; i < n; i++) {
    while (j > 0 && s[i] !== s[j]) {
      j = kmp[j - 1];
    }

    if (s[i] === s[j]) kmp[i] = ++j;

    if (i > l1 && kmp[i] === l1) {
      return i - l1 - 1;
    }
  }

  return -1;
}

export function repeatedStringMatch(a: string, b: string): number {
  let s = '';
  while (s.length < b.length) s += a;
  s += a;

  const pos = find(s, b);

  if (pos === -1) {
    return -1;
  }

  let res = Math.floor((pos + 1) / a.length);
  if ((pos + 1) % a.length) res++;
  return res;
} /* 
Example 1:

Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
Example 2:

Input: a = "a", b = "aa"
Output: 2
*/
