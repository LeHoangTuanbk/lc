export function lengthOfLongestSubstringKDistinct(s: string, k: number) {
  const n = s.length;
  if (n <= k) return n;
  let left = 0;
  let res = 0;
  if (new Set(s.slice(0, k)).size <= k) res = k;

  for (let right = k; right < n; right++) {
    while (new Set(s.slice(left, right + 1)).size > k) {
      left++;
    }
    res = Math.max(res, right - left + 1);
  }

  return res;
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
