export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n == 1) return [0];
  const inDegree: number[] = Array(n).fill(0);
  const graph: Map<number, number[]> = new Map();
  for (const [u, v] of edges) {
    inDegree[u]++;
    inDegree[v]++;
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }
  let leaves: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 1) {
      leaves.push(i);
    }
  }
  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    const newLeaves: number[] = [];
    for (const leaf of leaves) {
      for (const v of graph.get(leaf)) {
        inDegree[v]--;
        if (inDegree[v] == 1) {
          newLeaves.push(v);
        }
      }
    }
    leaves = newLeaves;
  }
  return leaves;
}

/*
     3
/   / \ \
0  1  2  4
          \
           5


q = 0, 1, 2, 4, 5

graph 3 , 4


    1
  / | \
 0  2  3

*/

const n = 6,
  edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ];
const expectedOutput = [1];
console.log(findMinHeightTrees(n, edges));
