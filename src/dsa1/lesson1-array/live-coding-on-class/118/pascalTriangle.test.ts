import { generate } from './pascalTriangle';

describe('pascal triangle', () => {
  test('numRows: 1', () => {
    expect(generate(1)).toEqual([[1]]);
  });
  test('numRows: 5', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
