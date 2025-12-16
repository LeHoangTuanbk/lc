export function zFunction(s: string) {
  const n = s.length;
  const z = Array(n).fill(0);
  let l = 0,
    r = 0;

  for (let i = 1; i < n; i++) {
    if (r >= i) {
      z[i] = Math.min(z[i - l], r - i + 1);
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;

    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}

function longestPrefix(s: string): string {
  const z = zFunction(s);
  const n = s.length;
  //z[i] = n - i => happy prefix
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (z[i] === n - i) {
      res = Math.max(res, z[i]);
    }
  }

  return s.slice(0, res);
}
