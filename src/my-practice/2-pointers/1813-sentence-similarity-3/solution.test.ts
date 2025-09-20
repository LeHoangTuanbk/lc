import { areSentencesSimilar } from './solution';

describe('areSentencesSimilar', () => {
  it('should return true for prefix match', () => {
    expect(areSentencesSimilar('My name is John', 'My name')).toBe(true);
  });

  it('should return true for suffix match', () => {
    expect(areSentencesSimilar('My name is John', 'is John')).toBe(true);
  });

  it('should return true for prefix + suffix match', () => {
    expect(areSentencesSimilar('c h p Ny', 'c BDQ r h p Ny')).toBe(true);
  });

  it('should return false for missing middle match', () => {
    expect(areSentencesSimilar('eTUny i b R UFKQJ EZx JBJ Q xXz', 'eTUny i R EZx JBJ xXz')).toBe(
      false,
    );
  });

  it('should return true for identical sentences', () => {
    expect(areSentencesSimilar('hello world', 'hello world')).toBe(true);
  });

  it('should return false when no match at front or end', () => {
    expect(areSentencesSimilar('a b c', 'x y z')).toBe(false);
  });

  it('should return true when shorter sentence is single word and matches', () => {
    expect(areSentencesSimilar('hello', 'hello')).toBe(true);
  });

  it('should return false when single word does not match', () => {
    expect(areSentencesSimilar('hello', 'world')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(areSentencesSimilar('', '')).toBe(true);
    expect(areSentencesSimilar('abc', '')).toBe(true);
    expect(areSentencesSimilar('', 'abc')).toBe(false);
  });
});
