export function findAnagrams(s: string, p: string): number[] {
  // calculate freq of c in p
  const cFreqInP = calculateFreq(p);
  const pLength = p.length;
  const windowFreqS = calculateFreq(s.slice(0, pLength));

  // sliding window, size p = length => check the same freq
  const res: number[] = [];
  if (checkAnagrams(windowFreqS, cFreqInP)) res.push(0);
  for (let i = 1; i <= s.length - pLength; i++) {
    const outChar = s[i - 1];
    const inChar = s[i + pLength - 1];

    const outCharCount = windowFreqS.get(outChar);
    if (outCharCount == 1) {
      windowFreqS.delete(outChar);
    } else {
      windowFreqS.set(outChar, outCharCount - 1);
    }

    windowFreqS.set(inChar, (windowFreqS.get(inChar) ?? 0) + 1);

    if (checkAnagrams(windowFreqS, cFreqInP)) {
      res.push(i);
    }
  }

  return res;
}

function calculateFreq(s: string) {
  const freq = new Map<string, number>();
  for (const c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }
  return freq;
}

function checkAnagrams(freq1: Map<string, number>, freq2: Map<string, number>): boolean {
  if (freq1.size !== freq2.size) return false;
  for (const [key, value] of freq1.entries()) {
    if (freq2.get(key) !== value) return false;
  }

  return true;
}

const s = 'cbaebabacd',
  p = 'abc';

console.log(findAnagrams(s, p));

/* 
Example 1:

Input: s = "c bae babacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/
