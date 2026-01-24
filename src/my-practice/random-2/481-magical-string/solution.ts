export function magicalString(n: number): number {
  if (n <= 0) return 0;
  if (n <= 3) return 1;

  const s: number[] = [1, 2, 2];
  let i = 2;
  let current = 1;

  while (s.length < n) {
    const count = s[i];
    for (let k = 0; k < count && s.length < n; k++) {
      s.push(current);
    }
    current = current === 1 ? 2 : 1;
    i++;
  }
  let ones = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 1) ones++;
  }
  return ones;
}
