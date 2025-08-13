import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export type Point = [number, number];
type State = { d: number; r: number; c: number; path: string };

/* 
https://leetcode.ca/all/499.html
*/
export function findShortestWay(maze: number[][], ball: Point, hole: Point): string {
  const m = maze.length,
    n = maze[0].length;
  const dirs: [number, number, string][] = [
    [-1, 0, 'u'],
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
  ];

  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const path = Array.from({ length: m }, () => Array(n).fill(''));
  const pq = new MinPriorityQueue<State>({
    compare: (a, b) => {
      if (a.d !== b.d) return a.d - b.d;
      return a.path.localeCompare(b.path);
    },
  });

  dist[ball[0]][ball[1]] = 0;
  path[ball[0]][ball[1]] = '';
  pq.enqueue({ d: 0, r: ball[0], c: ball[1], path: '' });

  while (!pq.isEmpty()) {
    const { d, r, c, path: p } = pq.dequeue();

    if (d > dist[r][c] || p > path[r][c]) continue;

    for (const [dr, dc, move] of dirs) {
      let nr = r,
        nc = c,
        steps = 0;
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
        if (nr === hole[0] && nc === hole[1]) break;
      }

      const nd = d + steps;
      const np = p + move;

      if (nd < dist[nr][nc] || (nd === dist[nr][nc] && np < path[nr][nc])) {
        dist[nr][nc] = nd;
        path[nr][nc] = np;
        pq.enqueue({ d: nd, r: nr, c: nc, path: np });
      }
    }
  }

  return dist[hole[0]][hole[1]] < Infinity ? path[hole[0]][hole[1]] : 'impossible';
}
