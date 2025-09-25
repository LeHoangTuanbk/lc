export function construct2DArray(original: number[], m: number, n: number): number[][] {
  const size = original.length;
  if (size !== m * n) return [];
  const res: number[][] = Array.from({ length: m }, () => Array(n));
  for (let i = 0; i < size; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    res[row][col] = original[i];
  }
  return res;
}

const original = [1, 2, 3, 4],
  m = 2,
  n = 2;
console.log(construct2DArray(original, m, n));
/* 
Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

Mà cho em hỏi vòng này sẽ đánh giá kết quả như thế nào? 
Tại em thấy nếu mà phỏng vấn kiểu đưa một cái case thực tế rồi bảo làm luôn trong vòng 10-15 phút interview, yêu cầu ra một results gì đó thì rõ ràng là rất khó. Bởi để làm ra một sản phẩm ít nhất về mặt giao diện cần công sức của nhiều người, và làm trong nhiều tháng để hàon thành. Làm sao mà trong 10-15 phút interview mà có thể ra results đánh giá được? 
*/
