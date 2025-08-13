import { findShortestWay, Point } from './shortest-distance-2';

describe('LeetCode 499 - The Maze III', () => {
  test('Trường hợp cơ bản - có đường đi ngắn nhất', () => {
    const maze = [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 0, 0],
    ];
    const ball: Point = [4, 3];
    const hole: Point = [0, 1];
    expect(findShortestWay(maze, ball, hole)).toBe('lul');
  });

  test('Không thể đến hố', () => {
    const maze = [
      [0, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ];
    const ball: Point = [2, 0];
    const hole: Point = [0, 2];
    expect(findShortestWay(maze, ball, hole)).toBe('impossible');
  });

  test('Nhiều đường ngắn nhất - chọn lexicographically smallest', () => {
    const maze = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const ball: Point = [2, 0];
    const hole: Point = [0, 2];
    // Có 2 đường cùng độ dài: "ur", "ru" → chọn "ru"
    expect(findShortestWay(maze, ball, hole)).toBe('ru');
  });
});
