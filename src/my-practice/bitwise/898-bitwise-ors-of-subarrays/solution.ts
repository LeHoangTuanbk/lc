export function subarrayBitwiseORs(arr: number[]): number {
  const all = new Set<number>();
  let cur = new Set<number>();

  for (const x of arr) {
    const next = new Set<number>();
    next.add(x);
    for (const v of cur) {
      next.add(v | x);
    }
    cur = next;

    for (const v of cur) {
      all.add(v);
    }
  }
  return all.size;
}
