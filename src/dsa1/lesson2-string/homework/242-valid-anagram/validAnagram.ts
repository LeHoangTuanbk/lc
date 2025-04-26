export default function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  const table: number[] = new Array(26).fill(0);

  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    table[s.charCodeAt(i) - aCharCode]++;
  }

  for (let i = 0; i < t.length; i++) {
    table[t.charCodeAt(i) - aCharCode]--;
    if (table[t.charCodeAt(i) - aCharCode] < 0) {
      return false;
    }
  }

  return true;
}
