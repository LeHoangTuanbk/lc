export function findTheWinner(n: number, k: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = (res + k) % i;
  }
  return res + 1;
}
