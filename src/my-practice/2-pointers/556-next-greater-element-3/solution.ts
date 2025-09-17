export function nextGreaterElement(n: number): number {
  const digits: number[] = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  digits.reverse();

  const len = digits.length;

  let i = len - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;

  let j = len - 1;
  while (j >= 0 && digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let left = i + 1,
    right = len - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    res = res * 10 + digits[i];
  }

  return res <= 2147483647 ? res : -1;
}

console.log(nextGreaterElement(12));
