import { canCompleteCircuit } from './can-complete-circuit';

describe('canCompleteCircuit', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const gas = [1, 2, 3, 4, 5];
      const cost = [3, 4, 5, 1, 2];
      const expectedOutput = 3;
      expect(canCompleteCircuit(gas, cost)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const gas = [2, 3, 4];
      const cost = [3, 4, 3];
      const expectedOutput = -1;
      expect(canCompleteCircuit(gas, cost)).toBe(expectedOutput);
    });
  });

  describe('edge cases', () => {
    test('should handle empty input', () => {
      const gas = [2];
      const cost = [2];
      const expectedOutput = 0;
      expect(canCompleteCircuit(gas, cost)).toBe(expectedOutput);
    });
  });
});
