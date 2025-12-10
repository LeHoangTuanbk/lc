const MOD = 1_000_000_007n;

function power(base: bigint, exp: bigint, mod: bigint): bigint {
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % mod;
    }
    exp = exp / 2n;
    base = (base * base) % mod;
  }
  return result;
}

function modInverse(a: bigint, mod: bigint): bigint {
  return power(a, mod - 2n, mod);
}

export function numOfWays(nums: number[]): number {
  const n = nums.length;

  const fact: bigint[] = new Array(n + 1);
  const invFact: bigint[] = new Array(n + 1);

  fact[0] = 1n;
  for (let i = 1; i <= n; i++) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  }

  invFact[n] = modInverse(fact[n], MOD);
  for (let i = n - 1; i >= 0; i--) {
    invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
  }

  function nCr(n: number, k: number): bigint {
    if (k < 0 || k > n) return 0n;
    return (((fact[n] * invFact[k]) % MOD) * invFact[n - k]) % MOD;
  }

  function dfs(arr: number[]): bigint {
    if (arr.length <= 1) return 1n;

    const root = arr[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < root) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    const leftWays = dfs(left);
    const rightWays = dfs(right);
    const L = left.length,
      R = right.length;

    const interleaveWays = nCr(L + R, L);

    let result = interleaveWays;
    result = (result * leftWays) % MOD;
    result = (result * rightWays) % MOD;

    return result;
  }

  return Number((dfs(nums) - 1n + MOD) % MOD);
}

const nums = [3, 4, 5, 1, 2];
console.log(numOfWays(nums));
