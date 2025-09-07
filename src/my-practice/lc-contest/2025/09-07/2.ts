function minOperations(s: string): number {
  const chars = s.split('').filter((c) => c !== 'a');
  chars.sort();
  if (chars.length == 0) return 0;
  const firstCharacter = chars[0];
  return 'z'.charCodeAt(1) - firstCharacter.charCodeAt(0) + 1;
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
