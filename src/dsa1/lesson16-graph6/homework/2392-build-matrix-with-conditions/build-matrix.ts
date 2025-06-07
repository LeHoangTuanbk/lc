export function buildMatrix(
  k: number,
  rowConditions: number[][],
  colConditions: number[][],
): number[][] {
  const rowOrder: number[] = topoSort(k, rowConditions);
  const columnOrder: number[] = topoSort(k, colConditions);
  if (!rowOrder.length || !columnOrder.length) return [];
  const res: number[][] = Array.from({ length: k }, () => Array(k).fill(0));
  /*
  1 3 2
  3 2 1

  0 0 1
  3 0 0 
  0 2 0
  */
  const position: Map<number, number[]> = new Map();
  for (let i = 0; i < k; i++) {
    position.set(rowOrder[i], [i]);
  }

  for (let i = 0; i < k; i++) {
    const temp = position.get(columnOrder[i]);
    temp.push(i);
  }

  for (const [key, value] of position.entries()) {
    const [x, y] = value;
    res[x][y] = key;
  }

  return res;
}

function topoSort(k: number, conditions: number[][]) {
  const inDegree: number[] = Array(k + 1).fill(0);
  const graph: number[][] = Array.from({ length: k + 1 }, () => []);

  let order: number[] = [];

  for (const [u, v] of conditions) {
    inDegree[v]++;
    graph[u].push(v);
  }

  const q: number[] = [];
  for (let i = 1; i < k + 1; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }
  while (q.length) {
    const cur = q.shift()!;
    order.push(cur);
    for (const v of graph[cur]) {
      inDegree[v]--;
      if (inDegree[v] == 0) {
        q.push(v);
      }
    }
  }
  return order.length < k ? [] : order;
}
