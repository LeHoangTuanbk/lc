export function sortItems(
  n: number,
  m: number,
  group: number[],
  beforeItems: number[][],
): number[] {
  // 1. Standardize the group
  let nextGroupId = m;
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      group[i] = nextGroupId++;
    }
  }

  // 2. graph for item and group
  const itemGraph: number[][] = Array.from({ length: n }, () => []);
  const itemInDegree: number[] = Array(n).fill(0);

  const groupGraph: number[][] = Array.from({ length: nextGroupId }, () => []);
  const groupInDegree: number[] = Array(nextGroupId).fill(0);

  // 3. Build graph
  for (let to = 0; to < n; to++) {
    for (const from of beforeItems[to]) {
      itemGraph[from].push(to);
      itemInDegree[to]++;
      if (group[from] !== group[to]) {
        groupGraph[group[from]].push(group[to]);
        groupInDegree[group[to]]++;
      }
    }
  }

  // 4. Topo sort
  const groupOrder = topoSort(groupGraph, groupInDegree.slice());
  const itemOrder = topoSort(itemGraph, itemInDegree.slice());

  if (!groupOrder || !itemOrder) return [];

  // 5. Gom item theo group and item order
  const groupToItems: Map<number, number[]> = new Map();
  for (const item of itemOrder) {
    const g = group[item];
    if (!groupToItems.has(g)) groupToItems.set(g, []);
    groupToItems.get(g).push(item);
  }

  // 6 . Theo thu tu group, noi cac item vao tung group result
  const result: number[] = [];
  for (const g of groupOrder) {
    if (groupToItems.has(g)) {
      result.push(...groupToItems.get(g));
    }
  }

  return result;
}

function topoSort(graph: number[][], inDegree: number[]): number[] | null {
  const q: number[] = [];
  const res: number[] = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) q.push(i);
  }

  while (q.length) {
    const u = q.shift()!;
    res.push(u);
    for (const v of graph[u]) {
      if (--inDegree[v] === 0) q.push(v);
    }
  }

  return res.length === graph.length ? res : null;
}

/* 
Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]

0 -1  []
1 -1  [6]
2 1   [5]
3 0   [6]
4 0   [3,6]
5 1   []
6 0   []
7 -1  []

{
}

group 0 > group 1 -> group ...
 */
const n = 8,
  m = 2,
  group = [-1, -1, 1, 0, 0, 1, 0, -1],
  beforeItems = [[], [6], [5], [6], [3, 6], [], [], []];

sortItems(n, m, group, beforeItems);
