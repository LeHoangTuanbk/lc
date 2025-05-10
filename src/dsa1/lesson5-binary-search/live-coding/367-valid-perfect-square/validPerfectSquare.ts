function isPerfectSquare(num: number): boolean {
  if (num == 1) return true;
  let low = 1;
  let high = num / 2;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let s = mid * mid;
    if (s == num) {
      return true;
    } else if (s < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
