export function singleNonDuplicate2(nums: number[]): number {
  let low = 0,
    high = nums.length - 1,
    mid = 0;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid];
    } else {
      if ((mid + 1) % 2 == 0) {
        if (nums[mid] === nums[mid - 1]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (nums[mid] === nums[mid - 1]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return nums[mid];
}

export function singleNonDuplicate(nums: number[]): number {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) {
      low = mid + 2;
    } else {
      high = mid;
    }
  }
  return nums[low];
}
