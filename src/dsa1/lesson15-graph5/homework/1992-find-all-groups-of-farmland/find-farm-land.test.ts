import { findFarmland } from './find-farm-land';

describe('findFarmland', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const land = [
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ];
      const expectedOutput = [
        [0, 0, 0, 0],
        [1, 1, 2, 2],
      ];
      expect(findFarmland(land)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const land = [
        [1, 1],
        [1, 1],
      ];
      const expectedOutput = [[0, 0, 1, 1]];
      expect(findFarmland(land)).toEqual(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const land = [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
      const expectedOutput = [[2, 0, 4, 2]];
      expect(findFarmland(land)).toEqual(expectedOutput);
    });
  });
});
