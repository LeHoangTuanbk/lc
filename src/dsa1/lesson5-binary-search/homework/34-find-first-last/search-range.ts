export function searchRange2(nums: number[], target: number): number[] {
  const res: number[] = Array(2).fill(-1);

  if (!nums.length) return res;
  let left = 0,
    right = nums.length - 1,
    mid = 0;
  let isFound = false;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      isFound = true;
      break;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (!isFound) return res;
  let i = mid;
  while (i < nums.length) {
    if (nums[i] !== target) {
      break;
    }
    i++;
  }
  res[1] = i - 1;
  let j = mid;
  while (j >= 0) {
    if (nums[j] !== target) {
      break;
    }
    j--;
  }
  res[0] = j + 1;
  return res;
}

export function searchRange(nums: number[], target: number): number[] {
  const res = [-1, -1];

  const findFirst = (nums: number[], target: number): number => {
    let low = 0,
      high = nums.length - 1,
      mid;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return nums[low] === target ? low : -1;
  };

  const findLast = (nums: number[], target: number): number => {
    let low = 0,
      high = nums.length - 1,
      mid;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (target >= nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return nums[high] === target ? high : -1;
  };

  res[0] = findFirst(nums, target);
  res[1] = findLast(nums, target);
  return res;
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target));
