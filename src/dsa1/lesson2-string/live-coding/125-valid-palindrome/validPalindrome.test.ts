import { isPalindrome } from './validPalindrome';

describe('Is valid palindrome', () => {
  test('Case 1: Valid palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  test('Case 2: Invalid palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
  test('Case 3 : Empty string', () => {
    expect(isPalindrome(' ')).toBe(true);
  });
});
