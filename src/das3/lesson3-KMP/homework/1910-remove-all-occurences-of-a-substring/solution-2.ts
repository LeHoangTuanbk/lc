function kmpSearch(s: string, pattern: string) {
  const s2 = pattern + '#' + s;
  const l1 = pattern.length,
    l2 = s.length;
  const l = s2.length;
  const kmpTable = Array(l).fill(0);
  for (let i = 1, j = 0; i < l; i++) {
    while (j > 0 && s2[i] !== s2[j]) {
      j = kmpTable[j - 1];
    }
    if (s2[i] === s2[j]) {
      kmpTable[i] = ++j;
    }
    if (i > l1 && kmpTable[i] === l1) {
      return i - l1 - 1;
    }
  }
  return -1;
}

function replaceString(s: string, part: string, endIndex: number) {
  const n = part.length;
  return s.slice(0, endIndex - n + 1) + s.slice(endIndex + 1);
}

export function removeOccurrences(s: string, part: string): string {
  let foundIdex = kmpSearch(s, part);
  while (foundIdex !== -1) {
    s = replaceString(s, part, foundIdex);
    foundIdex = kmpSearch(s, part);
  }
  return s;
}
const s = 'daabcbaabcbc',
  part = 'abc';

console.log(removeOccurrences(s, part));
