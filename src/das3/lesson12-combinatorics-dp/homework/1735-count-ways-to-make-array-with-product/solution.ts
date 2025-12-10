const MOD = 1_000_000_007;

function modPow(a: number, n: number): number {
  let r = 1,
    x = a;
  while (n > 0) {
    if (n & 1) {
      r = (r * x) % MOD;
    }
    x = (x * x) % MOD;
    n >>= 1;
  }
  return r;
}

function prepareFactorial(maxN: number) {
  const fact = new Array(maxN + 1);
  const invFact = new Array(maxN + 1);
  fact[0] = 1;
  for (let i = 1; i <= maxN; i++) fact[i] = (fact[i - 1] * i) % MOD;
  invFact[maxN] = modPow(fact[maxN], MOD - 2);
  for (let i = maxN - 1; i >= 0; i--) {
    invFact[i] = (invFact[i + 1] * (i + 1)) % MOD;
  }
  return { fact, invFact };
}

function comb(n: number, k: number, fact: number[], invFact: number[]) {
  if (k < 0 || k > n) return 0;
  return (((fact[n] * invFact[k]) % MOD) * invFact[n - k]) % MOD;
}

function primeFactors(x: number): Map<number, number> {
  const m = new Map<number, number>();
  let d = 2;
  while (d * d <= x) {
    while (x % d === 0) {
      m.set(d, (m.get(d) || 0) + 1);
      x /= d;
    }
    d++;
  }
  if (x > 1) m.set(x, 1);
  return m;
}

export function waysToFillArray(queries: number[][]): number[] {
  let maxN = 0;
  for (const [n, k] of queries) maxN = Math.max(maxN, n + 20);
  const { fact, invFact } = prepareFactorial(maxN);

  const result: number[] = [];
  for (const [n, k] of queries) {
    const pf = primeFactors(k);
    let ways = 1;
    for (const e of pf.values()) {
      ways = (ways * comb(e + n - 1, n - 1, fact, invFact)) % MOD;
    }
    result.push(ways);
  }

  return result;
}

const queries = [
  [2, 6],
  [5, 1],
  [73, 660],
];
console.log(waysToFillArray(queries));
