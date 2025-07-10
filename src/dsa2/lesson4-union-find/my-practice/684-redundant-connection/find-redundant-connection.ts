class UnionFind {
  parent: number[];
  size: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array(n).fill(1);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.size[rootX] < this.size[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.parent[rootY] = rootX;
    this.size[rootX] += this.size[rootY];

    return true;
  }
}

export function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length;
  const unionFind = new UnionFind(n);
  for (const [u, v] of edges) {
    if (!unionFind.union(u - 1, v - 1)) {
      return [u, v];
    }
  }
}
