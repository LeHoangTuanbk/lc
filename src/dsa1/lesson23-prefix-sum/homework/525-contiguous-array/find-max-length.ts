export function findMaxLength(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) nums[i] = -1;
  }
  const prefixSum: number[] = Array(n + 1).fill(0);
  let maxLength = 0;

  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  const indexMap = new Map<number, number>();
  indexMap.set(0, 0);
  for (let i = 1; i <= n; i++) {
    if (!indexMap.has(prefixSum[i])) {
      indexMap.set(prefixSum[i], i);
    }
  }

  for (let i = 1; i <= n; i++) {
    const firstIndex = indexMap.get(prefixSum[i]);
    if (firstIndex === null) continue;
    const length = i - firstIndex;
    maxLength = Math.max(length, maxLength);
  }
  return maxLength;
}

const nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
const expectedOutput = 6;
findMaxLength(nums);

export function findMaxLength2(nums: number[]): number {
  const map = new Map<number, number>();
  map.set(0, -1);

  let sum = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (map.has(sum)) {
      const firstIndex = map.get(sum);
      maxLength = Math.max(maxLength, i - firstIndex);
    } else {
      map.set(sum, i);
    }
  }

  return maxLength;
}
