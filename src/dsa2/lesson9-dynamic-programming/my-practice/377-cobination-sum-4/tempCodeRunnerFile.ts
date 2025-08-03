  for (let am = 1; am <= target; am++) {
    for (const num of nums) {
      if (num <= am) dp[am] += dp[am - num];
    }
  }