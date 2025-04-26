function isHappy(n: number): boolean {
  let seen = new Set<number>();
  function isHappyRecursive(n: number): boolean {
    if (n === 1) return true;
    if (seen.has(n)) return false;

    seen.add(n);
    const nextNumber = calculateSumDigitSquare(n);
    return isHappyRecursive(nextNumber);
  }

  function calculateSumDigitSquare(n: number): number {
    let sumDigitSquare = 0;
    while (n > 0) {
      sumDigitSquare += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    return sumDigitSquare;
  }
  return isHappyRecursive(n);
}
