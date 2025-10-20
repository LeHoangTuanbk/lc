function findIndexOf(nums: number[], pattern: number[], fromIndex: number) {
  const n = nums.length,
    m = pattern.length;
  for (let i = fromIndex; i <= n - m; i++) {
    let j = 0;
    while (j < m && nums[i + j] === pattern[j]) {
      j++;
    }
    if (j === m) return i + j - 1;
  }
  return -1;
}

export function canChoose(groups: number[][], nums: number[]): boolean {
  const n = groups.length;
  let lastIndex = -1;
  for (let i = 0; i < n; i++) {
    lastIndex = findIndexOf(nums, groups[i], lastIndex + 1);
    console.log(lastIndex);
    if (lastIndex === -1) return false;
  }

  return true;
}

const groups = [
    [1, -1, -1],
    [3, -2, 0],
  ],
  nums = [1, -1, 0, 1, -1, -1, 3, -2, 0];
console.log(canChoose(groups, nums));
/* 
Example 1:

Input: groups = [[1,-1,-1],[3,-2,0]], nums = [1,-1,0,1,-1,-1,3,-2,0]
Output: true
Explanation: You can choose the 0th subarray as [1,-1,0,1,-1,-1,3,-2,0] and the 1st one as [1,-1,0,1,-1,-1,3,-2,0].
These subarrays are disjoint as they share no common nums[k] element.
Example 2:

Input: groups = [[10,-2],[1,2,3,4]], nums = [1,2,3,4,10,-2]
Output: false
Explanation: Note that choosing the subarrays [1,2,3,4,10,-2] and [1,2,3,4,10,-2] is incorrect because they are not in the same order as in groups.
[10,-2] must come before [1,2,3,4].
Example 3:

Input: groups = [[1,2,3],[3,4]], nums = [7,7,1,2,3,4,7,7]
Output: false
Explanation: Note that choosing the subarrays [7,7,1,2,3,4,7,7] and [7,7,1,2,3,4,7,7] is invalid because they are not disjoint.
They share a common elements nums[4] (0-indexed).

*/
