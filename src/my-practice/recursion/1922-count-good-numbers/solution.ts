export function countGoodNumbers(n: number): number {
  const MOD = 1_000_000_007n;
  const even = BigInt(Math.ceil(n / 2));
  const odd = BigInt(Math.floor(n / 2));

  function fastPow(base: bigint, exp: bigint): bigint {
    if (exp === 0n) return 1n;
    let res = 1n;
    let b = base % MOD;
    let e = exp;
    while (e > 0n) {
      if (e & 1n) res = (res * b) % MOD;
      b = (b * b) % MOD;
      e >>= 1n;
    }

    return res;
  }

  let res = (fastPow(5n, even) * fastPow(4n, odd)) % MOD;

  return Number(res);
}
