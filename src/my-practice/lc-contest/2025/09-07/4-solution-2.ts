// Time: sqrt(n)
export function countBinaryPalindromes(n: number): number {
  if (n == 0) return 1;
  if (n == 1) return 2;
  const limit = BigInt(n);
  let count = 0n;

  if (limit > 0n) count++;
  let prefix = 1n;
  while (true) {
    const odd = buildPalindrome(prefix, true);
    if (odd > limit) break;
    count++;

    const even = buildPalindrome(prefix, false);
    if (even <= limit) count++;

    prefix++;
  }

  return Number(count);
}

function buildPalindrome(p: bigint, odd: boolean): bigint {
  let res = p;
  let q = p;
  if (odd) q = q / 2n;

  while (q > 0n) {
    res = res * 2n + (q % 2n);
    q /= 2n;
  }
  return res;
}
