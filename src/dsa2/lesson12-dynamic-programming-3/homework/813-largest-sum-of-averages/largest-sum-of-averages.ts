export function largestSumOfAverages(nums: number[], k: number): number {
  const n = nums.length;
  const prefix: number[] = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  // k = 1
  for (let i = 1; i <= n; i++) {
    dp[i][1] = prefix[i] / i;
  }
  // dp[i][j] = max(dp[p][j-1] + avg(p..i-1)) for all p in [j-1, i-1]
  for (let j = 2; j <= k; j++) {
    for (let i = j; i <= n; i++) {
      for (let p = j - 1; p < i; p++) {
        const avg = (prefix[i] - prefix[p]) / (i - p);
        dp[i][j] = Math.max(dp[i][j], dp[p][j - 1] + avg);
      }
    }
  }

  return dp[n][k];
}

export function largestSumOfAverages2(nums: number[], k: number): number {
  const n = nums.length;
  const prefix: number[] = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let prev: number[] = Array(n + 1).fill(0);
  let curr: number[] = Array(n + 1).fill(0);

  // k = 1
  for (let i = 1; i <= n; i++) {
    prev[i] = prefix[i] / i;
  }
  // dp[i][j] = max(dp[p][j-1] + avg(p..i-1)) for all p in [j-1, i-1]
  for (let group = 2; group <= k; group++) {
    curr.fill(0);
    for (let i = group; i <= n; i++) {
      for (let p = group - 1; p < i; p++) {
        const avg = (prefix[i] - prefix[p]) / (i - p);
        curr[i] = Math.max(curr[i], prev[p] + avg);
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev[n];
}

const nums = [9, 1, 2, 3, 9],
  k = 3;
console.log(largestSumOfAverages(nums, k));
