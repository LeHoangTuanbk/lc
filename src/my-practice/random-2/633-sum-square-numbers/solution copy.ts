export function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) return true;
    if (sum < c) left++;
    else right--;
  }
  return false;
}

const c = 0;
console.log(judgeSquareSum(c));
