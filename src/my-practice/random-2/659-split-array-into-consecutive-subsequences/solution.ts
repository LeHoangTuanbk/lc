function isPossible(nums: number[]): boolean {
  const unused = new Map<number, number>();
  const need = new Map<number, number>();

  for (const num of nums) {
    unused.set(num, (unused.get(num) ?? 0) + 1);
  }

  for (const num of nums) {
    if ((unused.get(num) ?? 0) === 0) continue;

    if ((need.get(num) ?? 0) > 0) {
      need.set(num, need.get(num) - 1);
      need.set(num + 1, (need.get(num + 1) ?? 0) + 1);
      unused.set(num, unused.get(num) - 1);
    } else if ((unused.get(num + 1) ?? 0) > 0 && (unused.get(num + 2) ?? 0) > 0) {
      unused.set(num, unused.get(num) - 1);
      unused.set(num + 1, unused.get(num + 1) - 1);
      unused.set(num + 2, unused.get(num + 2) - 1);
      need.set(num + 3, (need.get(num + 3) ?? 0) + 1);
    } else {
      return false;
    }
  }

  return true;
}
