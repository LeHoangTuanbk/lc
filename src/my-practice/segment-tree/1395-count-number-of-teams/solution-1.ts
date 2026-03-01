function numTeams(rating: number[]): number {
  const n = rating.length;
  let ans = 0;

  for (let j = 1; j < n - 1; j++) {
    let leftSmall = 0,
      leftBig = 0;
    let rightSmall = 0,
      rightBig = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) leftSmall++;
      else leftBig++;
    }

    for (let k = j + 1; k < n; k++) {
      if (rating[k] > rating[j]) rightBig++;
      else rightSmall++;
    }

    ans += leftSmall * rightBig + leftBig * rightSmall;
  }
  return ans;
}
