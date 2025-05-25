export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  // Find a element >= x => return index or -1
  const n = potions.length;
  potions.sort((a, b) => a - b);
  function findFirst(target: number): number {
    let low = 0,
      high = n - 1,
      mid;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (potions[mid] >= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
  const m = spells.length;
  const res: number[] = Array(m);
  for (let i = 0; i < m; i++) {
    const s = spells[i];
    const neededNumber = findFirst(Math.ceil(success / s));
    const numberOfPortions = n - neededNumber;
    res[i] = numberOfPortions;
  }
  return res;
}
