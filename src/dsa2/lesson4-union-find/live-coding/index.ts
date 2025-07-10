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
    res.push;
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
