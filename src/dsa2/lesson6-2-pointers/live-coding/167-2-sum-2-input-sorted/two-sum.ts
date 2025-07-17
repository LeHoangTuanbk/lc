function twoSum(numbers: number[], target: number): number[] {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum == target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    }
  }
}
