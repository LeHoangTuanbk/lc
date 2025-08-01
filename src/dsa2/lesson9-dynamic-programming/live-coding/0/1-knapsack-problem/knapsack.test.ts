import { knapsack } from './solution';

describe('0/1 Knapsack', () => {
  it('Test case 1 - standard case', () => {
    const profits = [60, 100, 120];
    const weights = [10, 20, 30];
    const W = 50;
    expect(knapsack(weights, profits, W)).toBe(220); // chọn item 1 và 2: 100 + 120
  });

  it('Test case 2 - all weights = 1, W = 2', () => {
    const profits = [10, 20, 30];
    const weights = [1, 1, 1];
    const W = 2;
    expect(knapsack(weights, profits, W)).toBe(50); // chọn item 2 và 3
  });

  it('Test case 3 - No items fit', () => {
    const profits = [10, 20];
    const weights = [5, 6];
    const W = 4;
    expect(knapsack(weights, profits, W)).toBe(0); // không có item nào vừa
  });

  it('Edge case - zero capacity', () => {
    const profits = [10, 20, 30];
    const weights = [1, 2, 3];
    const W = 0;
    expect(knapsack(weights, profits, W)).toBe(0); // balo trống
  });

  it('Edge case - empty items', () => {
    expect(knapsack([], [], 10)).toBe(0); // không có item nào
  });
});
