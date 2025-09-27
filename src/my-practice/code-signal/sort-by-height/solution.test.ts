import { sortByHeight } from './solution';

describe('sortByHeight', () => {
  it('Example case 1', () => {
    const a = [-1, 150, 190, 170, -1, -1, 160, 180];
    expect(sortByHeight(a)).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
  });

  it('All trees', () => {
    const a = [-1, -1, -1];
    expect(sortByHeight(a)).toEqual([-1, -1, -1]);
  });

  it('No trees', () => {
    const a = [4, 3, 2, 1];
    expect(sortByHeight(a)).toEqual([1, 2, 3, 4]);
  });

  it('Trees only at edges', () => {
    const a = [-1, 5, 3, 2, -1];
    expect(sortByHeight(a)).toEqual([-1, 2, 3, 5, -1]);
  });

  it('Mixed small case', () => {
    const a = [5, -1, 4, -1, 3, 2];
    expect(sortByHeight(a)).toEqual([2, -1, 3, -1, 4, 5]);
  });

  it('Single element', () => {
    expect(sortByHeight([-1])).toEqual([-1]);
    expect(sortByHeight([10])).toEqual([10]);
  });

  it('Large input', () => {
    const people = [100, 90, 80, 70, 60];
    const a = [-1, ...people, -1];
    expect(sortByHeight(a)).toEqual([-1, 60, 70, 80, 90, 100, -1]);
  });
});
