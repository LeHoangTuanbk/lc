export function minimumSteps(s: string): number {
  let res = 0;
  const n = s.length;
  let numberOfZeros = 0;
  for (let j = n - 1; j >= 0; j--) {
    if (s[j] === '0') {
      numberOfZeros++;
    } else {
      res += numberOfZeros;
    }
  }
  return res;
}

const s = '1100';
console.log(minimumSteps(s));
