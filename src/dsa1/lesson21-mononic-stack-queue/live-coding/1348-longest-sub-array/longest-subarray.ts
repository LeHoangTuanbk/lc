export function longestSubarray(nums: number[], limit: number): number {
  const n = nums.length;
  const minD: number[] = [];
  const maxD: number[] = [];
  let res = 0;

  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n) {
      const next = j + 1;
      const maxVal = maxD.length ? Math.max(nums[next], nums[maxD[0]]) : nums[next];

      const minVal = minD.length ? Math.min(nums[next], nums[minD[0]]) : nums[next];

      if (maxVal - minVal > limit) break;

      j++;

      while (minD.length && nums[minD[minD.length - 1]] >= nums[j]) {
        minD.pop();
      }
      minD.push(j);

      while (maxD.length && nums[maxD[maxD.length - 1]] <= nums[j]) {
        maxD.pop();
      }
      maxD.push(j);
    }

    res = Math.max(res, j - i + 1);

    if (minD.length && minD[0] === i) minD.shift();
    if (maxD.length && maxD[0] === i) maxD.shift();
  }
  return res;
}
/* 
Example 1:

Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3

*/

function longestSubarray2(nums: number[], limit: number): number {
  const n = nums.length;
  const mind: number[] = [];
  const maxd: number[] = [];
  let res = 0;
  for (let i = 0, j = -1; i < n; i++) {
    while (j + 1 < n) {
      if (nums[j + 1] - nums[mind[0]] > limit) {
        break;
      }
      if (maxd.length && nums[maxd[0]] - nums[j + 1] > limit) {
        break;
      }
      j++;
      while (mind.length && nums[mind[mind.length - 1]] >= nums[j]) {
        mind.pop();
      }
      mind.push(j);
      while (maxd.length && nums[maxd[maxd.length - 1]] <= nums[j]) {
        maxd.pop();
      }
      maxd.push(j);
    }

    res = Math.max(res, j - i + 1);

    if (mind[0] == i) {
      mind.shift();
    }

    if (maxd[0] == i) {
      maxd.shift();
    }
  }
  return res;
}
