import { canMakeSubsequence } from './solution';

describe('canMakeSubsequence', () => {
  it('basic valid case with increment', () => {
    expect(canMakeSubsequence('abc', 'ad')).toBe(true);
  });

  it('valid with wrap-around increment (z -> a)', () => {
    expect(canMakeSubsequence('zc', 'ad')).toBe(true);
  });

  it('invalid because missing needed character', () => {
    expect(canMakeSubsequence('ab', 'd')).toBe(false);
  });

  it('exact match without change', () => {
    expect(canMakeSubsequence('abc', 'abc')).toBe(true);
  });

  it('long str1 with scattered matching', () => {
    expect(canMakeSubsequence('azbzcz', 'bad')).toBe(true); // a->b, z->a, c->d
  });

  it('empty str2 is always subsequence', () => {
    expect(canMakeSubsequence('abc', '')).toBe(true);
  });

  it('empty str1 cannot match non-empty str2', () => {
    expect(canMakeSubsequence('', 'a')).toBe(false);
  });

  it('case where only increment helps', () => {
    expect(canMakeSubsequence('zzzz', 'aaaa')).toBe(true); // all z → a
  });

  it('mixed match and increment with failure at the end', () => {
    expect(canMakeSubsequence('abcde', 'abf')).toBe(true);
  });

  it('full alphabet check', () => {
    const s1 = 'abcdefghijklmnopqrstuvwxy';
    const s2 = 'bcdefghijklmnopqrstuvwxyz';
    expect(canMakeSubsequence(s1, s2)).toBe(true);
  });
});
