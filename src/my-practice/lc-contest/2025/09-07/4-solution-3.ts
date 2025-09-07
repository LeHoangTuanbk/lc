export function countBinaryPalindromes(n: number): number {
  if (n == 0) return 1;
  if (n == 1) return 2;
  const limit = BigInt(n);
  let count = 0n;
  if (limit > 0n) count++;

  const maxBits = limit.toString(2).length;

  for (let len = 1; len <= maxBits; len++) {
    const halfLen = Math.floor((len + 1) / 2);
    const start = 1 << (halfLen - 1);
    const end = 1 << halfLen;

    for (let prefix = start; prefix < end; prefix++) {
      let res = BigInt(prefix);
      let y = prefix;
      if (len % 2 === 1) y >>= 1;

      while (y > 0) {
        res = (res << 1n) | BigInt(y & 1);
        y >>= 1;
      }

      if (res <= limit) count++;
    }
  }
  return Number(count);
}
