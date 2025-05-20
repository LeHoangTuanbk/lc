export function canConstruct(ransomNote: string, magazine: string): boolean {
  const freqMagazine = new Map<string, number>();

  for (const c of magazine) {
    freqMagazine.set(c, (freqMagazine.get(c) ?? 0) + 1);
  }

  for (const c of ransomNote) {
    const fre = freqMagazine.get(c);
    if (!fre || fre < 1) {
      return false;
    }
    freqMagazine.set(c, fre - 1);
  }

  return true;
}
