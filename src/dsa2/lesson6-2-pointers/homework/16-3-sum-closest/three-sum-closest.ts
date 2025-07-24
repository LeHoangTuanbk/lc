export function threeSumClosest(nums: number[], target: number): number {
  // sort + 2 pointers
  let res: [number, number, number];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let maxGap = Infinity;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let gap = Math.abs(sum - target);
      if (gap < maxGap) {
        res = [i, left, right];
        maxGap = gap;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return res.reduce((pre, current) => pre + nums[current], 0);
}

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90],
  target = 1;
console.log(threeSumClosest(nums, target));
/* 
Example 1:

Input: nums = [-1,2,1,-4], target = 1
-4, -1, 1, 2
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/

export function threeSumClosest2(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closestSum;
}

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90],
  target = 1;
console.log(threeSumClosest(nums, target));
/* 
Example 1:

Input: nums = [-1,2,1,-4], target = 1
-4, -1, 1, 2
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/
