export function hasAllCodes(s: string, k: number): boolean {
  const seen = new Set<number>();
  const need = 1 << k;
  let mask = 0;

  for (let i = 0; i < s.length; i++) {
    mask = ((mask << 1) & (need - 1)) | (s[i] === '1' ? 1 : 0);
    if (i >= k - 1) {
      seen.add(mask);
      if (seen.size === need) return true;
    }
  }

  return false;
}
