function isPowerOfThree3(n: number): boolean {
  return (Math.log(n) / Math.log(3)) % 1 < 10 * Number.EPSILON;
}

// console.log(isPowerOfThree(43046721));
// Lesson at class
console.log(Math.pow(1.6, 5));

// 1. Fibonacci : O(n), O(1)
function fib2(n: number): number {
  let a = 0,
    b = 1;
  if (n === 0) return a;
  if (n === 1) return b;
  let fn = 0;
  for (let i = 2; i <= n; i++) {
    fn = a + b;
    a = b;
    b = fn;
  }
  return fn;
}

function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// 326 Power of three

function isPowerOfThree2(n: number): boolean {
  if (n < 1) return false;
  while (n >= 3) {
    n = n / 3;
  }
  return n === 1;
}

function isPowerOfThree(n: number): boolean {
  if (n == 1) return true;
  if (n === 0 || n % 3 != 0) return false;
  return isPowerOfThree(n / 3);
}
