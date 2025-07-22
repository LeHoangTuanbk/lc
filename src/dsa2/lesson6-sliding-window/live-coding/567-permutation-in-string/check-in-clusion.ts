export function checkInclusion(s1: string, s2: string): boolean {
  const n1 = s1.length,
    n2 = s2.length;
  let start = 0;
  for (let i = n1 - 1; i < n2; i++) {
    const subS2 = s2.slice(start, i + 1);
    if (isPermutation(s1, subS2)) {
      return true;
    }
    start++;
  }
  return false;
}

function isPermutation(s1: string, subS2: string): boolean {
  const count: Record<string, number> = {};
  for (const c of s1) {
    count[c] = (count[c] ?? 0) + 1;
  }

  for (const c of subS2) {
    if (!count[c]) {
      return false;
    } else {
      count[c]--;
    }
  }

  return true;
}
/* 
Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

*/

function checkInclusion2(s1: string, s2: string): boolean {
  const n1 = s1.length,
    n2 = s2.length;
  if (n1 > n2) return false;

  const count1: Record<string, number> = {};
  const count2: Record<string, number> = {};

  for (let c of s1) {
    count1[c] = (count1[c] ?? 0) + 1;
  }

  for (let i = 0; i < n1; i++) {
    const c = s2[i];
    count2[c] = (count2[c] ?? 0) + 1;
  }

  if (isEqual(count1, count2)) return true;

  for (let i = n1; i < n2; i++) {
    const add = s2[i];
    const remove = s2[i - n1];

    count2[add] = (count2[add] ?? 0) + 1;
    count2[remove]--;

    if (count2[remove] === 0) delete count2[remove];
    if (isEqual(count1, count2)) return true;
  }

  return false;
}

// Max: O(26)
function isEqual(a: Record<string, number>, b: Record<string, number>): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (let key in a) {
    if (a[key] != b[key]) return false;
  }

  return true;
}

function checkInclusion3(s1: string, s2: string): boolean {
  const n1 = s1.length,
    n2 = s2.length;
  if (n1 > n2) return false;
  const aCode = 'a'.charCodeAt(0);
  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  for (let i = 0; i < n1; i++) {
    count1[s1.charCodeAt(i) - aCode]++;
    count2[s2.charCodeAt(i) - aCode]++;
  }

  if (checkArraysEqual(count1, count2)) return true;
  for (let i = n1; i < n2; i++) {
    count2[s2.charCodeAt(i) - aCode]++;
    count2[s2.charCodeAt(i - n1) - aCode]--;
    if (checkArraysEqual(count1, count2)) return true;
  }

  return false;
}

function checkArraysEqual(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function checkInclusion4(s1: string, s2: string): boolean {
  const n = s1.length,
    m = s2.length;
  if (n > m) return false;

  const cnt: Record<string, number> = {};
  let diff = 0;

  for (const c of s1) {
    cnt[c] = (cnt[c] ?? 0) + 1;
    if (cnt[c] === 1) diff++;
  }

  for (let i = 0; i < n - 1; i++) {
    const c = s2[i];
    cnt[c] = (cnt[c] ?? 0) - 1;
    if (cnt[c] === 0) diff--;
    else if (cnt[c] === -1) diff++;
  }

  for (let i = 0; i + n - 1 < m; i++) {
    const inChar = s2[i + n - 1];
    cnt[inChar] = (cnt[inChar] ?? 0) - 1;
    if (cnt[inChar] === 0) diff--;
    else if (cnt[inChar] === -1) diff++;

    if (diff === 0) return true;

    const outChar = s2[i];
    cnt[outChar] = (cnt[outChar] ?? 0) + 1;
    if (cnt[outChar] === 1) diff++;
    else if (cnt[outChar] === 0) diff--;
  }

  return false;
}
