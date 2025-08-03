import { change } from './change';

describe('change', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const amount = 5,
        coins = [1, 2, 5];
      const expectedOutput = 4;
      expect(change(amount, coins)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const amount = 3,
        coins = [2];
      const expectedOutput = 0;
      expect(change(amount, coins)).toBe(expectedOutput);
    });
  });
});
