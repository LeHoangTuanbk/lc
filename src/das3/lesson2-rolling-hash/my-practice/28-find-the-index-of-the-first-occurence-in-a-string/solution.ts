const BASE = 311n;
const MOD = BigInt(1e9 + 11);

function buildHash(s: string): { prefix: bigint[]; power: bigint[] } {
  const n = s.length;
  const prefix: bigint[] = Array(n + 1).fill(0n);
  const power: bigint[] = Array(n + 1).fill(1n);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = (prefix[i] * BASE + BigInt(s.charCodeAt(i))) % MOD;
    power[i + 1] = (power[i] * BASE) % MOD;
  }

  return { prefix, power };
}

function getHash(prefix: bigint[], power: bigint[], l: number, r: number) {
  return (prefix[r + 1] - ((prefix[l] * power[r - l + 1]) % MOD) + MOD) % MOD;
}

export function strStr(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  if (m === 0) return 0;
  if (m > n) return -1;

  const { prefix: hPrefix, power } = buildHash(haystack);
  const { prefix: nPrefix } = buildHash(needle);

  const targetHash = getHash(nPrefix, power, 0, m - 1);

  for (let i = 0; i <= n - m; i++) {
    const subHash = getHash(hPrefix, power, i, i + m - 1);
    if (subHash === targetHash) {
      return i;
    }
  }
  return -1;
}
