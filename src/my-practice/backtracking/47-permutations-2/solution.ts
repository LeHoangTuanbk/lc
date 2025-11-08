export function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const visited = Array(n).fill(false);
  let res: number[][] = [];

  function backtrack(candidates: number[]): void {
    if (candidates.length === n) {
      res.push([...candidates]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      if (i > 0 && !visited[i - 1] && nums[i] === nums[i - 1]) continue;
      visited[i] = true;
      candidates.push(nums[i]);
      backtrack(candidates);
      candidates.pop();
      visited[i] = false;
    }
  }
  backtrack([]);

  return res;
}

const nums = [1, 1, 2];
console.log(permuteUnique(nums));
/* 
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/
