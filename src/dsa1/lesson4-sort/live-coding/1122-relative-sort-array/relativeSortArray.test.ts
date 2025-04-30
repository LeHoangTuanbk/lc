import { relativeSortArray } from './relativeSortArray';

describe('relativeSortArray', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
        arr2 = [2, 1, 4, 3, 9, 6];
      const expectedOutput = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
      expect(relativeSortArray(arr1, arr2)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const arr1 = [28, 6, 22, 8, 44, 17],
        arr2 = [22, 28, 8, 6];
      const expectedOutput = [22, 28, 8, 6, 17, 44];
      expect(relativeSortArray(arr1, arr2)).toEqual(expectedOutput);
    });
  });
});
