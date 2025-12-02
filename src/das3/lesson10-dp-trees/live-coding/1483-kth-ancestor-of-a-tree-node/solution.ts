export class TreeAncestor {
  nMax: number = 50002;
  mMax: number = 20;
  ancestor: number[][] = Array.from({ length: this.nMax }, () => Array(this.mMax).fill(-1));
  constructor(n: number, parent: number[]) {
    for (let i = 0; i < n; i++) {
      this.ancestor[i][0] = parent[i];
    }
    for (let j = 1; j < this.mMax; j++) {
      for (let i = 0; i < n; i++) {
        const u = this.ancestor[i][j - 1];
        if (u != -1) this.ancestor[i][j] = this.ancestor[u][j - 1];
      }
    }
  }

  getKthAncestor(node: number, k: number): number {
    // ancestor[i][j] = ancestor[ancestor[i][j-1]][1] => Also O(n2)
    for (let i = 0; i < this.mMax && node != -1; i++) {
      if ((k >> i) & 1) {
        node = this.ancestor[node][i];
      }
    }
    return node;
  }
}
