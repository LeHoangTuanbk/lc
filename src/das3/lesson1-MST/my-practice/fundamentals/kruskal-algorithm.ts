type Edge = [u: number, v: number, weight: number];

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

  union(u: number, v: number): boolean {
    const pu = this.find(u);
    const pv = this.find(v);
    if (pu === pv) return false;
    this.parent[pu] = pv;
    return true;
  }
}

export function kruskalMST(n: number, edges: Edge[]): number {
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

  return count === n - 1 ? total : Infinity;
}

const edges: [number, number, number][] = [
  [0, 1, 4],
  [0, 2, 3],
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 4],
  [3, 4, 2],
  [4, 5, 6],
];

const n = 6; // 6 nodes from 0 to 5

console.log(kruskalMST(n, edges));
