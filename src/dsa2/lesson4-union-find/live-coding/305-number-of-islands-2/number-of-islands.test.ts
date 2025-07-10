import { numIslands2 } from './number-of-islands';

describe('numIslands2', () => {
  it('should work for example 1', () => {
    const n = 4,
      m = 5;
    const positions: [number, number][] = [
      [1, 1],
      [0, 1],
      [3, 3],
      [3, 4],
    ];
    const expected = [1, 1, 2, 2];
    expect(numIslands2(n, m, positions)).toEqual(expected);
  });

  it('should work for example 2', () => {
    const n = 3,
      m = 3;
    const positions: [number, number][] = [
      [0, 0],
      [0, 1],
      [2, 2],
      [2, 1],
    ];
    const expected = [1, 1, 2, 2];
    expect(numIslands2(n, m, positions)).toEqual(expected);
  });

  it('should handle repeated insertions to same cell', () => {
    const n = 3,
      m = 3;
    const positions: [number, number][] = [
      [0, 0],
      [0, 0],
      [1, 1],
    ];
    const expected = [1, 1, 2]; // second insertion to (0,0) is ignored
    expect(numIslands2(n, m, positions)).toEqual(expected);
  });

  it('should connect diagonally but not merge (no diagonal union)', () => {
    const n = 3,
      m = 3;
    const positions: [number, number][] = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    const expected = [1, 2, 3]; // diagonals don't connect
    expect(numIslands2(n, m, positions)).toEqual(expected);
  });

  it('should merge components when land added in between', () => {
    const n = 3,
      m = 3;
    const positions: [number, number][] = [
      [0, 0],
      [0, 2],
      [0, 1],
    ];
    const expected = [1, 2, 1]; // (0,1) connects (0,0) and (0,2)
    expect(numIslands2(n, m, positions)).toEqual(expected);
  });
});
