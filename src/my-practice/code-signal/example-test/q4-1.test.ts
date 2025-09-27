import { countPairsPowerOfTwo } from './q4-1';

describe('countPairsPowerOfTwo', () => {
  it('example 1: [1, -1, 2, 3]', () => {
    expect(countPairsPowerOfTwo([1, -1, 2, 3])).toBe(5);
  });

  it('example 2: single element [2]', () => {
    expect(countPairsPowerOfTwo([2])).toBe(1); // 2+2=4 (2^2)
  });

  it('example 3: [-2, -1, 0, 1, 2]', () => {
    expect(countPairsPowerOfTwo([-2, -1, 0, 1, 2])).toBe(5);
  });

  it('all positives no match', () => {
    expect(countPairsPowerOfTwo([5, 7, 11])).toBe(1);
  });

  it('check i=j cases explicitly', () => {
    expect(countPairsPowerOfTwo([0, 1, 3])).toBe(3);
  });

  it('random mix with multiple powers', () => {
    const arr = [1, 2, 5, 7];
    expect(countPairsPowerOfTwo(arr)).toBe(3);
  });
});
