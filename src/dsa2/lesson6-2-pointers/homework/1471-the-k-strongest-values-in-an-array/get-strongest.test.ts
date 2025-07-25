import { getStrongest } from './get-strongest'; // giả sử bạn tách hàm ra

describe('getStrongest', () => {
  it('case 1', () => {
    expect(getStrongest([1, 2, 3, 4, 5], 2).sort((a, b) => a - b)).toEqual([1, 5]);
  });

  it('case 2', () => {
    expect(getStrongest([1, 1, 3, 5, 5], 2)).toEqual([5, 5]);
  });

  it('case 3', () => {
    const res = getStrongest([6, 7, 11, 7, 6, 8], 5);
    expect(res.sort((a, b) => a - b)).toEqual([6, 6, 7, 8, 11].sort((a, b) => a - b));
  });

  it('custom case: negative numbers', () => {
    const arr = [-2, -4, -6, -8, -9, -7, -5, -3, -1];
    const k = 3;
    const result = getStrongest(arr, k);
    expect(result.sort((a, b) => a - b)).toEqual([-9, -2, -1].sort((a, b) => a - b));
  });

  it('all elements same', () => {
    expect(getStrongest([3, 3, 3, 3], 2)).toEqual([3, 3]);
  });

  it('single element', () => {
    expect(getStrongest([10], 1)).toEqual([10]);
  });
});
