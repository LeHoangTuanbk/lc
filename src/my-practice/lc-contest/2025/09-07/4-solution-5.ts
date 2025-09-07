export function countBinaryPalindromes(n: number | bigint): number {
  const limit = BigInt(n);

  if (limit === 0n) return 1;

  // dp[i] = số palindrome độ dài i
  const dp: bigint[] = Array(56).fill(0n);
  dp[1] = 1n;
  dp[2] = 1n;
  for (let i = 3; i <= 55; i++) {
    dp[i] = 2n * dp[i - 2];
  }

  const bitLength = limit.toString(2).length;

  let count = 1n; // tính số 0

  // Bước 1: đếm tất cả độ dài < bitLength
  for (let len = 1; len < bitLength; len++) {
    count += dp[len];
  }

  // Bước 2: đếm độ dài == bitLength
  const half = Math.floor((bitLength + 1) / 2);
  const start = 1n << BigInt(half - 1);
  const end = (1n << BigInt(half)) - 1n;

  let lo = start;
  let hi = end;
  let best = start - 1n;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1n;
    const pal = makePalindrome(mid, bitLength);

    if (pal <= limit) {
      best = mid;
      lo = mid + 1n;
    } else {
      hi = mid - 1n;
    }
  }

  if (best >= start) {
    count += best - start + 1n;
  }

  return Number(count);
}

// Dựng palindrome từ prefix p (bit count = half), và full length = len
function makePalindrome(p: bigint, len: number): bigint {
  let res = p;
  let q = len % 2 === 0 ? p : p >> 1n; // bỏ bit giữa nếu len lẻ

  while (q > 0n) {
    res = (res << 1n) | (q & 1n);
    q >>= 1n;
  }
  return res;
}
