import { minimumCost } from './minimumCostBuyingCandies';

describe('minimumCost', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const cost = [1, 2, 3];
      const expectedOutput = 5;
      expect(minimumCost(cost)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const cost = [6, 5, 7, 9, 2, 2];
      const expectedOutput = 23;
      expect(minimumCost(cost)).toBe(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const cost = [5, 5];
      const expectedOutput = 10;
      expect(minimumCost(cost)).toBe(expectedOutput);
    });
  });
});
