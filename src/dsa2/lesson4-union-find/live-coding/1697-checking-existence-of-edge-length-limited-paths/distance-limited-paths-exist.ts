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

export function distanceLimitedPathsExist(
  n: number,
  edgeList: number[][],
  queries: number[][],
): boolean[] {
  const m = edgeList.length;
  edgeList.sort((a, b) => a[2] - b[2]);
  const q = queries.length;
  const queriesWithIndex = queries.map((q, i) => [...q, i]);
  queriesWithIndex.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);
  const results: boolean[] = Array(q).fill(false);

  let i = 0;
  for (const [p, q, limit, idx] of queriesWithIndex) {
    // union all edges < limit
    while (i < m && edgeList[i][2] < limit) {
      uf.union(edgeList[i][0], edgeList[i][1]);
      i++;
    }

    if (uf.find(p) === uf.find(q)) {
      results[idx] = true;
    }
  }

  return results;
}

/* 
Input: n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries = [[0,1,2],[0,2,5]]
Output: [false,true]
*/
