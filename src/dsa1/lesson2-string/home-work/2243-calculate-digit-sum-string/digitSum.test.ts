import { digitSum } from './digitSum';

describe('digitSum', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const s = '11111222223';
      const k = 3;
      const expectedOutput = '135';
      expect(digitSum(s, k)).toEqual(expectedOutput);
    });

    test('should handle: test case 2', () => {
      const s = '00000000';
      const k = 3;
      const expectedOutput = '000';
      expect(digitSum(s, k)).toEqual(expectedOutput);
    });
  });
});
