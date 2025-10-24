export function longestCycle(edges: number[]): number {
  const n = edges.length;
  const visited = Array(n).fill(false);
  let res = -1;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    const seen = new Map<number, number>();
    let node = i;
    let depth = 0;

    while (node !== -1) {
      if (seen.has(node)) {
        res = Math.max(res, depth - seen.get(node));
        break;
      }

      if (visited[node]) break;

      seen.set(node, depth);
      visited[node] = true;
      node = edges[node];
      depth++;
    }
  }

  return res;
}

const edges = [3, 3, 4, 2, 3];
console.log(longestCycle(edges));
