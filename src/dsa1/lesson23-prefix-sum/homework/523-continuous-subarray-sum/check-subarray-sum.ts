function checkSubarraySum(nums: number[], k: number): boolean {
  const modIndexMap = new Map<number, number>();
  modIndexMap.set(0, -1);
  let prefixMod = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixMod = (prefixMod + nums[i]) % k;
    if (prefixMod < 0) prefixMod += k;
    if (modIndexMap.has(prefixMod)) {
      const preIndex = modIndexMap.get(prefixMod);
      if (i - preIndex >= 2) return true;
    } else {
      modIndexMap.set(prefixMod, i);
    }
  }
  return false;
}

function checkSubarraySum2(nums: number[], k: number): boolean {
  const set = new Set<number>();
  let sum = 0;
  let prevMod = 0;

  for (const num of nums) {
    sum += num;
    const mod = sum % k;
    if (set.has(mod)) return true;
    set.add(prevMod);
    prevMod = mod;
  }

  return false;
}

const nums = [5, 0, 0, 0],
  k = 3;
console.log(checkSubarraySum(nums, k));
/* 
Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false


*/
