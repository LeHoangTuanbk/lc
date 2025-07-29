export function findTargetSumWays(nums: number[], target: number): number {
  // sum: - total -> + total
  const memo = new Map<string, number>();

  function dfs(i: number, sum: number): number {
    const key = `${i}, ${sum}`;
    if (memo.has(key)) return memo.get(key);
    if (i === nums.length) {
      return sum === target ? 1 : 0;
    }

    const add = dfs(i + 1, sum + nums[i]);
    const subtract = dfs(i + 1, sum - nums[i]);
    const total = add + subtract;
    memo.set(key, total);

    return total;
  }

  return dfs(0, 0);
}

const nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target));

// Time: n * range
