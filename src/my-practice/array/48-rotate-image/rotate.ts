export function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // Số lớp cần xoay
  const layers = Math.floor(n / 2);

  for (let layer = 0; layer < layers; layer++) {
    const last = n - 1 - layer;

    // Xoay từng phần tử trong lớp hiện tại
    for (let i = layer; i < last; i++) {
      const offset = i - layer;

      // Lưu giá trị phía trên
      const top = matrix[layer][i];

      // Trái -> Trên
      matrix[layer][i] = matrix[last - offset][layer];

      // Dưới -> Trái
      matrix[last - offset][layer] = matrix[last][last - offset];

      // Phải -> Dưới
      matrix[last][last - offset] = matrix[i][last];

      // Trên -> Phải
      matrix[i][last] = top;
    }
  }
}

//TODO What is the Math formula to rotate matrix?
