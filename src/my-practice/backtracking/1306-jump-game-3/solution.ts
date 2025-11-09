export function canReach(arr: number[], start: number): boolean {
  const n = arr.length;
  const visited = Array(n).fill(false);

  function dfs(i: number): boolean {
    if (i < 0 || i >= n || visited[i]) return false;
    if (arr[i] === 0) return true;
    visited[i] = true;

    return dfs(i + arr[i]) || dfs(i - arr[i]);
  }

  return dfs(start);
}
