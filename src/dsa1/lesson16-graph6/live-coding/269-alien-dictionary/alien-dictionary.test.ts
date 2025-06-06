import { alienOrder } from './alien-dictionary';

describe('alienOrder', () => {
  it('should return correct order for basic case', () => {
    expect(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt'])).toBe('wertf');
  });

  it('should handle simple ordering', () => {
    expect(alienOrder(['z', 'x'])).toBe('zx');
  });

  it('should return empty string for invalid input (cycle)', () => {
    expect(alienOrder(['z', 'x', 'z'])).toBe('');
  });

  it('should return empty string for invalid prefix conflict', () => {
    expect(alienOrder(['abc', 'ab'])).toBe('');
  });

  it('should return correct order for one word', () => {
    expect(alienOrder(['abc'])).toBe('abc');
  });

  it('should return correct order when multiple valid characters', () => {
    expect(alienOrder(['ba', 'bc', 'ac', 'cab'])).toBe('bac');
  });
});
