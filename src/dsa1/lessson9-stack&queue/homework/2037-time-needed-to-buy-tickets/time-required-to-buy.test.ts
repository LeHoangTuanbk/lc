import { timeRequiredToBuy } from './time-required-to-buy';

describe('timeRequiredToBuy()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const tickets = [2, 3, 2];
      const k = 2;
      const expectedOutput = 6;
      expect(timeRequiredToBuy(tickets, k)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const tickets = [5, 1, 1, 1];
      const k = 0;
      const expectedOutput = 8;
      expect(timeRequiredToBuy(tickets, k)).toBe(expectedOutput);
    });
  });
});
