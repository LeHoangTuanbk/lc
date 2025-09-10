export function findRepeatedDnaSequences(s: string): string[] {
  const n = s.length;
  if (n < 10) return [];

  const res: string[] = [];
  const seen = new Set<number>();
  const repeated = new Set<number>();

  const map = new Map<string, number>([
    ['A', 0],
    ['C', 1],
    ['G', 2],
    ['T', 3],
  ]);

  let hash = 0;
  const mask = (1 << 20) - 1; // 20 bits

  for (let i = 0; i < n; i++) {
    // rolling: shift left 2 bits + current char
    hash = ((hash << 2) | map.get(s[i])!) & mask;

    if (i < 9) continue; // not enough length yet

    if (seen.has(hash)) {
      if (!repeated.has(hash)) {
        res.push(s.slice(i - 9, i + 1));
        repeated.add(hash);
      }
    } else {
      seen.add(hash);
    }
  }

  return res;
}
