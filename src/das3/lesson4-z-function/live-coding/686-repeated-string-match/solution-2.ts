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

function find(s: string, pattern: string): number {
  const s2 = pattern + '#' + s;
  const z = zFunction(s2);
  const n = pattern.length,
    m = s.length;
  for (let i = n + 1; i < m + n + 1; i++) {
    if (z[i] == n) {
      return i - n - 1;
    }
  }
  return -1;
}

export function repeatedStringMatch(a: string, b: string): number {
  const minRepeat = Math.ceil(b.length / a.length);
  for (let k = minRepeat; k <= minRepeat + 2; k++) {
    const repeatedString = a.repeat(k);
    if (find(repeatedString, b) !== -1) {
      return k;
    }
  }
  return -1;
}

const a = 'abcd',
  b = 'cdabcdab';

// const a = 'a',
//   b = 'aa';

console.log(repeatedStringMatch(a, b));
