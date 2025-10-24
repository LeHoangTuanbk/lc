import { minimumSemesters } from './solution';

describe('minimumSemesters', () => {
  it('Example 1', () => {
    expect(
      minimumSemesters(3, [
        [1, 3],
        [2, 3],
      ]),
    ).toBe(2);
  });

  it('Example 2: has cycle', () => {
    expect(
      minimumSemesters(3, [
        [1, 2],
        [2, 3],
        [3, 1],
      ]),
    ).toBe(-1);
  });

  it('All independent courses', () => {
    expect(minimumSemesters(4, [])).toBe(1);
  });

  it('Single path', () => {
    expect(
      minimumSemesters(4, [
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    ).toBe(4);
  });

  it('Two paths converging', () => {
    expect(
      minimumSemesters(5, [
        [1, 4],
        [2, 4],
        [3, 5],
      ]),
    ).toBe(2);
  });

  it('Multiple layers', () => {
    expect(
      minimumSemesters(6, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ]),
    ).toBe(5);
  });

  it('Disconnected components', () => {
    expect(
      minimumSemesters(6, [
        [1, 2],
        [3, 4],
      ]),
    ).toBe(2);
  });
});
