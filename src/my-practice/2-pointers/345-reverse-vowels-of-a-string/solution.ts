export function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U']);
  const vowelsInS = [];
  for (const c of s) {
    if (vowels.has(c)) {
      vowelsInS.push(c);
    }
  }
  let i = vowelsInS.length - 1,
    res = Array<string>();
  for (let j = 0; j < s.length; j++) {
    if (vowels.has(s[j])) {
      res.push(vowelsInS[i]);
      i--;
    } else res.push(s[j]);
  }

  return res.join('');
}

const s = 'IceCreAm';
console.log(reverseVowels(s));
