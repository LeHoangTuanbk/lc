function cyclicIncrements(s: string) {
  if (s === 'z') return 'a';
  else return String.fromCharCode(s.charCodeAt(0) + 1);
}

export function canMakeSubsequence(str1: string, str2: string): boolean {
  const n = str1.length,
    m = str2.length;
  let i = 0,
    j = 0;
  while (i < n) {
    if (str1[i] === str2[j] || cyclicIncrements(str1[i]) === str2[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j === m;
}

console.log(canMakeSubsequence('abcde', 'abf'));

/* 
Example 1:

Input: str1 = "abc", str2 = "ad"
Output: true
Explanation: Select index 2 in str1.
Increment str1[2] to become 'd'. 
Hence, str1 becomes "abd" and str2 is now a subsequence. Therefore, true is returned.
Example 2:

Input: str1 = "zc", str2 = "ad"
Output: true
Explanation: Select indices 0 and 1 in str1. 
Increment str1[0] to become 'a'. 
Increment str1[1] to become 'd'. 
Hence, str1 becomes "ad" and str2 is now a subsequence. Therefore, true is returned.
Example 3:

Input: str1 = "ab", str2 = "d"
Output: false
Explanation: In this example, it can be shown that it is impossible to make str2 a subsequence of str1 using the operation at most once. 
Therefore, false is returned.
*/
