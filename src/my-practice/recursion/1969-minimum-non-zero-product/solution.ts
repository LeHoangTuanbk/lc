export function minNonZeroProduct(p: number): number {
  const MOD = 1_000_000_007;

  function fastPow(base: number, expo: number): number {
    if (expo === 0) return 1;
    let res = fastPow(base, expo >> 1);
    res = (res * res) % MOD;
    if (expo & 1) {
      res = (res * base) % MOD;
    }
    return res;
  }

  const lastNumber = (1 << p) - 1;
  const firstNumber = (1 << p) - 2;
  const times = (1 << (p - 1)) - 1;

  return (fastPow(firstNumber, times) * lastNumber) % MOD;
}
