export function lastRemaining(n: number): number {
  if (n === 1) return 1;
  return 2 * (1 + Math.floor(n / 2) - lastRemaining(Math.floor(n / 2)));
}
