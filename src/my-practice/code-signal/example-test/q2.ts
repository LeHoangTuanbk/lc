export function countPatternMatches(pattern: string, source: string) {
  const n = source.length;
  const m = pattern.length;
  const vowels = 'aeiouy';
  let res = 0;
  for (let i = 0; i <= n - m; i++) {
    let isMatch = true;
    for (let j = 0; j < m; j++) {
      if (pattern[j] === '0' && !vowels.includes(source[i + j])) {
        isMatch = false;
        break;
      }

      if (pattern[j] === '1' && vowels.includes(source[i + j])) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) res++;
  }
  return res;
}
