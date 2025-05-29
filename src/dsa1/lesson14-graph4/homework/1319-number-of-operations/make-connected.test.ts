import { makeConnected } from './make-connected';

describe('makeConnected', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const n = 4,
        connections = [
          [0, 1],
          [0, 2],
          [1, 2],
        ];
      const expectedOutput = 1;
      expect(makeConnected(n, connections)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const n = 6,
        connections = [
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 2],
        ];
      const expectedOutput = -1;
      expect(makeConnected(n, connections)).toBe(expectedOutput);
    });
  });
});
