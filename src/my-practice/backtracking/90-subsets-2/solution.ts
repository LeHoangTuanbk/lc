export function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  function backtrack(candidates: number[], start: number) {
    res.push([...candidates]);

    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      candidates.push(nums[i]);
      backtrack(candidates, i + 1);
      candidates.pop();
    }
  }
  backtrack([], 0);
  return res;
}

const nums = [4, 4, 4, 1, 4];
console.log(subsetsWithDup(nums));
