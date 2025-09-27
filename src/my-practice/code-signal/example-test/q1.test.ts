import { transformArray } from './q1';

describe('transformArray', () => {
  it('example case', () => {
    expect(transformArray([4, 0, 1, -2, 3])).toEqual([4, 5, -1, 2, 1]);
  });

  it('single element', () => {
    expect(transformArray([7])).toEqual([7]); // 0+7+0
  });

  it('two elements', () => {
    expect(transformArray([1, 2])).toEqual([3, 3]);
    // b[0] = 0+1+2=3, b[1]=1+2+0=3
  });

  it('all zeros', () => {
    expect(transformArray([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it('negative numbers', () => {
    expect(transformArray([-1, -2, -3])).toEqual([-3, -6, -5]);
    // [-1, -2, -3] -> b[0]=0-1-2=-3, b[1]=-1-2-3=-6, b[2]=-2-3+0=-5
  });

  it('longer array', () => {
    expect(transformArray([1, 2, 3, 4, 5])).toEqual([3, 6, 9, 12, 9]);
  });
});
