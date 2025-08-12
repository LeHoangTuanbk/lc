import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export type Point = [number, number];

// https://leetcode.ca/all/505.html
export function shortestDistance(maze: number[][], start: Point, destination: Point) {
  const m = maze.length,
    n = maze[0].length;
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const dirs: Point[] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const pq = new MinPriorityQueue<{ d: number; r: number; c: number }>((x) => x.d);

  dist[start[0]][start[1]] = 0;
  pq.enqueue({ d: 0, r: start[0], c: start[1] });

  while (!pq.isEmpty()) {
    const { d, r, c } = pq.dequeue();

    if (r === destination[0] && c == destination[1]) return d;
    if (d > dist[r][c]) continue;

    for (const [dr, dc] of dirs) {
      let nr = r,
        nc = c,
        step = 0;

      while (
        nr + dr >= 0 &&
        nr + dr < m &&
        nc + dc >= 0 &&
        nc + dc < n &&
        maze[nr + dr][nc + dc] === 0
      ) {
        nr += dr;
        nc += dc;
        step++;
      }

      const newDist = d + step;
      if (newDist < dist[nr][nc]) {
        dist[nr][nc] = newDist;
        pq.enqueue({ d: newDist, r: nr, c: nc });
      }
    }
  }

  return -1;
}

const maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  start = [0, 4] as Point,
  dest = [4, 4] as Point;

console.log(shortestDistance(maze, start, dest));
