import { findMaxFish } from './find-max-fish';

describe('findMaxFish', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const grid = [
        [0, 2, 1, 0],
        [4, 0, 0, 3],
        [1, 0, 0, 4],
        [0, 3, 2, 0],
      ];
      const expectedOutput = 7;
      expect(findMaxFish(grid)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const grid = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
      ];
      const expectedOutput = 1;
      expect(findMaxFish(grid)).toEqual(expectedOutput);
    });
  });
});
