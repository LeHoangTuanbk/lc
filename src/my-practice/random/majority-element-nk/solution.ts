export function majorityElementNK(nums: number[], k: number): number[] {
  if (k < 2) return [];

  const candidates = new Map<number, number>();

  for (const num of nums) {
    if (candidates.has(num)) {
      candidates.set(num, candidates.get(num) + 1);
    } else if (candidates.size < k - 1) {
      candidates.set(num, 1);
    } else {
      for (const [key, cnt] of candidates) {
        if (cnt === 1) candidates.delete(key);
        else candidates.set(key, cnt - 1);
      }
    }
  }

  const freq = new Map<number, number>();
  for (const num of nums) {
    if (candidates.has(num)) {
      freq.set(num, (freq.get(num) ?? 0) + 1);
    }
  }

  const res: number[] = [];
  const threshold = Math.floor(nums.length / k);
  for (const [num, cnt] of freq) {
    if (cnt > threshold) res.push(num);
  }

  return res;
}
const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];
const k = 4;
console.log(majorityElementNK(nums, k));
