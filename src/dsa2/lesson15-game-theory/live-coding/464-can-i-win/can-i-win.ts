export function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  const totalSum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
  if (totalSum < desiredTotal) return false;
  if (desiredTotal <= 0) return true;

  const dp: number[] = Array(1 << maxChoosableInteger).fill(-1); // not calculated net
  const initialState = (1 << maxChoosableInteger) - 1; // all numbers are available to select

  function calc(state: number, curSum: number): number {
    if (curSum >= desiredTotal) return 0; // opponent is already win, we lose
    if (dp[state] !== -1) return dp[state];

    for (let i = 1; i <= maxChoosableInteger; i++) {
      if ((state >> (i - 1)) & 1) {
        // check 1 at ith bit
        const nextState = state ^ (1 << (i - 1)); // flip to 0 because we selected
        const nextSum = curSum + i;
        const opponentWins = calc(nextState, nextSum);

        if (opponentWins === 0) {
          dp[state] = 1;
          return 1;
        }
      }
    }

    dp[state] = 0;
    return 0;
  }

  return calc(initialState, 0) === 1;
}
