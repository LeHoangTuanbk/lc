export function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  let res = 0;
  const symbols: string[] = ['-', '+'];

  function dfs(start: number, s: string[]) {
    if (s.length === n) {
      const expression = s.join('');
      if (eval(expression) === target) {
        res++;
      }
      return;
    }
    for (const symbol of symbols) {
      s.push(`${symbol}${nums[start]}`);
      dfs(start + 1, s);
      s.pop();
    }
  }

  dfs(0, []);
  return res;
}

const nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target));
