export function search(nums: number[], target: number): boolean {
  // find peak
  if (nums[0] === target || nums.at(-1) === target) return true;
  const n = nums.length;
  let lo = 0,
    hi = n - 1;

  while (nums[lo] === nums[0]) {
    lo++;
  }
  while (nums[hi] === nums[0]) {
    hi--;
  }

  if (lo >= hi) return nums[lo] === target || nums[hi] === target;

  let left = lo,
    right = hi;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // right is peak;
  // compare to first or last, find which part.
  // binary search each part.
  return binarySearch(nums, lo, right, target) || binarySearch(nums, left, hi, target);
}

function binarySearch(nums: number[], lo: number, hi: number, target: number): boolean {
  while (lo <= hi) {
    const mid = (hi + lo) >> 1;
    if (nums[mid] === target) return true;
    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

const nums = [2, 2, 2, 0, 2, 2],
  target = 0;
console.log(search(nums, target));
