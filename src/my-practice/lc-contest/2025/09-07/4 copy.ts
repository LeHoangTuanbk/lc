export function countBinaryPalindromes(n: number | bigint): number {
  const limit = BigInt(n); // theo yêu cầu đề
  if (limit === 0n) return 1; // "0"
  // 1) cộng trước số 0
  let ans = 1n;

  const s = limit.toString(2);
  const L = s.length;

  // helper: 2^k (BigInt)
  const pow2 = (k: number) => 1n << BigInt(k);

  // 2) cộng tất cả độ dài < L
  for (let len = 1; len <= L - 1; len++) {
    const half = Math.floor((len + 1) / 2); // ceil(len/2)
    ans += pow2(half - 1); // 2^{half-1}
  }

  // 3) độ dài = L
  const m = Math.floor((L + 1) / 2); // ceil(L/2)
  const prefixStr = s.slice(0, m); // m bit cao nhất của n
  const p = BigInt('0b' + prefixStr);
  const base = pow2(m - 1); // 2^{m-1}

  // số palindrome cùng độ dài nhưng prefix < p
  ans += p - base;

  // dựng palindrome từ prefix p (theo parity của L), rồi so với n, cung prefix voi n
  const pal = makePalindromeFromPrefix(p, m, L % 2 === 1);
  if (pal <= limit) ans += 1n;

  return Number(ans);
}

// Dựng palindrome (nhị phân) từ prefix p có m bit.
// odd=true: nối gương nhưng bỏ bit giữa; odd=false: nối gương đầy đủ.
function makePalindromeFromPrefix(p: bigint, m: number, odd: boolean): bigint {
  let res = p;
  let q = p;
  if (odd) q >>= 1n; // bỏ bit giữa

  while (q > 0n) {
    res = (res << 1n) | (q & 1n);
    q >>= 1n;
  }
  return res;
}

const n = 34359738367;
console.log(countBinaryPalindromes(n));
