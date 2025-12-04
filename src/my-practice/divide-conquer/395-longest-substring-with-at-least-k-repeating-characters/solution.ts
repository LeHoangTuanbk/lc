export function longestSubstring(s: string, k: number): number {
  function solve(l: number, r: number): number {
    if (r - l + 1 < k) return 0;

    const freq = Array(26).fill(0);

    for (let i = l; i <= r; i++) {
      freq[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0 && freq[i] < k) {
        const c = String.fromCharCode(i + 97);
        let maxLen = 0;
        let start = l;

        for (let j = l; j <= r; j++) {
          if (s[j] === c) {
            maxLen = Math.max(maxLen, solve(start, j - 1));
            start = j + 1;
          }
        }

        maxLen = Math.max(maxLen, solve(start, r));
        return maxLen;
      }
    }

    return r - l + 1;
  }

  return solve(0, s.length - 1);
}
