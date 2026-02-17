function minSteps(n: number): number {
  let res = 0;
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      res += d;
      n /= d;
    }
    d++;
  }
  return res;
}
