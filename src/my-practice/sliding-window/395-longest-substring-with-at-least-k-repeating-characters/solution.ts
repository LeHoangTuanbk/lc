export function longestSubstring(s: string, k: number): number {
  if (s.length < k) return 0;

  const freq = new Map<string, number>();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i])! < k) {
      const left = longestSubstring(s.slice(0, i), k);
      const right = longestSubstring(s.slice(i + 1), k);
      return Math.max(left, right);
    }
  }

  return s.length;
}

const s = 'aaabb',
  k = 3;
console.log(longestSubstring(s, k)); // 3
