import { containsCycle } from './contains-cycle';

describe('containsCycle', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const grid = [
        ['a', 'a', 'a', 'a'],
        ['a', 'b', 'b', 'a'],
        ['a', 'b', 'b', 'a'],
        ['a', 'a', 'a', 'a'],
      ];
      const expectedOutput = true;
      expect(containsCycle(grid)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const grid = [
        ['c', 'c', 'c', 'a'],
        ['c', 'd', 'c', 'c'],
        ['c', 'c', 'e', 'c'],
        ['f', 'c', 'c', 'c'],
      ];
      const expectedOutput = true;
      expect(containsCycle(grid)).toEqual(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const grid = [
        ['a', 'b', 'b'],
        ['b', 'z', 'b'],
        ['b', 'b', 'a'],
      ];
      const expectedOutput = false;
      expect(containsCycle(grid)).toEqual(expectedOutput);
    });

    test('should handle normal input 4 correctly', () => {
      const grid = [
        ['c', 'a', 'd'],
        ['a', 'a', 'a'],
        ['a', 'a', 'd'],
        ['a', 'c', 'd'],
        ['a', 'b', 'c'],
      ];
      const expectedOutput = true;
      expect(containsCycle(grid)).toEqual(expectedOutput);
    });
  });
});
