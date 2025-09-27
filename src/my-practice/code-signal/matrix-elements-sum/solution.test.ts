import { matrixElementsSum } from './solution';

describe('matrixElementsSum', () => {
  it('Example case 1', () => {
    const matrix = [
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ];
    expect(matrixElementsSum(matrix)).toBe(9);
  });

  it('Example case 2', () => {
    const matrix = [
      [1, 1, 1, 0],
      [0, 5, 0, 1],
      [2, 1, 3, 10],
    ];
    expect(matrixElementsSum(matrix)).toBe(9);
  });

  it('All positive no zeros', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(matrixElementsSum(matrix)).toBe(45);
  });

  it('Zeros block lower rooms', () => {
    const matrix = [
      [4, 0, 1],
      [2, 5, 0],
      [3, 1, 3],
    ];
    // Cột 0: 4+2+3=9
    // Cột 1: 0 → bỏ luôn 5,1
    // Cột 2: 1+0 → bỏ 3
    expect(matrixElementsSum(matrix)).toBe(10);
  });

  it('Single row', () => {
    const matrix = [[1, 0, 2, 3]];
    expect(matrixElementsSum(matrix)).toBe(6);
  });

  it('Single column', () => {
    const matrix = [[1], [0], [2], [3]];
    // cột bị block sau 0
    expect(matrixElementsSum(matrix)).toBe(1);
  });

  it('All zeros', () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];
    expect(matrixElementsSum(matrix)).toBe(0);
  });

  it('Large numbers', () => {
    const matrix = [
      [100, 200, 300],
      [400, 0, 600],
      [700, 800, 900],
    ];
    // cột 0: 100+400+700=1200
    // cột 1: 200 → 0 block luôn 800
    // cột 2: 300+600+900=1800
    expect(matrixElementsSum(matrix)).toBe(1200 + 200 + 1800);
  });
});
