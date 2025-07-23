export function maxVowels(s: string, k: number): number {
  const englishVowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
  let maxNumberVowels = 0,
    maxCurrentVowels = 0;
  const n = s.length;
  for (let end = 0; end < n; end++) {
    if (englishVowels.has(s[end])) {
      maxCurrentVowels++;
    }
    if (end >= k - 1) {
      maxNumberVowels = Math.max(maxNumberVowels, maxCurrentVowels);
      if (englishVowels.has(s[end - k + 1])) {
        maxCurrentVowels--;
      }
    }
  }
  return maxNumberVowels;
}

export function maxVowels2(s: string, k: number): number {
  const englishVowels = 'aiueo';
  const englishVowelsArray = new Array(26).fill(0);
  for (const v of englishVowels) {
    englishVowelsArray[v.charCodeAt(0) - 97] = 1;
  }

  let maxNumberVowels = 0,
    maxCurrentVowels = 0;
  const n = s.length;
  for (let end = 0; end < n; end++) {
    if (englishVowelsArray[s[end].charCodeAt(0) - 97]) {
      maxCurrentVowels++;
    }
    if (end >= k - 1) {
      maxNumberVowels = Math.max(maxNumberVowels, maxCurrentVowels);
      if (englishVowelsArray[s[end - k + 1].charCodeAt(0) - 97]) {
        maxCurrentVowels--;
      }
    }
  }
  return maxNumberVowels;
}

const s = 'abciiidef',
  k = 3;
console.log(maxVowels2(s, k));
