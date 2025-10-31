export function myPow(x: number, n: number): number {
  if (n == 0) return 1;
  if (n > 0) return pow(x, n);
  return 1 / pow(x, -n);
}

function pow(x: number, n: number) {
  if (n === 1) return x;
  const half = Math.floor(n / 2);
  const onePart = myPow(x, half);
  if (n % 2 === 0) {
    return onePart * onePart;
  } else {
    return onePart * onePart * x;
  }
}

console.log(myPow(2, 10));
