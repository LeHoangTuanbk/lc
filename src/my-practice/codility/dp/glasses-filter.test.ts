import { solution, solution2 } from './glasses-filter';

describe('Glass filter', () => {
  it('test', () => {
    expect(solution(5, 8)).toBe(2);
    expect(solution(4, 10)).toBe(4);
    expect(solution(1, 2)).toBe(-1);
    expect(solution(10, 5)).toBe(1);
    expect(solution(10, 100)).toBe(-1);
  });

  it('test 2', () => {
    expect(solution2(5, 8)).toBe(2);
    expect(solution2(4, 10)).toBe(4);
    expect(solution2(1, 2)).toBe(-1);
    expect(solution2(10, 5)).toBe(1);
    expect(solution2(10, 100)).toBe(-1);
  });
});
