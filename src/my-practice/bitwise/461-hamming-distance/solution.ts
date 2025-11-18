export function hammingDistance(x: number, y: number): number {
  let z = x ^ y;
  let count = 0;
  while (z > 0) {
    count += z & 1;
    z = z >> 1;
  }
  return count;
}
