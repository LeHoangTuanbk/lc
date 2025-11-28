export function sumFourDivisors(nums: number[]): number {
  const maxVal = Math.max(...nums);
  const isPrime = sieve(maxVal);
  let res = 0;

  for (const x of nums) {
    const p = Math.round(Math.cbrt(x));
    if (p * p * p === x && isPrime[p]) {
      res += 1 + p + p * p + p * p * p;
      continue;
    }

    const root = Math.floor(Math.sqrt(x));
    for (let d = 2; d <= root; d++) {
      if (x % d === 0) {
        const p = d,
          q = x / d;
        if (q !== p && isPrime[p] && isPrime[q]) {
          res += 1 + p + q + x;
        }
        break;
      }
    }
  }

  return res;
}

function sieve(n: number): boolean[] {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

const nums = [21, 4, 7];
console.log(sumFourDivisors(nums));
