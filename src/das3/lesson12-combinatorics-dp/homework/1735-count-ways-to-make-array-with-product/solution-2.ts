const MOD = 1000000007n;

function modPowBig(a: bigint, e: number): bigint {
  let base = a % MOD;
  let exp = BigInt(e);
  let res = 1n;
  while (exp > 0n) {
    if ((exp & 1n) === 1n) res = (res * base) % MOD;
    base = (base * base) % MOD;
    exp >>= 1n;
  }
  return res;
}

function prepareFactorials(maxN: number) {
  const fact: bigint[] = new Array(maxN + 1);
  const invFact: bigint[] = new Array(maxN + 1);
  fact[0] = 1n;
  for (let i = 1; i <= maxN; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  invFact[maxN] = modPowBig(fact[maxN], Number(MOD - 2n));
  for (let i = maxN - 1; i >= 0; i--) {
    invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
  }
  return { fact, invFact };
}

function combBig(n: number, k: number, fact: bigint[], invFact: bigint[]) {
  if (k < 0 || k > n) return 0n;
  return (((fact[n] * invFact[k]) % MOD) * invFact[n - k]) % MOD;
}

function primeFactors(x0: number): Map<number, number> {
  const m = new Map<number, number>();
  let x = x0;
  let d = 2;
  while (d * d <= x) {
    while (x % d === 0) {
      m.set(d, (m.get(d) || 0) + 1);
      x = Math.floor(x / d);
    }
    d++;
  }
  if (x > 1) m.set(x, (m.get(x) || 0) + 1);
  return m;
}

export function waysToFillArray(queries: number[][]): number[] {
  let maxN = 0;
  for (const [n, k] of queries) maxN = Math.max(maxN, n + 14);
  const { fact, invFact } = prepareFactorials(maxN);

  const ans: number[] = [];
  for (const [n, k] of queries) {
    const pf = primeFactors(k);
    let ways = 1n;
    for (const e of pf.values()) {
      console.log(e);
      const c = combBig(e + n - 1, n - 1, fact, invFact);
      ways = (ways * c) % MOD;
    }
    ans.push(Number(ways));
  }
  return ans;
}
const queries = [
  [2, 6],
  [5, 1],
  [73, 660],
];
console.log(waysToFillArray(queries));
