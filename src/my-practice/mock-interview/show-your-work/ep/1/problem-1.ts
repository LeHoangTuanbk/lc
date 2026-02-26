export function findTheLongestSubstring(s: string): number {
  const n = s.length;
  let i = 0,
    j = 0;
  const set = new Set<string>();
  let maxLength = 0;
  while (j < n) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return maxLength;
}
