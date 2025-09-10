export function lengthOfLongestSubstringKDistinct(s: string, k: number) {
  const n = s.length;
  if (n <= k) return n;
  let left = 0;
  let maxLen = 0;
  const map = new Map<string, number>();

  for (let right = 0; right < n; right++) {
    const char = s[right];
    map.set(char, (map.get(char) ?? 0) + 1);

    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) map.delete(leftChar);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringKDistinct('abaccc', 2)); // 4
/* 
Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

*/
