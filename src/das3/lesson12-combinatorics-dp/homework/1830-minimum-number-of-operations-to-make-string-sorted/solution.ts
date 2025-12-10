const MOD = 1000000007n;

function modPowBig(a: bigint, e: number): bigint {
  let base = a % MOD;
  let exp = BigInt(e);
  let res = 1n;
  while (exp > 0n) {
    if ((exp & 1n) === 1n) res = (res * base) % MOD;
    base = (base * base) % MOD;
    exp >>= 1n;
  }
  return res;
}

function prepareFactorials(maxN: number) {
  const fact: bigint[] = new Array(maxN + 1);
  const invFact: bigint[] = new Array(maxN + 1);
  fact[0] = 1n;
  for (let i = 1; i <= maxN; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  invFact[maxN] = modPowBig(fact[maxN], Number(MOD - 2n));
  for (let i = maxN - 1; i >= 0; i--) {
    invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
  }
  return { fact, invFact };
}

export function makeStringSorted(s: string): number {
  const n = s.length;
  const { fact, invFact } = prepareFactorials(n);

  const freq = Array(26).fill(0);
  for (const ch of s) freq[ch.charCodeAt(0) - 97]++;

  function computeDenominator(): bigint {
    let res = 1n;
    for (let f of freq) {
      if (f > 0) res = (res * invFact[f]) % MOD;
    }
    return res;
  }

  let ans = 0n;
  for (let i = 0; i < n; i++) {
    /* 
    // Xét tất cả cách chọn chữ NHỎ HƠN s[i] ở vị trí i
    // Mỗi cách đó sinh ra một nhóm hoán vị ĐỨNG TRƯỚC hoán vị s trong thứ tự từ điển
    // Cộng số lượng hoán vị đó vào ans
    // Sau đó cố định s[i] thật sự (freq[cur]--)
    */

    const cur = s.charCodeAt(i) - 97;
    for (let c = 0; c < cur; c++) {
      if (freq[c] === 0) continue;

      freq[c]--;
      const ways = (fact[n - i - 1] * computeDenominator()) % MOD;
      ans = (ans + ways) % MOD;
      freq[c]++;
    }
    freq[cur]--;
  }

  return Number(ans);
}
