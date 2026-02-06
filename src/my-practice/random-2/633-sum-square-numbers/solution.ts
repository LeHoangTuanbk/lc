export function judgeSquareSum(c: number): boolean {
  const LIMIT = Math.sqrt(c);
  for (let a = 0; a <= LIMIT; a++) {
    const b = Math.sqrt(c - a * a);
    if (b % 1 === 0) return true;
  }
  return false;
}

const c = 0;
console.log(judgeSquareSum(c));
