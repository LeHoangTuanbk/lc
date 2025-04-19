import { maxProfit } from './bestTimeBuyAndSellStock2';

describe('Best time buy and sell stock 2', () => {
  test('All goes up', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
  test('Normal case', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });
});
