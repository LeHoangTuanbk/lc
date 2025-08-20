for (let am = 1; am <= target; am++) {
  for (const num of stoneValue) {
    if (num <= am) dp[am] += dp[am - num];
  }
}
