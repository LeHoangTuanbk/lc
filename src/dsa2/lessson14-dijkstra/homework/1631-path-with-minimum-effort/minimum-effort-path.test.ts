import { minimumEffortPath } from './minimum-effort-path';

describe('minimumEffortPath (Dijkstra minimax)', () => {
  test('LeetCode example 1', () => {
    const heights = [
      [1, 2, 2],
      [3, 8, 2],
      [5, 3, 5],
    ];
    expect(minimumEffortPath(heights)).toBe(2);
  });

  test('flat grid -> zero effort', () => {
    const heights = [
      [7, 7],
      [7, 7],
    ];
    expect(minimumEffortPath(heights)).toBe(0);
  });

  test('single row', () => {
    const heights = [[1, 10, 6, 7, 9, 10, 4, 9]];
    // Path is forced along the row; effort is max adjacent diff
    // diffs: 9,4,1,2,1,6,5 => max = 9
    expect(minimumEffortPath(heights)).toBe(9);
  });

  test('2x3 with trade-offs', () => {
    const heights = [
      [1, 100, 1],
      [1, 1, 1],
    ];
    // Optimal route goes down then right-right then up: max edge = 0 or 1
    expect(minimumEffortPath(heights)).toBe(0); // all 1's except start->down diff 0
  });

  test('increasing ridge', () => {
    const heights = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ];
    // Many paths; best minimax edge is 1
    expect(minimumEffortPath(heights)).toBe(1);
  });
});
