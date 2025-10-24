export function hasSameDigits(s: string): boolean {
  let arr = s.split('').map(Number);
  while (arr.length > 2) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      arr[i] = (arr[i] + arr[i + 1]) % 10;
    }
    arr.length = n - 1;
  }

  return arr[0] === arr[1];
}
const s = '3902';
console.log(hasSameDigits(s));
