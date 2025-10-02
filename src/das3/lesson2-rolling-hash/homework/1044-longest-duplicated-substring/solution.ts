const MOD = 1_000_000_007;
const BASE = 311;

export function buildHash(s: string) {
  const n = s.length;
  const hash: number[] = Array(n + 1).fill(0);
  const power: number[] = Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    hash[i + 1] = (hash[i] * BASE + s.charCodeAt(i)) % MOD;
    power[i + 1] = (power[i] * BASE) % MOD;
  }

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    const val = (((hash[r + 1] - hash[l] * power[len]) % MOD) + MOD) % MOD;
    return val;
  }

  return { getHash };
}

export function longestDupSubstring(s: string): string {
  const n = s.length;
  const { getHash } = buildHash(s);
  const set = new Set<number>();
  let maxLength = 0;
  let subStringInfo = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const hash = getHash(i, j);
      if (set.has(hash)) {
        if (j - i + 1 >= maxLength) {
          maxLength = j - i + 1;
          subStringInfo = [i, j];
        }
      }
      set.add(hash);
    }
  }

  return subStringInfo.length ? s.slice(subStringInfo[0], subStringInfo[1] + 1) : '';
}

const s = 'aa';
console.log(longestDupSubstring(s));
