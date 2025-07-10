class UnionFind {
  parent: number[];
  size: number[];
  count: number;
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array(n).fill(1);
    this.count = n;
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
    this.count--;

    return true;
  }

  isConnected(): boolean {
    return this.count === 1;
  }
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  const ufAlice = new UnionFind(n);
  const ufBob = new UnionFind(n);

  let usedEdges = 0;

  // Step 1: use type 3
  for (const [edgeType, u, v] of edges) {
    if (edgeType === 3) {
      const usedA = ufAlice.union(u, v);
      const usedB = ufBob.union(u, v);
      if (usedA || usedB) usedEdges++;
    }
  }

  // Alice
  for (const [edgeType, u, v] of edges) {
    if (edgeType === 1) {
      if (ufAlice.union(u, v)) usedEdges++;
    }
  }

  // Bob
  for (const [edgeType, u, v] of edges) {
    if (edgeType === 2) {
      if (ufBob.union(u, v)) usedEdges++;
    }
  }

  if (!ufAlice.isConnected() || !ufBob.isConnected()) return -1;

  return edges.length - usedEdges;
}

/* 
Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
Output: 2
Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.
*/
