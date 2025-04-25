export function rotate(matrix: number[][]): void {
  const neededLayerRotation = Math.floor(matrix.length / 2);
  const n = matrix.length;
  // Rotate from 0 -> neededLayerRotation - 1, sum i + j = n - 1, swap i,j, store the allocated values
}

//TODO What is the Math formula to rotate matrix?

function isPowerOfThree(n: number): boolean {
  return (Math.log(n) / Math.log(3)) % 1 < 10 * Number.EPSILON;
}

console.log(isPowerOfThree(43046721));
// Lesson at class

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
  if (n == 1) return false;
  if (n === 0 || n % 3 != 0) return false;
  return isPowerOfThree(n / 3);
}

// Happy number
const setNumber = new Set();

function isHappy2(n: number): boolean {
  if (n == 1) return true;
  if (setNumber.has(n)) return false;
  setNumber.add(n);
  n = calculateSumDigitSquare(n);
  return isHappy2(n);
}

function calculateSumDigitSquare(n: number): number {
  let sumDigitSquare = 0;
  while (n > 9) {
    sumDigitSquare += n % 10 ^ 2;
    n = n / 10;
  }
  sumDigitSquare += n ^ 2;
  return sumDigitSquare;
}
// KthBit
function findKthBit(n: number, k: number): string {
  function calculateSn(n: number): string {
    if (n == 1) return '0';
    return calculateSn(n - 1) + '1' + revert(invert(calculateSn(n - 1)));
  }
  const s = calculateSn(n);
  return s[k - 1];
}

function revert(s: string): string {
  return s.split('').reverse().join('');
}

function invert(s: string) {
  return s
    .split('')
    .map((c) => {
      if (c === '0') return '1';
      return '0';
    })
    .join('');
}
