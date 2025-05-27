import { solve } from './solve';

describe('solve', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const board = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ];
      const expectedOutput = [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ];
      solve(board);
      console.log(board);
      expect(board).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const board = [['X']];
      const expectedOutput = [['X']];
      solve(board);
      expect(board).toEqual(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const board = [
        ['O', 'O'],
        ['O', 'O'],
      ];
      const expectedOutput = [
        ['O', 'O'],
        ['O', 'O'],
      ];
      solve(board);
      expect(board).toEqual(expectedOutput);
    });
  });
});
