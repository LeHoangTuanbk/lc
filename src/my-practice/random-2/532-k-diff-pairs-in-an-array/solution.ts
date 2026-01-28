export function findPairs(nums: number[], k: number): number {
  let count = 0;
  if (k === 0) {
    const map = new Map<number, number>();
    for (const num of nums) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
    for (const val of map.values()) {
      count += val > 1 ? 1 : 0;
    }
    return count;
  }
  const set = new Set<number>(nums);
  for (const num of set.values()) {
    if (set.has(num + k)) count++;
  }
  return count;
}

const nums = [1, 1, 1, 1, 1],
  k = 0;
console.log(findPairs(nums, k));
