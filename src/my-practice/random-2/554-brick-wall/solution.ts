export function leastBricks(wall: number[][]): number {
  const n = wall.length;
  if (n === 1 && wall[0].length > 1) return 0;
  else if (n === 1) return 1;
  const map = new Map<number, Set<number>>();
  let maxWidth = 0;
  for (let i = 0; i < n; i++) {
    const row = wall[i];
    const prefixSum: number[] = [0];
    for (const width of row) {
      prefixSum.push(prefixSum.at(-1) + width);
    }
    maxWidth = prefixSum.at(-1);
    map.set(i, new Set(prefixSum.slice(1)));
  }

  let minCross = n;
  for (let i = 0; i < n; i++) {
    const widths = map.get(i);
    for (const w of widths) {
      if (w === maxWidth) continue;
      let cross = n - 1;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const widths2 = map.get(j);
        for (const w2 of widths2) {
          if (w2 === w) cross--;
        }
      }
      minCross = Math.min(minCross, cross);
    }
  }
  return minCross;
}
const wall = [[2147483646, 1]];
console.log(leastBricks(wall));
