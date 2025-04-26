export function isPowerOfFour2(n: number): boolean {
  if (n == 1) return true;
  if (n == 0 || n % 4 != 0) return false;
  return isPowerOfFour2(n / 4);
}

export function isPowerOfFour(n: number): boolean {
  while (n > 1) {
    n /= 4;
  }
  return n == 1;
}
