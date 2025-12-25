export function zFunction(s: string) {
  const n = s.length;
  const z = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    z[i] = 0;
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
  }
  return z;
}

export function zFunction2(s: string) {
  const n = s.length;
  const z = Array(n).fill(0);
  let l = 0,
    r = 0;

  for (let i = 1; i < n; i++) {
    if (r >= i) {
      z[i] = Math.min(z[i - l], r - i + 1);
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;

    // i -> i + z[i] - 1
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}

export function findPattern(pattern: string, s: string) {
  const newS = pattern + '#' + s;
  const z = zFunction2(newS);
  const n = pattern.length,
    m = newS.length;
  const res: number[] = [];
  for (let i = n + 1; i < m; i++) {
    if (z[i] === n) {
      res.push(i - n - 1);
    }
  }
  return res;
}
const s = 'aaaabaaab';
const pattern = 'ab';
// const z = zFunction(s);
// const z2 = zFunction2(s);
// console.log(z);
// console.log(z2);
console.log(findPattern(pattern, s));

/* 
Homeowrk 1: 
https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/submissions/1107736107/

*/
const a = '0123';
console.log(a[10]);
