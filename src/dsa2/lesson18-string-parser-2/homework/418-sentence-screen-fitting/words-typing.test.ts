import { wordsTyping2 as wordsTyping } from './words-typing';

describe('wordsTyping', () => {
  test('Example 1: rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]', () => {
    expect(wordsTyping(4, 5, ['I', 'had', 'apple', 'pie'])).toBe(1);
  });

  test('Example 2: rows = 2, cols = 8, sentence = ["hello", "world"]', () => {
    expect(wordsTyping(2, 8, ['hello', 'world'])).toBe(1);
  });

  test('Example 3: rows = 3, cols = 6, sentence = ["a", "bcd", "e"]', () => {
    expect(wordsTyping(3, 6, ['a', 'bcd', 'e'])).toBe(2);
  });

  test('Edge case: sentence too long for any line', () => {
    expect(wordsTyping(2, 3, ['longword'])).toBe(0);
  });

  test('Edge case: sentence fits perfectly multiple times', () => {
    expect(wordsTyping(2, 6, ['a', 'b'])).toBe(3); // "a b a b" fits 3 times
  });

  test('Edge case: sentence fits exactly to screen end', () => {
    expect(wordsTyping(1, 10, ['a', 'bc', 'def'])).toBe(1); // "a bc def" = 9 chars + 2 spaces
  });
});
