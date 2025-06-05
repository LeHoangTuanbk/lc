import { canReconstructSequences } from './reconstruct-sequence';

describe('containsCycle', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [1, 2, 3],
        sequences = [
          [1, 2],
          [1, 3],
        ];
      const expectedOutput = false;
      expect(canReconstructSequences(nums, sequences)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const nums = [1, 2, 3],
        sequences = [[1, 2]];
      const expectedOutput = false;
      expect(canReconstructSequences(nums, sequences)).toEqual(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const nums = [1, 2, 3],
        sequences = [
          [1, 2],
          [1, 3],
          [2, 3],
        ];
      const expectedOutput = true;
      expect(canReconstructSequences(nums, sequences)).toEqual(expectedOutput);
    });
  });
});
