function guessNumber(n: number): number {
  let low = 1,
    high = n;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let guessResult = guess(mid);
    if (guessResult === 0) {
      return mid;
    } else if (guessResult === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
