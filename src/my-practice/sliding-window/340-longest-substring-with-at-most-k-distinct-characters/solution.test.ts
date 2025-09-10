import { lengthOfLongestSubstringKDistinct } from './solution-2';

describe('lengthOfLongestSubstringKDistinct', () => {
  it('Example 1: s = "eceba", k = 2', () => {
    expect(lengthOfLongestSubstringKDistinct('eceba', 2)).toBe(3); // "ece"
  });

  it('Example 2: s = "aa", k = 1', () => {
    expect(lengthOfLongestSubstringKDistinct('aa', 1)).toBe(2); // "aa"
  });

  it('Empty string', () => {
    expect(lengthOfLongestSubstringKDistinct('', 2)).toBe(0);
  });

  it('k = 0', () => {
    expect(lengthOfLongestSubstringKDistinct('abc', 0)).toBe(0);
  });

  it('k > unique characters in s', () => {
    expect(lengthOfLongestSubstringKDistinct('aabbcc', 10)).toBe(6); // entire string
  });

  it('All characters same', () => {
    expect(lengthOfLongestSubstringKDistinct('aaaaaa', 1)).toBe(6);
  });

  it('All distinct characters, k = 1', () => {
    expect(lengthOfLongestSubstringKDistinct('abcdef', 1)).toBe(1);
  });

  it('s = "abaccc", k = 2', () => {
    expect(lengthOfLongestSubstringKDistinct('abaccc', 2)).toBe(4); // "accc"
  });

  it('s = "abcadcacacaca", k = 3', () => {
    expect(lengthOfLongestSubstringKDistinct('abcadcacacaca', 3)).toBe(11); // "cadcacacaca"
  });

  it('Long input with repeating pattern', () => {
    const s = 'abcabcabcabcabcabcabcabcabcabc';
    expect(lengthOfLongestSubstringKDistinct(s, 2)).toBe(2); // e.g., "abcabc" but with only 2 distinct → max "bcabca"
  });
});
