import { minimumOperations } from './minimumOperations';

describe('minimumOperations', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [1, 5, 0, 3, 5];
      const expectedOutput = 3;
      expect(minimumOperations(nums)).toBe(expectedOutput);
    });
  });
  describe('special case', () => {
    test('Should return 0 when all items are 0', () => {
      const nums = [0];
      const expectedOutput = 0;
      expect(minimumOperations(nums)).toBe(expectedOutput);
    });
  });
});
