function isPalindrome(n: number) {
  return n.toString().split('').reverse().join('') === n.toString();
}

function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function primePalindrome(n: number): number {
  if (n < 11) return 11;
  for (let i = 2; i < 10000; i++) {
    const p = parseInt();
    // số palindrome chẵn thì không phải là prime.
  }
}

function primePalindrome2(n: number): number {
  while (true) {
    if (isPalindrome(n) && isPrime(n)) return n;
    n++;
  }
}

function countPrimes(n: number): number {
  let cnt = 0;
  const isPrime: boolean[] = Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      cnt++;
      for (let j = i * i; i < Math.sqrt(n) + 1; i = i + 1) {
        isPrime[j] = false;
      }
    }
  }
  return cnt;
}

function closestPrimes(left: number, right: number): number[] {
  const n = right + 1;
  const isPrime: boolean[] = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  const primes: number[] = [];

  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (isPrime[i]) {
      if (i >= left) primes.push(i);
    }

    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  if (primes.length < 2) return [-1, -1];
  let d = 1e6;
  let res = [-1, -1];
  for (let i = 0; i < primes.length - 1; i++) {
    if (primes[i + 1] - primes[i] < d) {
      d = primes[i + 1] - primes[i];
      res = [primes[i], primes[i + 1]];
    }
  }
  return res;
}

function closestPrimes2(left: number, right: number): number[] {
  const n = right + 1;
  const isPrime: boolean[] = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = Math.max(2, left); i <= right; i++) {
    if (isPrime[i]) primes.push(i);
  }

  if (primes.length < 2) return [-1, -1];

  let res = [-1, -1];
  let minGap = Infinity;
  for (let i = 0; i < primes.length - 1; i++) {
    const gap = primes[i + 1] - primes[i];
    if (gap < minGap) {
      minGap = gap;
      res = [primes[i], primes[i + 1]];
    }
  }

  return res;
}

function distinctPrimeFactors(nums: number[]): number {
  const nMax = Math.max(...nums);
  const isPrime: boolean[] = Array(nMax + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i < Math.sqrt(nMax) + 1; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < nMax + 1; j++) {
        isPrime[j] = false;
      }
    }
  }

  function factorization(n: number) {
    const factors: number[] = [];
    for (let p = 0; p < n + 1; p++) {
      if (isPrime[p]) {
        factors.push(p);
      }
    }

    const res: number[] = [];

    for (const p of factors) {
      if (n % p == 0) {
        res.push(p);
      }
    }

    return new Set(res);
  }

  const res = new Set();
  for(const n )
}
// Bài này vẫn chưa thông cái idea lắm. 


function distinctPrimeFactors2(nums: number[]): number {
  const nMax = Math.max(...nums);
  const isPrime: boolean[] = Array(nMax + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  // Sàng nguyên tố
  for (let i = 2; i * i <= nMax; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= nMax; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Hàm phân tích thừa số nguyên tố của 1 số
  function factorization(n: number): Set<number> {
    const primeFactors = new Set<number>();
    for (let p = 2; p * p <= n; p++) {
      if (isPrime[p] && n % p === 0) {
        primeFactors.add(p);
        while (n % p === 0) n /= p;
      }
    }
    if (n > 1) primeFactors.add(n); // nếu còn lại là số nguyên tố lớn hơn sqrt
    return primeFactors;
  }

  // Gộp tất cả các thừa số vào 1 Set
  const allPrimes = new Set<number>();
  for (const num of nums) {
    const fSet = factorization(num);
    for (const p of fSet) allPrimes.add(p);
  }

  return allPrimes.size;
}

function factorize(n: number): Map<number, number> {
  const result = new Map<number, number>();
  let d = 2;

  while (d * d <= n) {
    while (n % d === 0) {
      result.set(d, (result.get(d) ?? 0) + 1);
      n = Math.floor(n / d);
    }
    d++;
  }

  if (n > 1) {
    result.set(n, (result.get(n) ?? 0) + 1);
  }

  return result; // Map<thừa số nguyên tố, số mũ>
}

function sieve(n: number): number[] {
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
    if (isPrime[i]) primes.push(i);
  }

  return primes;
}