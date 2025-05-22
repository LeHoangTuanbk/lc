// greedy: get max string length unique
export function partitionString(s: string): number {
  const set = new Set<string>();
  let minimumPartition = 0;
  for (const c of s) {
    if (set.has(c)) {
      minimumPartition++;
      set.clear();
    }
    set.add(c);
  }
  return minimumPartition + 1;
}

const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return i < 3 ? { value: i++, done: false } : { done: true };
      },
    };
  },
};

for (const x of obj) {
  console.log(x); // 0, 1, 2
}
