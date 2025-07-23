export function characterReplacement(s: string, k: number): number {
  let left = 0,
    maxLen = 0,
    maxCount = 0;
  const count: Record<string, number> = {};
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    count[c] = (count[c] ?? 0) + 1;
    maxCount = Math.max(maxCount, count[c]);

    while (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      maxCount = Math.max(...Object.values(count));
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
/* 
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/
