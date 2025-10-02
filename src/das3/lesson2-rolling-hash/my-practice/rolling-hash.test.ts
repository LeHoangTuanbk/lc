import { buildHash } from './rolling-hash';

describe('Rolling Hash', () => {
  it('should compute same hash for equal substrings', () => {
    const { getHash } = buildHash('abcdefgh');
    // "abc" (0..2) vs "abc" (0..2)
    expect(getHash(0, 2)).toBe(getHash(0, 2));
  });

  it('should compute different hash for different substrings', () => {
    const { getHash } = buildHash('abcdefgh');
    // "abc" vs "bcd"
    expect(getHash(0, 2)).not.toBe(getHash(1, 3));
  });

  it('should detect equality of repeated substrings', () => {
    const { getHash } = buildHash('abcabc');
    // "abc" (0..2) vs "abc" (3..5)
    expect(getHash(0, 2)).toBe(getHash(3, 5));
  });
});
