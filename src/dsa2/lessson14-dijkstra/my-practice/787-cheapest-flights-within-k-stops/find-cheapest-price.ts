export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  let dist = Array(n).fill(Infinity);
  dist[src] = 0;

  for (let step = 0; step <= k; step++) {
    let changed = false;
    const next = dist.slice();
    for (const [u, v, w] of flights) {
      if (dist[u] != Infinity && dist[u] + w < next[v]) {
        next[v] = dist[u] + w;
        changed = true;
      }
    }
    dist = next;
    if (!changed) break;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
}
