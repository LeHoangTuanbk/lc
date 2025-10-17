import { totalStrength } from './solution';

describe('totalStrength', () => {
  const MOD = 1e9 + 7;

  const cases: { input: number[]; expected: number }[] = [
    { input: [1, 3, 1, 2], expected: 44 },
    { input: [5], expected: 25 },
    { input: [2, 2, 2], expected: 24 },
    { input: [1, 2, 3], expected: 33 },
    { input: [3, 2, 1], expected: 33 },
    { input: [0, 0, 0], expected: 0 },
    { input: [4, 2, 3], expected: 41 },
  ];

  test.each(cases)('input: %j → expected: %i', ({ input, expected }) => {
    expect(totalStrength(input) % MOD).toBe(expected);
  });
});
