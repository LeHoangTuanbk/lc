function dfs(
  cur: number,
  n: number,
  connectedComponents: number[],
  isConnected: number[][],
  visited: boolean[],
) {
  visited[cur] = true;
  connectedComponents.push(cur);
  for (let i = 0; i < n; i++) {
    if (visited[i] || isConnected[cur][i] === 0) {
      continue;
    }
    dfs(i, n, connectedComponents, isConnected, visited);
  }
}
export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited: boolean[] = Array(n).fill(false);
  let res = 0;
  const connectedComponents: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    const connectedComponent: number[] = [];
    res++;
    dfs(i, n, connectedComponent, isConnected, visited);
    connectedComponents.push(connectedComponent);
  }
  return res;
  // console.log(connectComponents);
  // return connectComponents.length;
}
