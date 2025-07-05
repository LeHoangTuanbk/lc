function rangeSum(left: number, right: number, prefixSum: number[]) {
  if (left === 0) return prefixSum[right];
  return prefixSum[right] - prefixSum[left - 1];
}

export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;
    const target = sum - k;
    if (map.has(target)) {
      count += map.get(target);
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return count;
}

export function subarraySum2(nums: number[], k: number): number {
  const record = {};
  record[0] = 1;
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;
    const target = sum - k;
    if (record[target]) {
      count += record[target];
    }
    record[sum] = (record[sum] ?? 0) + 1;
  }
  return count;
}
/* 
Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

 */

const nums = [1, 2, 3],
  k = 3;
console.log(subarraySum2(nums, k));
