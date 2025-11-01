export function lastRemaining(n: number): number {
  let head = 1,
    step = 1,
    leftToRight = true;

  while (n > 1) {
    if (leftToRight || n % 2 === 1) {
      head += step;
    }

    n = Math.floor(n / 2);
    step *= 2;
    leftToRight = !leftToRight;
  }

  return head;
}
