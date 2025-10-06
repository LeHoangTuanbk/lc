export function maximumLength(nums: number[]): number {
  const freq = new Map<number, number>();
  for (const v of nums) freq.set(v, (freq.get(v) ?? 0) + 1);

  let maxCount = 1;
  const numsUnique = Array.from(freq.keys());

  for (const numValue of numsUnique) {
    if (numValue === 1) {
      const c = freq.get(1)!;
      const len = c % 2 === 0 ? c - 1 : c;
      maxCount = Math.max(maxCount, len);
      continue;
    }

    const powers: number[] = [];
    let p = numValue;
    while (p <= 1e9 && freq.has(p)) {
      powers.push(p);
      if (p > Number.MAX_SAFE_INTEGER / p) break;
      p = p * p;
    }

    let count = 0;
    for (let i = 0; i < powers.length; i++) {
      const val = powers[i];
      const c = freq.get(val) ?? 0;

      if (c >= 2) {
        count += 2;
      } else if (c === 1) {
        count += 1;
        break;
      } else {
        break;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount % 2 === 0 ? maxCount - 1 : maxCount;
}
