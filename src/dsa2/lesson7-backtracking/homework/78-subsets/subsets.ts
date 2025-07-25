export function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;

  function backtrack(path: number[], start: number) {
    res.push([...path]);
    for (let i = start; i < n; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 0);

  return res;
}

const nums = [1, 2, 3];
console.log(subsets(nums));
/* 
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/
