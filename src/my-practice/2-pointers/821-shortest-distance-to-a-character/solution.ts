export function shortestToChar(s: string, c: string): number[] {
  const idxs: number[] = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      idxs.push(i);
    }
  }
  const m = idxs.length;
  let j = 0;
  const res: number[] = [];

  for (let i = 0; i < n; i++) {
    if (j < m - 1 && Math.abs(idxs[j + 1] - i) < Math.abs(idxs[j] - i)) {
      j++;
    }
    res.push(Math.abs(idxs[j] - i));
  }
  return res;
}

const s = 'loveleetcode',
  c = 'e';
console.log(shortestToChar(s, c));
