import { findMinimumConference } from './minimum-conference';

describe('findMinimumConference', () => {
  it('Test Case 1 - overlapping', () => {
    expect(
      findMinimumConference([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(2);
  });

  it('Test Case 2 - no overlap', () => {
    expect(
      findMinimumConference([
        [7, 10],
        [2, 4],
      ]),
    ).toBe(1);
  });

  it('Test Case 3 - all overlap at start', () => {
    expect(
      findMinimumConference([
        [1, 10],
        [2, 9],
        [3, 8],
        [4, 7],
      ]),
    ).toBe(4);
  });

  it('Test Case 4 - sequential', () => {
    expect(
      findMinimumConference([
        [0, 5],
        [5, 10],
        [10, 15],
        [15, 20],
      ]),
    ).toBe(1);
  });

  it('Test Case 5 - partial overlap', () => {
    expect(
      findMinimumConference([
        [0, 10],
        [5, 15],
        [12, 20],
      ]),
    ).toBe(2);
  });

  it('Test Case 6 - nested overlap', () => {
    expect(
      findMinimumConference([
        [1, 5],
        [2, 6],
        [3, 7],
        [4, 8],
      ]),
    ).toBe(4);
  });

  it('Test Case 7 - same time', () => {
    expect(
      findMinimumConference([
        [1, 5],
        [1, 5],
        [1, 5],
      ]),
    ).toBe(3);
  });

  it('Test Case 8 - zero duration', () => {
    expect(
      findMinimumConference([
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    ).toBe(1);
  });

  it('Test Case 9 - long + short intervals mix', () => {
    expect(
      findMinimumConference([
        [1, 100],
        [2, 3],
        [4, 5],
        [6, 7],
      ]),
    ).toBe(2);
  });

  it('Test Case 10 - empty input', () => {
    expect(findMinimumConference([])).toBe(0);
  });

  it('Test Case 11 - large input same slot', () => {
    const input = Array.from({ length: 1000 }, (_, i) => [0, 100]);
    expect(findMinimumConference(input)).toBe(1000);
  });

  it('Test Case 12 - staggered intervals', () => {
    expect(
      findMinimumConference([
        [1, 4],
        [2, 5],
        [3, 6],
        [4, 7],
      ]),
    ).toBe(3);
  });

  it('Test Case 13 - late start after early end', () => {
    expect(
      findMinimumConference([
        [1, 3],
        [3, 5],
        [5, 7],
        [2, 6],
      ]),
    ).toBe(2);
  });
});
