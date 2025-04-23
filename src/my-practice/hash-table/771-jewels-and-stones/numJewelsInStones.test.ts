import { numJewelsInStones } from './numJewelsInStones';

describe('numJewelsInStones', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const jewels = 'aA';
      const stones = 'aAAbbbb';
      const expectedOutput = 3;
      expect(numJewelsInStones(jewels, stones)).toBe(expectedOutput);
    });
    test('should handle normal input case 2 correctly', () => {
      const jewels = 'z';
      const stones = 'ZZ';
      const expectedOutput = 0;
      expect(numJewelsInStones(jewels, stones)).toBe(expectedOutput);
    });
  });
});
