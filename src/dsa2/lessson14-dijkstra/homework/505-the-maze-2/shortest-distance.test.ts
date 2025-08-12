import { shortestDistance } from './shortest-distance';
import type { Point } from './shortest-distance';

describe('LeetCode 505 - The Maze II', () => {
  test.each([
    {
      maze: [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ],
      start: [0, 4] as Point,
      dest: [4, 4] as Point,
      expected: 12,
    },
    {
      maze: [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ],
      start: [0, 4] as Point,
      dest: [3, 2] as Point,
      expected: -1,
    },
    {
      maze: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      start: [0, 0] as Point,
      dest: [4, 4] as Point,
      expected: 8,
    },
  ])('should return shortest distance', ({ maze, start, dest, expected }) => {
    expect(shortestDistance(maze, start, dest)).toBe(expected);
  });
});
