class DSU {
  parent: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(u: number) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  union(u: number, v: number): boolean {
    const pu = this.find(u);
    const pv = this.find(v);
    if (pu === pv) return false;
    this.parent[pu] = pv;
    return true;
  }
}

export function kruskal(n: number, edges: number[][], skip: number = -1, force: number = -1) {
  let totalCost = 0;
  const dsu = new DSU(n);
  let count = 0;

  if (force !== -1) {
    const [u, v, w] = edges[force];
    dsu.union(u, v);
    count++;
    totalCost += w;
  }

  for (let i = 0; i < edges.length; i++) {
    if (i === skip || i === force) continue;
    const [u, v, w] = edges[i];
    if (dsu.union(u, v)) {
      totalCost += w;
      count++;
      if (count === n - 1) return totalCost;
    }
  }

  return count === n - 1 ? totalCost : Infinity;
}

export function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  edges = edges.map((item, i) => [...item, i]);
  edges.sort((a, b) => a[2] - b[2]);
  const critical: number[] = [];
  const pseudoCritical: number[] = [];
  const baseCost = kruskal(n, edges);
  console.log(baseCost);
  const m = edges.length;

  for (let i = 0; i < m; i++) {
    // critical
    const cost = kruskal(n, edges, i);
    if (cost !== baseCost) {
      critical.push(edges[i][3]);
      continue;
    }

    //pseudo critical
    const costForce = kruskal(n, edges, -1, i);
    if (costForce == baseCost) {
      pseudoCritical.push(edges[i][3]);
    }
  }

  return [critical, pseudoCritical];
}

const n = 5,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 2],
    [0, 3, 2],
    [0, 4, 3],
    [3, 4, 3],
    [1, 4, 6],
  ];
console.log(findCriticalAndPseudoCriticalEdges(n, edges));
