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

export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  let res = n;
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        if (uf.union(i, j)) {
          res--;
        }
      }
    }
  }
  return res;
}
