// https://www.lintcode.com/problem/434/

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

const dirs: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

export function numIslands2(n: number, m: number, positions: Array<[number, number]>): number[] {
  const size = m * n;
  const uf = new UnionFind(size);
  const isLand = Array(size).fill(false);

  let count = 0;
  const res: number[] = [];
  for (const [x, y] of positions) {
    const idx = findIdx(x, y, m);
    if (isLand[idx]) {
      res.push(count);
      continue;
    }
    isLand[idx] = true;
    count++;

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      const nidx = findIdx(nx, ny, m);
      if (isLand[nidx]) {
        if (uf.union(idx, nidx)) {
          count--;
        }
      }
    }

    res.push(count);
  }
  return res;
}

function findIdx(x: number, y: number, m: number) {
  return x * m + y;
}
/* 
Example 1: 
Input: n = 4, m = 5, A = [[1,1],[0,1],[3,3],[3,4]]
Output: [1,1,2,2]
Explanation:
0.  00000
    00000
    00000
    00000
1.  00000
    01000
    00000
    00000
2.  01000
    01000
    00000
    00000
3.  01000
    01000
    00000
    00010
4.  01000
    01000
    00000
    00011

Example 2: 
Input: n = 3, m = 3, A = [[0,0],[0,1],[2,2],[2,1]]
Output: [1,1,2,2]
*/
