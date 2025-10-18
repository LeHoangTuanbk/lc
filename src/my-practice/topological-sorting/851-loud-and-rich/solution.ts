export function loudAndRich(richer: number[][], quiet: number[]): number[] {
  const n = quiet.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree: number[] = Array(n).fill(0);
  for (const [u, v] of richer) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const canReachTo: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  while (queue.length > 0) {
    const u = queue.shift();

    for (let v of graph[u]) {
      for (let r of canReachTo[u]) canReachTo[v].add(r);
      canReachTo[v].add(u);
      if (--inDegree[v] === 0) queue.push(v);
    }
  }

  const res: number[] = Array(n);
  for (let i = 0; i < n; i++) {
    canReachTo[i].add(i);

    let minQuiet = Infinity;
    let bestPerson = -1;

    for (let p of canReachTo[i]) {
      if (quiet[p] < minQuiet) {
        minQuiet = quiet[p];
        bestPerson = p;
      }
    }

    res[i] = bestPerson;
  }

  return res;
}

const richer = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  quiet = [3, 2, 5, 4, 6, 1, 7, 0];
console.log(loudAndRich(richer, quiet));
