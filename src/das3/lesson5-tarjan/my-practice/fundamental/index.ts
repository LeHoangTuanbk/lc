export function tarjanBridgeAndArticulation(n: number, edges: [number, number][]) {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const num = Array(n).fill(-1);
  const low = Array(n).fill(-1);
  const isArticulation = Array(n).fill(false);
  const bridges: [number, number][] = [];

  let time = 0;

  function dfs(u: number, parent: number | null) {
    num[u] = low[u] = time++;
    let children = 0;

    for (const v of graph[u]) {
      if (v === parent) continue;
      if (num[v] !== -1) {
        low[u] = Math.min(low[u], num[v]);
      } else {
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
        // bridge
        if (low[v] > num[u]) {
          bridges.push([u, v]);
        }
        // articulation
        if (low[v] >= num[u] && parent !== null) {
          isArticulation[u] = true;
        }

        children++;
      }
    }

    if (parent === null && children > 1) {
      isArticulation[u] = true;
    }
  }

  for (let u = 0; u < n; u++) {
    if (num[u] === -1) {
      dfs(u, null);
    }
  }

  const articulationPoints = isArticulation
    .map((isCut, i) => (isCut ? i : -1))
    .filter((x) => x !== -1);

  return {
    bridges,
    articulationPoints,
  };
}

const g: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
];

const result = tarjanBridgeAndArticulation(5, g);
console.log('Bridges:', result.bridges); // [[1,3], [3,4]]
console.log('Articulation Points:', result.articulationPoints); // [1,3]
