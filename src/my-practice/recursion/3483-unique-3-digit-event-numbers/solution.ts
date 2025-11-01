export function totalNumbers(digits: number[]): number {
  const set = new Set<number>();
  const marked = Array(10).fill(false);

  function backtrack(selects: number[]) {
    const len = selects.length;
    if (selects.length === 3) {
      set.add(100 * selects[0] + 10 * selects[1] + selects[2]);
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      const d = digits[i];
      if (marked[i]) continue;
      if (len === 0 && d === 0) continue;
      if (len === 2 && d % 2 !== 0) continue;
      selects.push(digits[i]);
      marked[i] = true;
      backtrack(selects);
      selects.pop();
      marked[i] = false;
    }
  }

  backtrack([]);

  return set.size;
}

const digits = [1, 2, 3, 4];
console.log(totalNumbers(digits));
