function dfs(
  cur: number,
  numberOfDetonation: number,
  n: number,
  bombs: number[][],
  visited: boolean[],
): number {
  visited[cur] = true;
  numberOfDetonation++;
  const [x, y, r] = bombs[cur];
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    const [x2, y2, r2] = bombs[i];
    const distance = (x2 - x) ** 2 + (y2 - y) ** 2;
    if (distance <= r ** 2) {
      numberOfDetonation = dfs(i, numberOfDetonation, n, bombs, visited);
    }
  }
  return numberOfDetonation;
}
export function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const visited = Array(n).fill(false);
    const numberOfCurrentDetonation = dfs(i, 0, n, bombs, visited);
    max = Math.max(numberOfCurrentDetonation, max);
  }
  return max;
}

const bombs = [
  [2, 1, 3],
  [6, 1, 4],
];

console.log(maximumDetonation(bombs));

// Clean code and idea
export function maximumDetonation2(bombs: number[][]): number {
  const n = bombs.length;

  const graph: number[][] = Array(n)
    .fill(null)
    .map(() => []);

  for (let i = 0; i < n; i++) {
    const [x1, y1, r1] = bombs[i];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [x2, y2] = bombs[j];
      const distanceSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2;
      if (distanceSquared <= r1 ** 2) {
        graph[i].push(j);
      }
    }
  }

  function dfs(start: number, visited: boolean[]): number {
    visited[start] = true;
    let count = 1;

    for (const neighbor of graph[start]) {
      if (!visited[neighbor]) {
        count += dfs(neighbor, visited);
      }
    }

    return count;
  }

  let maxDetonations = 0;

  for (let i = 0; i < n; i++) {
    const visited = Array(n).fill(false);
    const detonations = dfs(i, visited);
    maxDetonations = Math.max(maxDetonations, detonations);
  }

  return maxDetonations;
}
