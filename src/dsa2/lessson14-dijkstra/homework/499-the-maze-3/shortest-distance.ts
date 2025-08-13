import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Point = [number, number];
type State = { d: number; r: number; c: number; path: string };

export function findShortestWay(maze: number[][], ball: Point, hole: Point): string {
  const m = maze.length,
    n = maze[0].length;
  const dirs: [number, number, string][] = [
    [-1, 0, 'u'],
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
  ];

  // dist[r][c] = shortest distance from ball to (r,c)
  const dist: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
  // path[r][c] = lexicographically smallest path to reach (r,c)
  const path: string[][] = Array.from({ length: m }, () => Array(n).fill(''));

  const pq = new MinPriorityQueue<State>(
    (x) => x.d * 10000 + lexWeight(x.path), // trick to ensure Dijkstra uses dist first, then lex
  );

  dist[ball[0]][ball[1]] = 0;
  path[ball[0]][ball[1]] = '';
  pq.enqueue({ d: 0, r: ball[0], c: ball[1], path: '' });

  while (!pq.isEmpty()) {
    const { d, r, c, path: p } = pq.dequeue();

    if (r === hole[0] && c === hole[1]) return p; // reached hole

    if (d > dist[r][c] || (d === dist[r][c] && p > path[r][c])) continue;

    for (const [dr, dc, move] of dirs) {
      let nr = r,
        nc = c,
        steps = 0;
      // roll until wall or hole
      while (
        nr + dr >= 0 &&
        nr + dr < m &&
        nc + dc >= 0 &&
        nc + dc < n &&
        maze[nr + dr][nc + dc] === 0
      ) {
        nr += dr;
        nc += dc;
        steps++;
        if (nr === hole[0] && nc === hole[1]) break; // stop at hole
      }

      const newDist = d + steps;
      const newPath = p + move;

      if (newDist < dist[nr][nc] || (newDist === dist[nr][nc] && newPath < path[nr][nc])) {
        dist[nr][nc] = newDist;
        path[nr][nc] = newPath;
        pq.enqueue({ d: newDist, r: nr, c: nc, path: newPath });
      }
    }
  }

  return 'impossible';
}

// Helper to make lexicographic tie-breaking in priority queue stable
function lexWeight(s: string): number {
  let weight = 0;
  for (let i = 0; i < s.length; i++) {
    weight = weight * 4 + 'dlru'.indexOf(s[i]); // map d=0,l=1,r=2,u=3
  }
  return weight;
}

const maze = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 1, 0, 0, 0],
];
const ball: [number, number] = [4, 3];
const hole: [number, number] = [0, 1];

console.log(findShortestWay(maze, ball, hole));
