import { reverseInParentheses } from './solution';

describe('reverseInParentheses', () => {
  it('Simple case', () => {
    expect(reverseInParentheses('(bar)')).toBe('rab');
  });

  it('Nested case', () => {
    expect(reverseInParentheses('foo(bar)baz')).toBe('foorabbaz');
  });

  it('Double nested', () => {
    expect(reverseInParentheses('foo(bar(baz))blim')).toBe('foobazrabblim');
  });

  it('Multiple groups', () => {
    expect(reverseInParentheses('(ab)(cd)')).toBe('ba' + 'dc');
  });

  it('No parentheses', () => {
    expect(reverseInParentheses('hello')).toBe('hello');
  });
});
