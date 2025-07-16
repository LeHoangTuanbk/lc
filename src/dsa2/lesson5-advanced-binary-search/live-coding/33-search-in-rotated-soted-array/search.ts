export function search(nums: number[], target: number): number {
  const n = nums.length;
  if (nums[0] < nums[n - 1]) {
    return binarySearch(nums, 0, n - 1, target);
  }

  // find original nums[n-1]
  let lo = 0,
    hi = n - 1,
    idx = -1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[0] <= nums[mid]) {
      lo = mid + 1;
      idx = mid;
    } else {
      hi = mid - 1;
    }
  }

  if (target < nums[0]) {
    return binarySearch(nums, idx + 1, n - 1, target);
  } else {
    return binarySearch(nums, 0, idx, target);
  }
}
function binarySearch(nums: number[], lo: number, hi: number, target: number) {
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}

// Still hasn't understood fully
function search2(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
