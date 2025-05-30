import { minimumFuelCost } from './minimum-fuel-cost';

describe('minimumFuelCost', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const roads = [
          [0, 1],
          [0, 2],
          [0, 3],
        ],
        seats = 5;
      const expectedOutput = 3;
      expect(minimumFuelCost(roads, seats)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const roads = [
          [3, 1],
          [3, 2],
          [1, 0],
          [0, 4],
          [0, 5],
          [4, 6],
        ],
        seats = 2;
      const expectedOutput = 7;
      expect(minimumFuelCost(roads, seats)).toBe(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const roads: number[][] = [],
        seats = 1;
      const expectedOutput = 0;
      expect(minimumFuelCost(roads, seats)).toBe(expectedOutput);
    });
  });
});
