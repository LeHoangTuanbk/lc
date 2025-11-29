class TreeAncestor {
  private up: number[][];
  private LOG: number;
  private n: number;
  constructor(n: number, parent: number[]) {
    this.n = n;
    this.LOG = Math.ceil(Math.log2(n) + 1);
    this.up = Array.from({ length: n }, () => Array(this.LOG).fill(-1));

    for (let i = 0; i < n; i++) {
      this.up[i][0] = parent[i];
    }

    for (let j = 1; j < this.LOG; j++) {
      for (let i = 0; i < n; i++) {
        const mid = this.up[i][j - 1];
        this.up[i][j] = mid === -1 ? -1 : this.up[mid][j - 1];
      }
    }
  }

  getKthAncestor(node: number, k: number): number {
    for (let j = 0; j < this.LOG; j++) {
      if (k & (1 << j)) {
        node = this.up[node][j];
        if (node === -1) return -1;
      }
    }
    return node;
  }
}

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
