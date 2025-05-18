import { countStudents } from './countStudents';

describe('countStudents()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const students = [1, 1, 0, 0];
      const sandwiches = [0, 1, 0, 1];
      const expectedOutput = 0;
      expect(countStudents(students, sandwiches)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const students = [1, 1, 1, 0, 0, 1];
      const sandwiches = [1, 0, 0, 0, 1, 1];
      const expectedOutput = 3;
      expect(countStudents(students, sandwiches)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const students = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
      const sandwiches = [1, 0, 1, 0, 0, 1, 1, 0, 0, 0];
      const expectedOutput = 0;
      expect(countStudents(students, sandwiches)).toBe(expectedOutput);
    });
  });
});
