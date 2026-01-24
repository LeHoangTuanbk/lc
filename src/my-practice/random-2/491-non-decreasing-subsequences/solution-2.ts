export function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number) => {
    if (path.length >= 2) {
      res.push([...path]);
    }
    const used = new Set<number>();
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if (used.has(num)) continue;
      if (path.length > 0 && nums[i] < path.at(-1)) continue;
      used.add(num);
      path.push(num);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return res;
}

const nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
