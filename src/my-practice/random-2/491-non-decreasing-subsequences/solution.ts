export function findSubsequences(nums: number[]): number[][] {
  const n = nums.length;
  const fullMask = (1 << n) - 1;
  const res: number[][] = [];
  const set = new Set<string>();
  for (let i = 1; i <= fullMask; i++) {
    const arr: number[] = [];
    for (let j = 0; j < n; j++) {
      if ((i >> j) & 1) arr.push(nums[j]);
    }
    if (arr.length > 1) {
      const key = arr.join(',');
      if (!set.has(key) && checkNonDecreasing(arr)) {
        res.push(arr);
        set.add(key);
      }
    }
  }
  return res;
}

function checkNonDecreasing(arr: number[]): boolean {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

const nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
