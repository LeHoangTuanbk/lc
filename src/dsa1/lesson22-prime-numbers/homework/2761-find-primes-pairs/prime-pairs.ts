export function findPrimePairs(n: number): number[][] {
  const isPrime: boolean[] = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i < n + 1; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  const res: [number, number][] = [];

  for (let i = 2; i <= n / 2; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      res.push([i, n - i]);
    }
  }

  return res;
}
