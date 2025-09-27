import { countPatternMatches } from './q2';

describe('countPatternMatches', () => {
  it('example 1', () => {
    expect(countPatternMatches('010', 'amazing')).toBe(2);
  });

  it('example 2', () => {
    expect(countPatternMatches('100', 'codesignal')).toBe(0);
  });

  it('single char vowel', () => {
    expect(countPatternMatches('0', 'aeiouy')).toBe(6);
  });

  it('single char consonant', () => {
    expect(countPatternMatches('1', 'bcdfgh')).toBe(6);
  });

  it('mixed small', () => {
    expect(countPatternMatches('01', 'ab')).toBe(1);
    expect(countPatternMatches('10', 'ab')).toBe(0);
  });

  it('no matches', () => {
    expect(countPatternMatches('01', 'zzz')).toBe(0);
  });

  it('longer string', () => {
    expect(countPatternMatches('010', 'abacadae')).toBe(3);
    // substrings "aba", "aca", "ada"
  });
});
