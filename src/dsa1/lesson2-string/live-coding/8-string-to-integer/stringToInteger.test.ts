import { myAtoi } from './stringToInteger';

describe('decodeMessage', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const input = '42';
      const expectedOutput = 42;
      expect(myAtoi(input)).toBe(expectedOutput);
    });

    test('should handle negative string', () => {
      const input = '-042';
      const expectedOutput = -42;
      expect(myAtoi(input)).toBe(expectedOutput);
    });

    test('should handle: number + characters 1', () => {
      const input = '1337c0d3';
      const expectedOutput = 1337;
      expect(myAtoi(input)).toBe(expectedOutput);
    });

    test('should handle: number + characters 2', () => {
      const input = 'words and 987';
      const expectedOutput = 0;
      expect(myAtoi(input)).toBe(expectedOutput);
    });
  });

  describe('Edge cases', () => {
    test('should handle when number is smaller than min 32 bit', () => {
      const input = '-91283472332';
      const expectedOutput = -2147483648;
      expect(myAtoi(input)).toBe(expectedOutput);
    });
  });

  describe('Special cases', () => {
    test('should handle when string starts with 0 and follow by minus and number', () => {
      const input = '0-1';
      const expectedOutput = 0;
      expect(myAtoi(input)).toBe(expectedOutput);
    });
  });
});
