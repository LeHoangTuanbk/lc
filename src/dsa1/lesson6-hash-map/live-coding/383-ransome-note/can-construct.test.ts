import { canConstruct } from './can-construct';

describe('numJewelsInStones', () => {
  describe('core cases', () => {
    test('should handle normal input 1 correctly', () => {
      const ransomNote = 'a';
      const magazine = 'b';
      const expectedOutput = false;
      expect(canConstruct(ransomNote, magazine)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const ransomNote = 'aa';
      const magazine = 'ab';
      const expectedOutput = false;
      expect(canConstruct(ransomNote, magazine)).toBe(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const ransomNote = 'aa';
      const magazine = 'aab';
      const expectedOutput = true;
      expect(canConstruct(ransomNote, magazine)).toBe(expectedOutput);
    });
  });
});
