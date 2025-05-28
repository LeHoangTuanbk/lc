import { isBipartite } from './is-bipartite';

describe('isBipartite', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const graph = [
        [1, 2, 3],
        [0, 2],
        [0, 1, 3],
        [0, 2],
      ];
      const expectedOutput = false;
      expect(isBipartite(graph)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const graph = [
        [1, 3],
        [0, 2],
        [1, 3],
        [0, 2],
      ];
      const expectedOutput = true;
      expect(isBipartite(graph)).toBe(expectedOutput);
    });
  });
});
