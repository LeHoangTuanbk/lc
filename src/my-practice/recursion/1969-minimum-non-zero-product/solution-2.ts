export function minNonZeroProduct(p: number): number {
  const MOD = 1_000_000_007n;

  function fastPow(base: bigint, expo: bigint): bigint {
    if (expo === 0n) return 1n;
    let res = fastPow(base, expo >> 1n);
    res = (res * res) % MOD;
    if (expo & 1n) {
      res = (res * base) % MOD;
    }
    return res;
  }
  const lastNumber = (1n << BigInt(p)) - 1n;
  const firstNumber = (1n << BigInt(p)) - 2n;
  const times = (1n << (BigInt(p) - 1n)) - 1n;

  return Number((fastPow(firstNumber, times) * lastNumber) % MOD);
}
