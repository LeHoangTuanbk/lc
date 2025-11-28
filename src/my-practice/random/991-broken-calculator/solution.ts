export function brokenCalc(startValue: number, target: number): number {
  let ops = 0;

  while (target > startValue) {
    if (target % 2 === 1) {
      target += 1;
    } else {
      target /= 2;
    }
    ops++;
  }
  return ops + (startValue - target);
}
