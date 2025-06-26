export function countPrimes(n: number): number {
  if (n < 2) return 0;
  const isPrime: boolean[] = Array(n).fill(true);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return count;
}
/* 
Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0

*/
