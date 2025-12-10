const MOD = 1e9 + 7;
const nmax = 1002;

export function numOfWays(nums: number[]): number {
  const n = nums.length;
  const C: number[][] = Array.from({ length: nmax }, () => Array(nmax).fill(0));
  for (let i = 0; i <= n; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i; j++) {
      C[i][j] = (C[i - 1][j] + C[i - 1][j - 1]) % MOD;
    }
  }

  function dfs(nums: number[]): number {
    if (nums.length < 3) {
      return 1;
    }

    const smaller: number[] = [],
      bigger: number[] = [];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[0]) {
        smaller.push(nums[i]);
      } else {
        bigger.push(nums[i]);
      }
    }

    let res = (dfs(smaller) * dfs(bigger)) % MOD;
    res = (res * C[nums.length - 1][smaller.length]) % MOD;
    return res;
  }

  return dfs(nums) - 1;
}
