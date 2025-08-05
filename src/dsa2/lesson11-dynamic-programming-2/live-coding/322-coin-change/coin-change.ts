export function coinChange(coins: number[], amount: number): number {
  const n = coins.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(Infinity));

  dp[0][0];

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 0;
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
      }
    }
  }

  return dp[n][amount] < Infinity ? dp[n][amount] : -1;
}

export function coinChange15(coins: number[], amount: number): number {
  const n = coins.length;

  let prev: number[] = Array(amount + 1).fill(Infinity);
  prev[0] = 0;

  for (let i = 1; i <= n; i++) {
    const current = [...prev];
    const coin = coins[i - 1];
    for (let j = coin; j <= amount; j++) {
      current[j] = prev[j];
      current[j] = Math.min(current[j], current[j - coin] + 1);
    }
    prev = current;
  }

  return prev[amount] < Infinity ? prev[amount] : -1;
}

function coinChange2(coins: number[], amount: number): number {
  const n = coins.length;

  // const dp: number[][] = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(Infinity));

  const dp: number[] = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // dp[0][0];

  for (let i = 1; i <= n; i++) {
    // dp[i][0] = 0;
    for (let j = 1; j <= amount; j++) {
      // dp[i][j] = dp[i - 1][j];
      dp[j] = dp[j];
      if (coins[i - 1] <= j) {
        // dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
      } // else dp[j] = dp[j] cua luc i - 1
    }
  }

  return dp[amount] < Infinity ? dp[amount] : -1;
}

/* 
Neu truong hop moi item chi duoc chon 1 lan thi duyet tu amount -> 1 thi se lam duoc. 

for(let i = 0; i <= n; j++) {
  const coin = coins[i];
  for(let j = amount; j >= coin; j--) {
    dp[j] = Math.min(dp[j], dp[j-coin] + 1) // Do luc any, o lan duyet i nay, dp[j-coin] thi van lay gia tri cua lan cu, nen voi luong amount j, moi dong xu chi duoc chon toi da 1 lan. 
  }
}
*/
