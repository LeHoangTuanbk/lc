export function minStickers(stickers: string[], target: string): number {
  const n = stickers.length;
  const counts: number[][] = Array.from({ length: n }, () => Array(26).fill(0));

  for (let i = 0; i < n; i++) {
    for (const ch of stickers[i]) {
      counts[i][ch.charCodeAt(0) - 97]++;
    }
  }

  const memo = new Map<string, number>();

  function dfs(rem: string): number {
    if (rem.length === 0) return 0;
    if (memo.has(rem)) return memo.get(rem);

    const need = Array(26).fill(0);
    for (const ch of rem) need[ch.charCodeAt(0) - 97]++;
    let ans = Infinity;

    const firstCharIndex = rem.charCodeAt(0) - 97;
    for (let i = 0; i < n; i++) {
      if (counts[i][firstCharIndex] === 0) continue;

      const newNeed = [...need];
      for (let c = 0; c < 26; c++) {
        if (newNeed[c] > 0 && counts[i][c] > 0) {
          newNeed[c] = Math.max(0, newNeed[c] - counts[i][c]);
        }
      }

      const nextRem = newNeed.map((cnt, i) => String.fromCharCode(97 + i).repeat(cnt)).join('');

      const sub = dfs(nextRem);
      if (sub !== -1) {
        ans = Math.min(ans, 1 + sub);
      }
    }

    memo.set(rem, ans === Infinity ? -1 : ans);

    return memo.get(rem);
  }

  return dfs(target);
}
