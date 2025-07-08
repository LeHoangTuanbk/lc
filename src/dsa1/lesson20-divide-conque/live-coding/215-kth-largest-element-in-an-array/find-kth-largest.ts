export function findKthLargest(nums: number[], k: number): number {
  const target = nums.length - k;

  function quickSelect(left: number, right: number): number {
    const pivot = nums.at(Math.floor(left + right) / 2);
    let l = left;
    let r = right;
    while (l <= r) {
      while (nums[l] < pivot) l++;
      while (nums[r] > pivot) r--;
      if (l <= r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
      }
    }

    if (target <= r) return quickSelect(left, r);
    else if (target >= l) return quickSelect(l, right);
    else return nums[target];
  }

  return quickSelect(0, nums.length - 1);
}
/* 
Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/
export function findKthLargest2(nums: number[], k: number): number {
  const target = nums.length - k;

  function quickSelect(left: number, right: number): number {
    const pivot = nums[right];
    let storeIndex = left - 1;

    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        storeIndex++;
        [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
      }
    }

    // Đưa pivot vào đúng vị trí
    storeIndex++;
    [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];

    // So sánh vị trí với target
    if (storeIndex === target) {
      return nums[storeIndex];
    } else if (storeIndex < target) {
      return quickSelect(storeIndex + 1, right);
    } else {
      return quickSelect(left, storeIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}
