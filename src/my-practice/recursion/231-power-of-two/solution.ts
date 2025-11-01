export function isPowerOfTwo(n: number): boolean {
  const log = Math.log2(n);

  return log % 1 === 0;
}
