const MOD = 1_000_000_007n;

export function numOfWays(nums: number[]): number {
  const n = nums.length;

  const C: bigint[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0n));
  for (let i = 0; i <= n; i++) {
    C[i][0] = C[i][i] = 1n;
    for (let j = 1; j < i; j++) {
      C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
    }
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

    const L = left.length;
    const R = right.length;
    const interleaveWays = C[L + R][L];

    let result = interleaveWays;
    result = (result * leftWays) % MOD;
    result = (result * rightWays) % MOD;

    return result;
  }

  return Number((dfs(nums) - 1n + MOD) % MOD);
}
