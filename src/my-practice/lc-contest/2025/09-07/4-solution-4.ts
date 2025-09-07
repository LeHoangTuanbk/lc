function pow2(k: number) {
  return 1n << BigInt(k);
}

export function countBinaryPalindromes(n: number): number {
  if (n == 0) return 1;
  if (n == 1) return 2;
  const limit = BigInt(n);
  let ans = 1n;
  const s = limit.toString(2);
  const L = s.length;

  // num < L
  for (let len = 1; len <= L - 1; len++) {
    const half = Math.floor((len + 1) / 2);
    ans += pow2(half - 1);
  }

  // num.len = L
  const m = Math.floor((L + 1) / 2);
  const prefixStr = s.slice(0, m);
  const p = BigInt('0b' + prefixStr);
  const base = pow2(m - 1);

  // same length, prefix < p
  ans += p - base;

  // same length, prefix = p
  const pal = makePalindromeFromPrefix(p, m, L % 2 === 1);
  if (pal <= limit) ans += 1n;

  return Number(ans);
}

function makePalindromeFromPrefix(p: bigint, m: number, odd: boolean) {
  let res = p;
  let q = p;
  if (odd) q >>= 1n;

  while (q > 0n) {
    res = (res << 1n) + (q & 1n);
    q >>= 1n;
  }
  return res;
}

console.log(countBinaryPalindromes(9));
