function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function factorization(n: number) {
  const res = new Set<number>();
  let i = 2;

  while (i * i <= n) {
    while (isPrime(i) && n % i === 0) {
      n = n / i;
      res.add(i);
    }
    i++;
  }

  if (n > 1) {
    res.add(n);
  }

  return res;
}
export function distinctPrimeFactors(nums: number[]): number {
  // for each, factorization
  const allPrimes = new Set<number>();
  for (const num of nums) {
    const fSet = factorization(num);
    for (const p of fSet) allPrimes.add(p);
  }
  // set for all factors
  console.log(allPrimes);
  return allPrimes.size;
}

const nums = [27];
console.log(distinctPrimeFactors(nums));
/* 

Example 1:

Input: nums = [2,4,3,7,10,6]
Output: 4
Explanation:
The product of all the elements in nums is: 2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7.
There are 4 distinct prime factors so we return 4.
Example 2:

Input: nums = [2,4,8,16]
Output: 1
Explanation:
The product of all the elements in nums is: 2 * 4 * 8 * 16 = 1024 = 210.
There is 1 distinct prime factor so we return 1.

*/
