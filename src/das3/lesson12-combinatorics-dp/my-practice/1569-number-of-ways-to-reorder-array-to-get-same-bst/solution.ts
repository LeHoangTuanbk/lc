const MOD = 1e9 + 7;
export function numOfWays(nums: number[]): number {
  const n = nums.length;

  const C: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    C[i][0] = C[i][i] = 1;
    for (let j = 1; j < i; j++) {
      C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
    }
  }

  function dfs(arr: number[]): number {
    if (arr.length <= 1) return 1;
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

    const interleaveWays = C[L + R][L];
    let result = 1;
    result = (result * interleaveWays) % MOD;
    result = (result * leftWays) % MOD;
    result = (result * rightWays) % MOD;

    return result;
  }

  return (dfs(nums) - 1 + MOD) % MOD;
}
const nums = [3, 4, 5, 1, 2];
console.log(numOfWays(nums));
