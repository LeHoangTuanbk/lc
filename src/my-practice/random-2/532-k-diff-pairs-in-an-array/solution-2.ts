export function findPairs(nums: number[], k: number): number {
  let count = 0;
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  for (const [num, f] of map) {
    if ((k === 0 && f > 1) || (k > 0 && map.has(num + k))) count++;
  }
  return count;
}

const nums = [1, 1, 1, 1, 1],
  k = 0;
console.log(findPairs(nums, k));
