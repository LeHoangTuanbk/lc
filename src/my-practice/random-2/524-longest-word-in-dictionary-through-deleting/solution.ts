export function findLongestWord(s: string, dictionary: string[]): string {
  dictionary.sort((a, b) => b.length - a.length || a.localeCompare(b));

  for (const word of dictionary) {
    if (checkWord(word, s)) return word;
  }
  return '';
}

function checkWord(s1: string, s: string): boolean {
  const n = s1.length,
    m = s.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s1[i] === s[j]) {
      i++;
      j++;
    } else j++;
  }
  return i == n;
}

const s = 'abpcplea',
  dictionary = ['ale', 'apple', 'monkey', 'plea'];
console.log(findLongestWord(s, dictionary));
