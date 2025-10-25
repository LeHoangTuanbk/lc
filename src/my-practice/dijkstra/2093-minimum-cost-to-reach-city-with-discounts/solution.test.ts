import { minimumCostWithDiscount } from './solution';

describe('functionName', () => {
  test('basic examples', () => {
    expect(
      minimumCostWithDiscount(
        5,
        [
          [0, 1, 4],
          [2, 1, 3],
          [1, 4, 11],
          [3, 2, 3],
          [3, 4, 2],
        ],
        1,
      ),
    ).toBe(9);

    expect(
      minimumCostWithDiscount(
        4,
        [
          [1, 3, 17],
          [1, 2, 7],
          [3, 2, 5],
          [0, 1, 6],
          [3, 0, 20],
        ],
        3,
      ),
    ).toBe(8);
  });

  test('no discounts available (discount = 0)', () => {
    expect(
      minimumCostWithDiscount(
        3,
        [
          [0, 1, 5],
          [1, 2, 10],
        ],
        0,
      ),
    ).toBe(15); // 0 → 1 → 2: 5 + 10
  });

  test('discount not needed', () => {
    expect(
      minimumCostWithDiscount(
        3,
        [
          [0, 1, 1],
          [1, 2, 1],
        ],
        1,
      ),
    ).toBe(2); // 0 → 1 → 2, no need for discount
  });

  test('use discount for cheapest edge', () => {
    expect(
      minimumCostWithDiscount(
        3,
        [
          [0, 1, 100],
          [1, 2, 1],
        ],
        1,
      ),
    ).toBe(51); // discount better on edge 100 → 50 + 1
  });

  test('use discount for most expensive edge', () => {
    expect(
      minimumCostWithDiscount(
        3,
        [
          [0, 1, 1],
          [1, 2, 100],
        ],
        1,
      ),
    ).toBe(51); // discount better on edge 100 → 1 + 50
  });

  test('multiple paths exist, best with discount', () => {
    expect(
      minimumCostWithDiscount(
        4,
        [
          [0, 1, 5],
          [1, 3, 10],
          [0, 2, 1],
          [2, 3, 100],
        ],
        1,
      ),
    ).toBe(10); // path: 0→1→3, use discount on 10 → 5+5=10; or 0→2→3 (1+50=51)
  });

  test('not reachable (disconnected)', () => {
    expect(
      minimumCostWithDiscount(
        4,
        [
          [0, 1, 3],
          [2, 3, 4],
        ],
        1,
      ),
    ).toBe(Infinity); // 0→1 and 2→3, but 0 can't reach 3
  });

  test('discount = max, force usage on all', () => {
    expect(
      minimumCostWithDiscount(
        4,
        [
          [0, 1, 10],
          [1, 2, 10],
          [2, 3, 10],
        ],
        3,
      ),
    ).toBe(15); // discount all: 5+5+5
  });

  test('longer graph with repeated edges', () => {
    expect(
      minimumCostWithDiscount(
        6,
        [
          [0, 1, 3],
          [1, 2, 4],
          [2, 3, 5],
          [3, 4, 6],
          [4, 5, 7],
          [1, 5, 100],
        ],
        1,
      ),
    ).toBe(3 + 4 + 5 + 6 + Math.floor(7 / 2)); // Use discount on edge 7
  });
});
