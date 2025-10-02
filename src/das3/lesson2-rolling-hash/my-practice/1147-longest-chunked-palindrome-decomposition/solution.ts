export function longestDecomposition(text: string): number {
  let left = '';
  let right = '';
  let res = 0;
  const n = text.length;

  for (let i = 0; i < n; i++) {
    left += text[i];
    right = text[n - 1 - i] + right;

    if (left === right) {
      res++;
      left = '';
      right = '';
    }
  }

  return res;
}
