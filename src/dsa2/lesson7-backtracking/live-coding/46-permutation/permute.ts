function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  const used = Array(n).fill(false);

  function backtrack(path: number[]) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);

  return result;
}
