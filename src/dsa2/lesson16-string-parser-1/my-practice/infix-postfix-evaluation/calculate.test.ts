import { evaluateInfix, infixToPostfix } from './calculate';

describe('Infix → Postfix → Evaluate', () => {
  it('should convert to postfix correctly', () => {
    expect(infixToPostfix('3 + 4 * 2 / (1 - 5)')).toEqual([
      '3',
      '4',
      '2',
      '*',
      '1',
      '5',
      '-',
      '/',
      '+',
    ]);
  });

  it('should evaluate postfix correctly', () => {
    expect(evaluateInfix('3 + 4 * 2 / (1 - 5)')).toBe(1); // 3 + ((4*2)/-4) = 3 - 2 = 1
  });

  it('should handle multi-digit numbers', () => {
    expect(evaluateInfix('12 + 24 / (6 - 2)')).toBe(18); // 12 + (24/4) = 18
  });

  it('should handle spacing and precedence', () => {
    expect(evaluateInfix('2 + 3 * 4')).toBe(14);
    expect(evaluateInfix('(2 + 3) * 4')).toBe(20);
  });

  it('should handle deeply nested expressions', () => {
    expect(evaluateInfix('((1 + 2) * (3 + 4)) / (2 + 5)')).toBe(3);
  });
});
