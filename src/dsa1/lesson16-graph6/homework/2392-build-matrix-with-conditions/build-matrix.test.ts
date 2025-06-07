import { buildMatrix } from './build-matrix';

describe('buildMatrix', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const k = 3,
        rowConditions = [
          [1, 2],
          [3, 2],
        ],
        colConditions = [
          [2, 1],
          [3, 2],
        ];
      const expectedOutput = [
        [3, 0, 0],
        [0, 0, 1],
        [0, 2, 0],
      ];
      expect(buildMatrix(n, rowConditions, colConditions)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const k = 3,
        rowConditions = [
          [1, 2],
          [2, 3],
          [3, 1],
          [2, 3],
        ],
        colConditions = [[2, 1]];
      const expectedOutput = [];
      expect(buildMatrix(n, rowConditions, colConditions)).toEqual(expectedOutput);
    });
  });
});
