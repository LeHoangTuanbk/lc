function countBalls(lowLimit: number, highLimit: number): number {
  function digitSum(num: number): number {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  const map = new Map<number, number>();
  for (let i = lowLimit; i <= highLimit; i++) {
    const key = digitSum(i);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map.values()).sort((a, b) => b - a)[0];
}
