import { calPoints } from './cal-points';

describe('calPoints()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = ['5', '2', 'C', 'D', '+'];
      const expectedOutput = 30;
      expect(calPoints(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
      const expectedOutput = 27;
      expect(calPoints(normalInput)).toBe(expectedOutput);
    });
  });

  describe('edge cases', () => {
    test('edge case 1', () => {
      const normalInput = ['1', 'C'];
      const expectedOutput = 0;
      expect(calPoints(normalInput)).toBe(expectedOutput);
    });
  });
});
