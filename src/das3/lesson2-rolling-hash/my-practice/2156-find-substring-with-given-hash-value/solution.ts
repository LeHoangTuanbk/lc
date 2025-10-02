function subStrHash(
  s: string,
  power: number,
  modulo: number,
  k: number,
  hashValue: number,
): string {
  const n = s.length;
  let cur = 0n,
    pK = 1n;
  const target = BigInt(hashValue);
  const p = BigInt(power);
  const m = BigInt(modulo);

  for (let i = 0; i < k; i++) {
    pK = (pK * p) % m;
  }

  let resIndex = 0;

  for (let i = n - 1; i >= 0; i--) {
    const val = BigInt(s.charCodeAt(i) - 96);
    cur = (cur * p + val) % m;

    if (i + k < n) {
      const remove = ((BigInt(s.charCodeAt(i + k)) - 96n) * pK) % m;
      cur = (cur - remove + m) % m;
    }

    if (cur === target) {
      resIndex = i;
    }
  }

  return s.slice(resIndex, resIndex + k);
}
