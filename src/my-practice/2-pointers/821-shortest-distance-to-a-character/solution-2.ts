export function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const res = new Array<number>(n);
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    res[i] = Math.abs(i - prev);
  }

  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    res[i] = Math.min(res[i], Math.abs(prev - i));
  }

  return res;
}

const s = 'loveleetcode',
  c = 'e';
console.log(shortestToChar(s, c));
