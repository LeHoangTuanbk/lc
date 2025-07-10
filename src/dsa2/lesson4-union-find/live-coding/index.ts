function maxNumEdgesToRemove(n: number, edges: number[][]): number {}

function distanceLimitedPathsExist(
  n: number,
  edgeList: number[][],
  queries: number[][],
): boolean[] {
  edgeList.sort((a, b) => a[2] - b[2]);
  const ql = queries.length;
  const qs: number[][] = Array.from({ length: ql }, () => Array(4));
  for (let i = 0; i < ql; i++) {
    qs[i][0] = queries[i][0];
    qs[i][1] = queries[i][1];
    qs[i][2] = queries[i][3];
    qs[i][3] = i;
  }

  qs.sort((a, b) => a[2] - b[2]);
  const par: number[] = Array(n);
  for (let i = 0; i < n; i++) {
    par[i] = i;
  }

  let idx = 0;
  const m = edgeList.length;

  const res: boolean[] = Array(ql);

  for (let i = 0; i < ql; i++) {
    const q: number[] = qs[i];
    for (; idx < m && edgeList[idx][2] < q[2]; idx++) {
      const p1 = find(edgeList[idx][0], par);
      const p2 = find(edgeList[idx][1], par);
      if (p1 <= p2) {
        par[p2] = p1;
      } else {
        par[p1] = p2;
      }
    }
    const p1 = find(q[0], par);
    const p2 = find(q[1], par);
    res[q[3]] = p1 === p2;
    return res;
  }

  function find(cur: number, par: number[]) {
    if (cur != par[cur]) {
      par[cur] = find(par[cur], par);
    }
    return par[cur];
  }
}

export function numIslands2(n: number, m: number, positions: Array<[number, number]>): number[] {
  const size = m * n;
  const par: number[] = Array(size).fill(-1);
  const dx: number[] = [-1, 0, 1, 0];
  const dy: number[] = [];

  let num = 0;
  const res: number[] = [];

  for (const pos of positions) {
    const x = pos[0];
    const y = pos[1];
    const idx = findIdx(x, y, n);
    if (par[idx] === idx) {
      res.push(num);
      continue;
    }
    num++;
    par[idx] = idx;
    for (let k = 0; k < 4; k++) {
      const u = x + dx[k];
      const v = y + dy[k];
      if (union(x, y, u, v, m, n, par)) {
        num--;
      }
    }
  }
}

function inside(u: number, v: number, m: number, n: number) {
  return u >= 0; //..
}

function union(x: number, y: number, u: number, v: number, m: number, n: number, par: number[]) {
  const idx = findIdx(x, y, n);
  const nIdx = findIdx(u, v, n);

  if (!inside(u, v, m, n) || par[nIdx] == -1) {
    return false;
  }
}

function findIdx(x: number, y: number, n: number) {
  return x * n + y;
}
