export function wordPattern(pattern: string, s: string): boolean {
  const sArray = s.split(' ');
  const sPattern = new Map<string, string>();
  const patternS = new Map<string, string>();
  const n = sArray.length,
    m = pattern.length;
  if (n !== m) return false;
  for (let i = 0; i < n - m + 1; i++) {
    for (let j = 0; j < m; j++) {
      const wordS = sArray[i + j];
      const cPattern = pattern[j];
      if (
        (sPattern.get(wordS) && !patternS.get(cPattern)) ||
        (!sPattern.get(wordS) && patternS.get(cPattern))
      ) {
        return false;
      }

      if (!sPattern.get(wordS) && !patternS.get(cPattern)) {
        sPattern.set(wordS, cPattern);
        patternS.set(cPattern, wordS);
        continue;
      }

      if (sPattern.get(wordS) !== cPattern) {
        return false;
      }
    }
  }
  return true;
}
const pattern = 'abba',
  s = 'dog cat cat dog';
console.log(wordPattern(pattern, s));
