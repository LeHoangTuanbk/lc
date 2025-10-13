export function firstUniqChar(s: string): number {
  const map = new Array(26).fill(0);
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 97;
    map[idx]++;
  }

  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 97;
    if (map[idx] === 1) return i;
  }

  return -1;
}

const s = 'leetcode';
console.log(firstUniqChar(s));
