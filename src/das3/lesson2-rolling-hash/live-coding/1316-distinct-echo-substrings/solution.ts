const MOD = 1_000_007;
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

export function distinctEchoSubstrings(text: string): number {
  const n = text.length;
  const { getHash } = buildHash(text);

  const set = new Set<string>();

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const len = j - i + 1;
      const k = j + len;
      if (k >= n) {
        break;
      }
      const part1 = getHash(i, j);
      const part2 = getHash(j + 1, k);
      if (part1 === part2) {
        set.add(text.substring(i, k + 1));
      }
    }
  }
  return set.size;
}

const text = 'abcabcabc';
console.log(distinctEchoSubstrings(text));
