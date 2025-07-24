export function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  let sb = '';
  function dfs(idx: number, n: number, openCount: number, sb: string) {
    if (idx >= n) {
      if (openCount === 0) {
        res.push(sb);
      }
      return;
    }

    // choose "("
    if (openCount < n - idx) {
      sb += '(';
      dfs(idx + 1, n, openCount + 1, sb);
      // slice
      sb.length = sb.length - 1;
    }

    // choose ")"
    if (openCount > 0) {
      sb += ')';
      dfs(idx + 1, n, openCount - 1, sb);
      sb.length = sb.length - 1;
    }
  }

  dfs(0, 2 * n, 0, sb);
  return res;
}
