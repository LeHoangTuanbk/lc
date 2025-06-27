function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

export function primePalindrome(n: number): number {
  if (n <= 2) return 2;
  if (n <= 3) return 3;
  if (n <= 5) return 5;
  if (n <= 7) return 7;
  if (n <= 11) return 11;
  for (let i = 10; i < 1e5; i++) {
    const stringI = i.toString();
    const p = parseInt(stringI + stringI.split('').reverse().join('').slice(1));
    if (p > n && isPrime(p)) {
      return p;
    }
  }
}

console.log(primePalindrome(13));
/* 
The test cases are generated so that the answer always exists and is in the range [2, 2 * 10^8].

Example 1:

Input: n = 6
Output: 7
Example 2:

Input: n = 8
Output: 11
Example 3:

Input: n = 13
Output: 101
*/
