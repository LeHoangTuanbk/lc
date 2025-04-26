// Time : O(m/k ^ (k/log(9k)))
export function digitSum(s: string, k: number): string {
  if (s.length <= k) return s;
  let res = '';
  for (let i = 0; i < s.length; i += k) {
    res += sum3StringDigit(s.slice(i, i + k), k);
  }
  if (res.length <= k) return res;
  else return digitSum(res, k);
}

function sum3StringDigit(s: string, k: number): string {
  return s
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0)
    .toString();
}
