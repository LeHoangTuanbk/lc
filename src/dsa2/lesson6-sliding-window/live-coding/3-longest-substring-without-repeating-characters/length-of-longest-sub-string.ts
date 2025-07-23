export function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  let left = 0,
    maxLen = -Infinity;
  const count: Record<string, number> = {},
    n = s.length;
  for (let right = 0; right < n; right++) {
    const c = s[right];
    count[c] = (count[c] ?? 0) + 1;
    while (count[c] % 2 === 0) {
      count[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen === -Infinity ? 1 : maxLen;
}

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
/* 
Example 1:

Input: s = "abcabcbb"

right: 3
abc a => bc, maxLen = 3;

right: 4
c

right: 5
""

right: 6
b

right: 7
b

Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

export function lengthOfLongestSubstring2(s: string): number {
  let left = 0,
    maxLen = 0;
  const seen = new Set<string>(),
    n = s.length;
  for (let right = 0; right < n; ) {
    while (right < n && !seen.has(s[right])) {
      seen.add(s[right]);
      right++;
    }
    maxLen = Math.max(maxLen, right - 1 - left + 1);
    seen.delete(s[left]);
    left++;
  }
  return maxLen;
}

export function lengthOfLongestSubstring3(s: string): number {
  let left = 0,
    maxLen = 0;
  const seen = new Set<string>(),
    n = s.length;
  for (let right = 0; right < n; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
