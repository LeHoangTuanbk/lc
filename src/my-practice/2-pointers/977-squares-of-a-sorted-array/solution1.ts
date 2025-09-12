export function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  const res: number[] = [];
  if (nums[0] >= 0) return nums.map((num) => num * num);
  if (nums[n - 1] <= 0) return nums.reverse().map((num) => num * num);
  const index = findLowerBound(nums, 0);
  let left = index - 1,
    right = index;

  while (left >= 0 && right < n) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (leftSquare <= rightSquare) {
      res.push(leftSquare);
      left--;
    } else {
      res.push(rightSquare);
      right++;
    }
  }

  while (left >= 0) {
    res.push(nums[left] * nums[left]);
    left--;
  }

  while (right < n) {
    res.push(nums[right] * nums[right]);
    right++;
  }

  return res;
}

function findLowerBound(nums: number[], target: number) {
  const n = nums.length;
  let low = 0,
    high = n;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] >= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
}

const nums = [-3, 0, 2];
// console.log(findLowerBound(nums, 0));
console.log(sortedSquares(nums));

/* 
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/
