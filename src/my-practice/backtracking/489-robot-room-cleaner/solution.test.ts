import { MockRobot, cleanRoom } from './solution';

test('cleanRoom should visit all accessible cells', () => {
  const grid = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
  ];
  const start: [number, number] = [1, 0];
  const robot = new MockRobot(grid, start);
  cleanRoom(robot);

  const expected = new Set<string>();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) expected.add(`${r},${c}`);
    }
  }
  expect(robot.cleaned).toEqual(expected);
});
