export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (window.has(num)) return true;
    window.add(num);
    if (window.size > k) window.delete(nums[i - k]);
  }

  return false;
}

const nums = [1, 2, 3, 1, 2, 3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
