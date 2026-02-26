export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let product = 1;
  const n = nums.length;
  let i = 0,
    j = 0,
    res = 0;
  while (j < n) {
    product *= nums[j];

    while (product >= k && i <= j) {
      product /= nums[i];
      i++;
    }

    res += j - i + 1;
    j++;
  }

  return res;
}

const nums = [10, 5, 2, 6],
  k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
