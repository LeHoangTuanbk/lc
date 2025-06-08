import { canAttend, Interval } from './can-attend';

describe('canAttend', () => {
  it('should return false if there is an overlapping interval', () => {
    const intervals: Interval[] = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    expect(canAttend(intervals)).toBe(false);
  });

  it('should return true if there is no overlap', () => {
    const intervals: Interval[] = [
      [7, 10],
      [2, 4],
    ];
    expect(canAttend(intervals)).toBe(true);
  });
});
