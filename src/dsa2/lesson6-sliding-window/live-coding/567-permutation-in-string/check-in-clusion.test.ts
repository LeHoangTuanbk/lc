import { checkInclusion } from './check-in-clusion';

describe('checkInclusion', () => {
  describe('core cases', () => {
    it('should handle normal input correctly', () => {
      const s1 = 'ab',
        s2 = 'eidbaooo';
      expect(checkInclusion(s1, s2)).toBe(true);
    });

    it('should handle normal input 2 correctly', () => {
      const s1 = 'ab',
        s2 = 'eidboaoo';
      expect(checkInclusion(s1, s2)).toBe(false);
    });
  });
});
