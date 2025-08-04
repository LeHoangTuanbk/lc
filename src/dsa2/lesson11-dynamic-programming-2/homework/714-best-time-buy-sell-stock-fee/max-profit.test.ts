import { maxProfit } from './max-profit';

describe('maxProfit', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const prices = [1, 3, 2, 8, 4, 9],
        fee = 2;
      const expectedOutput = 8;
      expect(maxProfit(prices, fee)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const prices = [1, 3, 7, 5, 10, 3],
        fee = 3;
      const expectedOutput = 6;
      expect(maxProfit(prices, fee)).toBe(expectedOutput);
    });
  });
});
