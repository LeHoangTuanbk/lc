function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;
  if (n == 0) {
    return [-1, -1];
  }
  let lo = 0,
    hi = n - 1,
    start = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      start = mid;
      hi = mid - 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  if (start === -1) {
    return [-1, -1];
  }

  lo = start;
  hi = n - 1;
  let end = start;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      end = mid;
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return [start, end];
}

/* 
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

function searchRange2(nums: number[], target: number): number[] {
  const n = nums.length;
  return [lowerBound(nums, 0, n, target), upperBound(nums, 0, n - 1, target)];
}

/* 
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

function lowerBound(nums: number[], lo: number, hi: number, target: number) {
  let found = false;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      found = true;
      hi = mid - 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return found ? hi : lo;
}

function upperBound(nums: number[], lo: number, hi: number, target: number) {
  let found = false;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      found = true;
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return found ? hi : lo;
}
