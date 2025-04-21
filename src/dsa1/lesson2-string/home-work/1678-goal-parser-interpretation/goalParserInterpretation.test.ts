import { interpret } from './goalParserInterpretation';

describe('interpret', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'G()(al)';
      const expectedOutput = 'Goal';
      expect(interpret(normalInput)).toEqual(expectedOutput);
    });

    test('should handle: test case 2', () => {
      const normalInput = '(al)G(al)()()G';
      const expectedOutput = 'alGalooG';
      expect(interpret(normalInput)).toBe(expectedOutput);
    });
  });
});
