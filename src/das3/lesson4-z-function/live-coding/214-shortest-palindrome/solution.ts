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

export function shortestPalindrome(s: string): string {
  const s2 = s + '#' + s.split('').reverse().join('');
  const z = zFunction(s2);
  const n = s.length;
  // abac#caba
  for (let i = n + 1; i <= 2 * n; i++) {
    if (z[i] === 2 * n - i + 1) {
      return s2.slice(n + 1, i) + s;
    }
  }
  return '';
}

const s = 'aacecaad';
const a = 'abcbad#dabcba';
console.log(shortestPalindrome(s));
