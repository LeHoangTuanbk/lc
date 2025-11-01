export function totalNumbers(digits: number[]): number {
  const set = new Set<number>();

  const n = digits.length;

  for (let i = 0; i < n; i++) {
    const a = digits[i];
    if (a === 0) continue;

    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      const b = digits[j];

      for (let k = 0; k < n; k++) {
        const c = digits[k];
        if (c % 2 === 1 || k === i || k === j) continue;
        const num = 100 * a + 10 * b + c;
        set.add(num);
      }
    }
  }

  return set.size;
}

const digits = [1, 2, 3, 4];
console.log(totalNumbers(digits));
