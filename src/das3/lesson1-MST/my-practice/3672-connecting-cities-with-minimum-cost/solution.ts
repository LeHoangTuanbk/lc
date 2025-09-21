export type Edge = [u: number, v: number, w: number];

class DSU {
  parent: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(u: number): number {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  union(u: number, v: number) {
    const pu = this.find(u);
    const pv = this.find(v);

    if (pu === pv) return false;
    this.parent[pu] = pv;
    return true;
  }
}

export function minimumCostToConnectCities(n: number, edges: Edge[]) {
  edges.sort((a, b) => a[2] - b[2]);

  const dsu = new DSU(n);
  let total = 0;
  let count = 0;

  for (const [u, v, w] of edges) {
    if (dsu.union(u, v)) {
      total += w;
      count++;
      if (count === n - 1) break;
    }
  }

  return count === n - 1 ? total : -1;
}
