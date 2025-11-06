export function countGoodNumbers(n: number): number {
  const MOD = 1_000_000_007n;
  const even = BigInt(Math.ceil(n / 2));
  const odd = BigInt(Math.floor(n / 2));

  function fastPow(base: bigint, exp: bigint): bigint {
    if (exp === 0n) return 1n;
    let res = 1n;
    for (let i = 0n; i < exp; i++) {
      res = (res * base) % MOD;
    }

    return res;
  }

  let res = (fastPow(5n, even) * fastPow(4n, odd)) % MOD;

  return Number(res);
}

const n = 4;
console.log(countGoodNumbers(n));
