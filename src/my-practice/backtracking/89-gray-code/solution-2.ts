export function grayCode(n: number): number[] {
  const res: number[] = [0];
  for (let i = 0; i < n; i++) {
    const add = 1 << i;
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(res[j] | add);
    }
  }
  return res;
}
