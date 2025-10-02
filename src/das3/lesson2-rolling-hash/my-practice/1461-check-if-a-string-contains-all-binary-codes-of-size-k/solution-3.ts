export function hasAllCodes(s: string, k: number): boolean {
  const seen = new Set<string>();
  const need = 1 << k;

  for (let i = 0; i <= s.length - k; i++) {
    const subString = s.slice(i, i + k);
    seen.add(subString);
    if (seen.size === need) return true;
  }

  return false;
}
