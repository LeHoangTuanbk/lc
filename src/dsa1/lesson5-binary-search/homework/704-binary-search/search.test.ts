export function search2(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1,
    mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

export function search(nums: number[], target: number): number {
  function recursiveBinarySearch(nums: number[], target: number, low: number, high: number) {
    if (low > high) return -1;
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return recursiveBinarySearch(nums, target, mid + 1, high);
    else return recursiveBinarySearch(nums, target, low, mid - 1);
  }
  return recursiveBinarySearch(nums, target, 0, nums.length - 1);
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));
