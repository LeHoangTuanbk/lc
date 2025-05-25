import { successfulPairs } from './successful-paris';

describe('successfulPairs', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const spells = [5, 1, 3],
        potions = [1, 2, 3, 4, 5],
        success = 7,
        expectedOutput = [4, 0, 3];
      expect(successfulPairs(spells, potions, success)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const spells = [3, 1, 2],
        potions = [8, 5, 8],
        success = 16,
        expectedOutput = [2, 0, 2];
      expect(successfulPairs(spells, potions, success)).toEqual(expectedOutput);
    });
  });
});
