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

        for (let j = l; j <= r; j++) {
          if (s[j] === c) {
            const left = solve(l, j - 1);
            const right = solve(j + 1, r);
            return Math.max(left, right);
          }
        }
      }
    }

    return r - l + 1;
  }

  return solve(0, s.length - 1);
}

const s = 'aaabb',
  k = 3;
console.log(longestSubstring(s, k));
