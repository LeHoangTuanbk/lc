import { candyCrush } from './solution';

describe('candyCrush', () => {
  it('example from LeetCode statement', () => {
    const board = [
      [110, 5, 112, 113, 114],
      [210, 211, 5, 213, 214],
      [310, 311, 3, 313, 314],
      [410, 411, 412, 5, 414],
      [5, 1, 512, 3, 3],
      [610, 4, 1, 613, 614],
      [710, 1, 2, 713, 714],
      [810, 1, 2, 1, 1],
      [1, 1, 2, 2, 2],
      [4, 1, 4, 4, 1014],
    ];
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [110, 0, 0, 0, 114],
      [210, 0, 0, 0, 214],
      [310, 0, 0, 113, 314],
      [410, 0, 0, 213, 414],
      [610, 211, 112, 313, 614],
      [710, 311, 412, 613, 714],
      [810, 411, 512, 713, 1014],
    ];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('horizontal crush only', () => {
    const board = [
      [1, 1, 1],
      [2, 3, 4],
      [5, 6, 7],
    ];
    const expected = [
      [0, 0, 0],
      [2, 3, 4],
      [5, 6, 7],
    ];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('vertical crush only', () => {
    const board = [
      [1, 2, 3],
      [1, 5, 6],
      [1, 8, 9],
    ];
    const expected = [
      [0, 2, 3],
      [0, 5, 6],
      [0, 8, 9],
    ];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('cascade crush (two rounds)', () => {
    const board = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ];
    // Round 1: all rows crushed => empty.
    // Round 2: nothing left.
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('already stable board', () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(candyCrush(board)).toEqual(board);
  });

  it('single column crush', () => {
    const board = [[7], [7], [7], [1]];
    const expected = [[0], [0], [0], [1]];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('single row crush', () => {
    const board = [[9, 9, 9, 9]];
    const expected = [[0, 0, 0, 0]];
    expect(candyCrush(board)).toEqual(expected);
  });

  it('whole board same number', () => {
    const board = [
      [5, 5],
      [5, 5],
      [5, 5],
    ];
    const expected = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    expect(candyCrush(board)).toEqual(expected);
  });
});
