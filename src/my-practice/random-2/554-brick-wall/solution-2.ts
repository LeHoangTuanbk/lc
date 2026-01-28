export function leastBricks(wall: number[][]): number {
  const edgeCount = new Map<number, number>();

  for (const row of wall) {
    let sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i];
      edgeCount.set(sum, (edgeCount.get(sum) ?? 0) + 1);
    }
  }

  let maxEdges = 0;
  for (const count of edgeCount.values()) {
    maxEdges = Math.max(maxEdges, count);
  }

  return wall.length - maxEdges;
}
const wall = [[2147483646, 1]];
console.log(leastBricks(wall));
