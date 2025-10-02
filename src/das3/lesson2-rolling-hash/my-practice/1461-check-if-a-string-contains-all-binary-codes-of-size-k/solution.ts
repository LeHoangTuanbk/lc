const MOD1 = 1_000_000_000_007;
const MOD2 = 1_000_000_000_009;
const BASE1 = 311;
const BASE2 = 313;

function buildDoubleHash(s: string) {
  const n = s.length;
  const h1 = Array(n + 1).fill(0),
    h2 = Array(n + 1).fill(0);
  const p1 = Array(n + 1).fill(1),
    p2 = Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i) - '0'.charCodeAt(0) + 1;
    h1[i + 1] = (h1[i] * BASE1 + code) % MOD1;
    h2[i + 1] = (h2[i] * BASE2 + code) % MOD2;
    p1[i + 1] = (p1[i] * BASE1) % MOD1;
    p2[i + 1] = (p2[i] * BASE2) % MOD2;
  }

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    const x1 = (h1[r + 1] - ((h1[l] * p1[len]) % MOD1) + MOD1) % MOD1;
    const x2 = (h2[r + 1] - ((h2[l] * p2[len]) % MOD2) + MOD2) % MOD2;
    return `${x1},${x2}`;
  }

  return { getHash };
}

export function hasAllCodes(s: string, k: number): boolean {
  const n = s.length;
  const { getHash } = buildDoubleHash(s);
  const set = new Set<string>();
  for (let i = 0; i <= n - k; i++) {
    set.add(getHash(i, i + k - 1));
  }
  return set.size >= 1 << k;
}

const s = '00000000001011100',
  k = 3;

console.log(hasAllCodes(s, k));
