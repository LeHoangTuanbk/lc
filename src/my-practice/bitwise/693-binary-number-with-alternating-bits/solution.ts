export function hasAlternatingBits2(n: number): boolean {
  const a = 0b01010101010101010101010101010101,
    b = 0b10101010101010101010101010101010;
  if ((n & a) == n || (n & b) == n) {
    return true;
  }
  return false;
}
function hasAlternatingBits4(n: number): boolean {
  let lastBits = n & 1;
  n = n >> 1;
  while (n > 0) {
    const nextLastBits = n & 1;
    if (Boolean(lastBits) === Boolean(nextLastBits)) {
      return false;
    }
    lastBits = nextLastBits;
    n = n >> 1;
  }
  return true;
}
export function hasAlternatingBits(n: number): boolean {
  const x = n ^ (n >> 1);
  return (x & (x + 1)) === 0;
}
