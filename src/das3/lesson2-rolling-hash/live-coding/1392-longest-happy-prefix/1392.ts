const MOD = 2_147_483_647n; // số nguyên tố lớn (2^31 - 1)
const BASE = 131n; // base lớn, giảm xác suất collision

function buildHashPrefix(text: string) {
  const n = text.length;
  text = ' ' + text; // index từ 1

  const hashP: bigint[] = Array(n + 1).fill(0n);
  const power: bigint[] = Array(n + 1).fill(1n);

  for (let i = 1; i <= n; i++) {
    const index = BigInt(text.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
    hashP[i] = (hashP[i - 1] * BASE + index) % MOD;
    power[i] = (power[i - 1] * BASE) % MOD;
  }

  function getHash(l: number, r: number): bigint {
    const len = BigInt(r - l + 1);
    return (hashP[r] - ((hashP[l - 1] * power[Number(len)]) % MOD) + MOD) % MOD;
  }

  return { getHash };
}

export function longestPrefix(s: string): string {
  const n = s.length;
  const { getHash } = buildHashPrefix(s);

  for (let len = n - 1; len >= 1; len--) {
    if (getHash(1, len) === getHash(n - len + 1, n)) {
      return s.substring(0, len);
    }
  }

  return '';
}
