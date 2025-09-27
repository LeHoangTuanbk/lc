import { dropFigure } from './q3';

describe('dropFigure', () => {
  it('example from CodeSignal blog: no row filled', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ];
    const figure = [
      [1, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
    ];
    expect(dropFigure(field, figure)).toBe(-1);
  });

  it('simple row fill at position 0', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 1, 1, 0],
    ];
    const figure = [
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ];
    const res = dropFigure(field, figure);
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(1);
  });

  it('already full row → any pos valid', () => {
    const field = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    const figure = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    // vì row đã đầy, return ngay pos 0
    expect(dropFigure(field, figure)).toBe(0);
  });

  it('narrow field width=3 exactly fits figure', () => {
    const field = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const figure = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(dropFigure(field, figure)).toBe(0);
  });

  it('no possible fill', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const figure = [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ];
    expect(dropFigure(field, figure)).toBe(-1);
  });

  it('field tall enough, figure drops to bottom and fills last row', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ];
    const figure = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(dropFigure(field, figure)).toBe(1); // pos=1 sẽ tạo full row = [1,1,1,1]
  });
});
