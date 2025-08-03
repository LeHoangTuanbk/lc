export function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let am = 1; am <= target; am++) {
    for (const num of nums) {
      if (num <= am) dp[am] += dp[am - num];
    }
  }
  // for (const num of nums) {
  //   for (let am = num; am <= target; am++) {
  //     dp[am] += dp[am - num];
  //   }
  // }
  return dp[target];
}

const nums = [1, 2, 3],
  target = 4;
console.log(combinationSum4(nums, target));
