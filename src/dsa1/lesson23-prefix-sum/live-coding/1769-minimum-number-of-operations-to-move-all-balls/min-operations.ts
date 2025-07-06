function minOperations(boxes: string): number[] {
  const n = boxes.length;
  const answer: number[] = Array(n).fill(0);
  let operations = 0,
    count = 0;

  for (let i = 0; i < n; i++) {
    answer[i] = operations;
    if (boxes[i] === '1') count++;
    operations += count;
  }

  operations = 0;
  count = 0;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] += operations;
    if (boxes[i] === '1') count++;
    operations += count;
  }

  return answer;
}
