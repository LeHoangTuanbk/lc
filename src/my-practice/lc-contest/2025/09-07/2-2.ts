function minOperations(s: string): number {
  let res = 0;
  for (const c of s) {
    const dist = c === 'a' ? 0 : 'z'.charCodeAt(0) - c.charCodeAt(0) + 1;
    res = Math.max(res, dist);
  }
  return res;
}

/* 
Example 1:

Input: s = "yz"

Output: 2

Explanation:

Change 'y' to 'z' to get "zz".
Change 'z' to 'a' to get "aa".
Thus, the answer is 2.
Example 2:

Input: s = "a"

Output: 0

Explanation:

The string "a" only consists of 'a'​​​​​​​ characters. Thus, the answer is 0.
 

Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters©leetcode

*/
