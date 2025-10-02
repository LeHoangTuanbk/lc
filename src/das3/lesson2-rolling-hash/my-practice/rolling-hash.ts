const MOD = 1_000_000_007;
const BASE = 311;

export function buildHash(s: string) {
  const n = s.length;
  const hash: number[] = Array(n + 1).fill(0);
  const power: number[] = Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    hash[i + 1] = (hash[i] * BASE + (s.charCodeAt(i) - 96)) % MOD;
    power[i + 1] = (power[i] * BASE) % MOD;
  }

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    const val = (((hash[r + 1] - hash[l] * power[len]) % MOD) + MOD) % MOD;
    return val;
  }

  return { getHash };
}

const s = 'abcdefgh';
const { getHash } = buildHash(s);
console.log(getHash(0, 2));
console.log(getHash(1, 2));
console.log(getHash(1, s.length - 1));
