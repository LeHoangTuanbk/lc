export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const memo = new Array(n).fill(undefined);

  function dfs(start: number): boolean {
    if (start === n) return true;
    if (memo[start] !== undefined) return memo[start];
    for (let end = start + 1; end <= n; end++) {
      const word = s.slice(start, end);
      if (wordSet.has(word) && dfs(end)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  }

  return dfs(0);
}
