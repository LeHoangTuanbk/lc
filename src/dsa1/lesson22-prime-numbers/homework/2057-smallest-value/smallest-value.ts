function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function sumFactors(n: number) {
  let sum = 0;
  const maxRun = Math.sqrt(n) + 1;
  for (let i = 2; i < maxRun; i++) {
    if (isPrime(i) && n % i == 0) {
      while (n % i === 0) {
        sum += i;
        n = n / i;
      }
    }
  }
  if (n > 1) sum += n;

  return sum;
}

export function smallestValue(n: number): number {
  while (!isPrime(n)) {
    if (n == 4) return n;
    // if n = sum => prime
    n = sumFactors(n);
  }

  return n;
}

// console.log(smallestValue(15));
console.log(smallestValue(4));
/* 
Example 1:

Input: n = 15
Output: 5
Explanation: Initially, n = 15.
15 = 3 * 5, so replace n with 3 + 5 = 8.
8 = 2 * 2 * 2, so replace n with 2 + 2 + 2 = 6.
6 = 2 * 3, so replace n with 2 + 3 = 5.
5 is the smallest value n will take on.
Example 2:

Input: n = 3
Output: 3
Explanation: Initially, n = 3.
3 is the smallest value n will take on.
*/
