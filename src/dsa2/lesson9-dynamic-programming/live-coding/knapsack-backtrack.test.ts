import { knapsackBackTrack } from '.';

describe('0/1 Knapsack', () => {
  it('Test case 1', () => {
    const profits = [60, 100, 120];
    const weights = [10, 20, 30];
    const W = 50;
    expect(knapsackBackTrack(W, profits, weights)).toBe(220);
    // Chọn item 1 và 2: 100 + 120
  });

  it('Test case 2', () => {
    const val = [10, 20, 30];
    const wt = [1, 1, 1];
    const W = 2;
    expect(knapsackBackTrack(W, val, wt)).toBe(50); // chọn item 2 và 3
  });

  it('Test case 3 - No items fit', () => {
    const val = [10, 20];
    const wt = [5, 6];
    const W = 4;
    expect(knapsackBackTrack(W, val, wt)).toBe(0); // không item nào vừa
  });

  it('Edge case - zero capacity', () => {
    const val = [10, 20, 30];
    const wt = [1, 2, 3];
    const W = 0;
    expect(knapsackBackTrack(W, val, wt)).toBe(0);
  });
});
