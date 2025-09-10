export function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  const n = s.length,
    k = p.length;
  if (n < k) return res;

  const aCode = 'a'.charCodeAt(0);
  const sFreq = new Array(26).fill(0);
  const pFreq = new Array(26).fill(0);

  for (let i = 0; i < k; i++) {
    pFreq[p.charCodeAt(i) - aCode]++;
    sFreq[s.charCodeAt(i) - aCode]++;
  }

  if (isSameFreq(sFreq, pFreq)) res.push(0);

  for (let i = k; i < n; i++) {
    sFreq[s.charCodeAt(i - k) - aCode]--; // remove outChar
    sFreq[s.charCodeAt(i) - aCode]++; // add inChar

    if (isSameFreq(sFreq, pFreq)) res.push(i - k + 1);
  }

  return res;
}

function isSameFreq(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
