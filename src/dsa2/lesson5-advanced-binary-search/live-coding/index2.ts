function search(nums: number[], target: number): number {
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

function search2(nums: number[], target: number): number {
  const n = nums.length;
  if (nums[0] < nums[n - 1]) {
    return binarySearch(nums, 0, n - 1, target);
  }
  // find original nums[n-1]
  let lo = 0,
    hi = n - 1,
    idx = -1;
  // [3,4,5,6,7,8,0,1,2]
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
/* 
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


*/

function searchRange(nums: number[], target: number): number[] {
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

function searchRange2(nums: number[], target: number): number[] {
  const n = nums.length;
  if (n === 0) {
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
    } else if
  }

  // search tiep lan 2. 
}

function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;
  let lo = 0, hi = 1e9, res = -1;
  while(lo <= hi) {
    const mid = lo + Math.floor((hi - lo)/2)
    if(ok(bloomDay, mid, m, k)) {
      res = mid;
      hi = mid - 1
    } else {
      lo = mid + 1;
    }
  }
  return res;
    
};

function ok(bloomDay: number[], mid: number, m: number, k: number) {
  let count = 0;
  for(const num of bloomDay) {
    if(num <= mid) {
      count++;
      if(count >= k) {
        count = 0;
        m--;
      }
    } else {
      count = 0
    }
    if(m <= 0) return true;
  }
  return false;
}

// lỗi cho if


function findPeakElement(nums: number[]): number {
  const n = nums.length;
  if (n == 1) {
    return 0;
  }
  if (n === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  let lo = 1,
    hi = n - 2;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] > nums[mid - 1]) {
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      }
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return hi == 0 ? 0 : n - 1;
}

