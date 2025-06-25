export function factorize(n: number): Map<number, number> {
  const res = new Map<number, number>();
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) {
      res.set(d, (res.get(d) ?? 0) + 1);
      n = Math.floor(n / d);
    }
    d++;
  }
  if (n > 1) {
    res.set(n, (res.get(n) ?? 0) + 1);
  }
  return res;
}

// console.log(factorize(500));

function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// console.log(isPrime(11));

function sieveEratosthenes(n: number): number[] {
  const isPrime: boolean[] = Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(sieveEratosthenes(100));
