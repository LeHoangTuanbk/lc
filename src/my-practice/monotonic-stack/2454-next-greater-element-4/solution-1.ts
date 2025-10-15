export function secondGreaterElement(nums: number[]): number[] {
  const n = nums.length;
  const res = Array(n).fill(-1);

  const firstStack: number[] = [];
  const secondStack: number[] = [];

  let buffer: number[] = [];

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    while (secondStack.length > 0 && val > nums[secondStack[secondStack.length - 1]]) {
      const idx = secondStack.pop()!;
      res[idx] = val;
    }

    buffer = [];
    while (firstStack.length > 0 && val > nums[firstStack[firstStack.length - 1]]) {
      buffer.push(firstStack.pop());
    }

    for (let j = buffer.length - 1; j >= 0; j--) {
      secondStack.push(buffer[j]);
    }

    firstStack.push(i);
  }

  return res;
}

const nums = [2, 4, 0, 9, 6];
console.log(secondGreaterElement(nums));
