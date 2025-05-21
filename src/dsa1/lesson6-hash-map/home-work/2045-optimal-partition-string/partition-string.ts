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
