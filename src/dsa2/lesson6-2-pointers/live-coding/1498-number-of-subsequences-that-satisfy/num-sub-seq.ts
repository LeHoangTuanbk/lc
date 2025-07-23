function powMod2(base: number, exponent: number, mod: number): number {
  if (exponent === 0) return 1;
  // (a * b) mod c = (a mod c * b mod c) mod c;
  base %= mod;
  const half = powMod(base, Math.floor(exponent / 2), mod);
  let result = (half * half) % mod;

  if (exponent % 2 === 1) {
    result = (result * base) % mod;
  }

  return result;
}

function powMod(base: number, exponent: number, mod: number): number {
  let result = 1;
  base %= mod;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}

export function numSubseq(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let i = 0,
    j = n - 1,
    res = 0;
  const MOD = 1e9 + 7;
  while (i <= j) {
    if (nums[i] + nums[j] > target) {
      j--;
    } else {
      res += powMod(2, j - i, MOD);
      res %= MOD;
      i++;
    }
  }
  return res;
}

export function numSubseq2(nums: number[], target: number): number {
  const n = nums.length;
  const MOD = 1e9 + 7;
  nums.sort((a, b) => a - b);

  // Precompute power[k] = 2^k % MOD
  const power = new Array<number>(n).fill(1);
  for (let k = 1; k < n; k++) {
    power[k] = (power[k - 1] * 2) % MOD;
  }

  let i = 0,
    j = n - 1,
    res = 0;
  while (i <= j) {
    if (nums[i] + nums[j] <= target) {
      res = (res + power[j - i]) % MOD;
      i++;
    } else {
      j--;
    }
  }
  return res;
}
