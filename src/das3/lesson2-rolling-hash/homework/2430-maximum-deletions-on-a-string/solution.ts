const MOD = 1_000_000_007;
const BASE = 311;

function buildHash(s: string) {
  const n = s.length;
  const hash: number[] = Array(n + 1).fill(0);
  const power: number[] = Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    hash[i + 1] = (hash[i] * BASE + (s.charCodeAt(i) - 96)) % MOD;
    power[i + 1] = (power[i] * BASE) % MOD;
  }

  function getHash(l: number, r: number) {
    const len = r - l + 1;
    return (hash[r + 1] - ((hash[l] * power[len]) % MOD) + MOD) % MOD;
  }

  return { getHash };
}

export function deleteString(s: string): number {
  const n = s.length;
  const { getHash } = buildHash(s);
  const dp = Array(n + 1).fill(1);

  for (let i = n - 1; i >= 0; i--) {
    for (let len = 1; i + 2 * len <= n; len++) {
      if (getHash(i, i + len - 1) === getHash(i + len, i + 2 * len - 1)) {
        dp[i] = Math.max(dp[i], 1 + dp[i + len]);
      }
    }
  }

  return dp[0];
}

const s = 'abcabcdabc';
console.log(deleteString(s));
