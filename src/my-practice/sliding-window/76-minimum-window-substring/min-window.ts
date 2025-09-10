export function minWindow(s: string, t: string): string {
  const sLen = s.length,
    tLen = t.length;
  if (sLen < tLen) return '';

  const tFreq = new Map<string, number>();
  const windowFreq = new Map<string, number>();

  for (const c of t) {
    tFreq.set(c, (tFreq.get(c) ?? 0) + 1);
  }

  let have = 0;
  const need = tFreq.size;

  let res = [-1, -1];
  let resLen = Infinity;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    windowFreq.set(c, (windowFreq.get(c) ?? 0) + 1);

    if (tFreq.has(c) && windowFreq.get(c) === tFreq.get(c)) {
      have++;
    }

    while (have === need) {
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      const leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);

      if (tFreq.has(leftChar) && windowFreq.get(leftChar) < tFreq.get(leftChar)) {
        have--;
      }
      left++;
    }
  }

  const [start, end] = res;
  return resLen === Infinity ? '' : s.slice(start, end + 1);
}
/* 
Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

*/
