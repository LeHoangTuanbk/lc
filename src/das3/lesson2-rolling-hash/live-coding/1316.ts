const MOD = 1_000_000_000 + 7;

export function distinctEchoSubstrings(text: string): number {
  const n = text.length;
  text = ' ' + text;

  const hashP = Array(n + 1).fill(0);
  const power = Array(n + 1).fill(0);
  const base = 27;
  // index from 1

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    const hashResult = (hashP[r] - ((hashP[l - 1] * power[len]) % MOD) + MOD) % MOD;
    return hashResult;
  }

  power[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    hashP[i] = (hashP[i - 1] * base + text.charCodeAt(i)) % MOD;
    power[i] = (power[i - 1] * base) % MOD;
  }

  let ans = new Set<number>();
  for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
      const k = j - i + 1 + j;
      if (k > n) continue;

      const hashString = getHash(i, j);
      if (hashString === getHash(j + 1, k)) {
        ans.add(hashString);
      }
    }
  }
  return ans.size;
}
