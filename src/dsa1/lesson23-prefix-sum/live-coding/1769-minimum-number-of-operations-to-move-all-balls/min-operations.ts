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

/* 
Bài này có thể kiểu giải bằng các một chút Math, phá bỏ dấu abs(i - j), rồi tính sum, count tổng. Sau đó dùng công thức sumBefore, countBefore thì ra cũng giảm được xuống O(n). Mất thời gian phân tích một chút thôi. Đúng tinh thần của prefix sum hơn. 
*/
