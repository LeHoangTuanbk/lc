import { partitionString } from './partition-string';

describe('partitionString', () => {
  describe('core cases', () => {
    test('should handle normal input 1 correctly', () => {
      const s = 'abacaba';
      const expectedOutput = 4;
      /*
      Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
      */
      expect(partitionString(s)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const s = 'ssssss';
      const expectedOutput = 6;
      /*
      ("s","s","s","s","s","s")
      */
      expect(partitionString(s)).toBe(expectedOutput);
    });
  });
});
