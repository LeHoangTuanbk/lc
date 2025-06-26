export function closestPrimes(left: number, right: number): number[] {
  if (right < 2) return [-1, -1];
  const n = right + 1;
  const isPrime: boolean[] = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  const primes: number[] = [];
  for (let i = 2; i < n; i++) {
    //loglog(n) times => nloglogn
    if (isPrime[i]) {
      if (i >= left) primes.push(i);
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let minD: number = Infinity;
  let res: [number, number] = [-1, -1];
  for (let i = 0; i < primes.length - 1; i++) {
    const d = primes[i + 1] - primes[i];
    if (d < minD) {
      minD = d;
      res = [primes[i], primes[i + 1]];
    }
  }
  return res;
}

/* 
Example 1:

Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.
Example 2:

Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.


*/
