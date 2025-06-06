export function alienOrder(words: string[]) {
  const N = 26;
  const aUniCode = 'a'.charCodeAt(0);

  const graph: number[][] = Array.from({ length: N }, () => []);
  const exists: boolean[] = Array(N).fill(false);

  for (const word of words) {
    for (const ch of word) {
      exists[ch.charCodeAt(0) - aUniCode] = true;
    }
  }

  // Build graph
  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];
    const b = words[i + 1];
    for (let j = 0; j < a.length; ++j) {
      if (j >= b.length) return '';
      if (a[j] === b[j]) continue;
      const u = a.charCodeAt(j) - aUniCode;
      const v = b.charCodeAt(j) - aUniCode;
      if (!graph[u].includes(v)) graph[u].push(v);
      break;
    }
  }

  //dfs
  const visited = Array(N).fill(false);
  const path = Array(N).fill(false);
  const res: number[] = [];

  function dfs(cur: number): boolean {
    visited[cur] = true;
    path[cur] = true;

    for (const v of graph[cur]) {
      if (!visited[v]) {
        if (!dfs(v)) {
          return false;
        }
      } else if (path[v]) {
        return false;
      }
    }
    path[cur] = false;
    res.push(cur);
    return true;
  }

  for (let i = 0; i < N; i++) {
    if (!exists[i] || visited[i]) continue;
    if (!dfs(i)) return '';
  }

  if (words.length === 1) return words[0];

  return res
    .reverse()
    .map((i) => String.fromCharCode(i + aUniCode))
    .join('');
}
