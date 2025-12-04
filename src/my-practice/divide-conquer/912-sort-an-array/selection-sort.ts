export function sortArray(nums: number[]): number[] {
  insertionSort(nums);
  return nums;
}

function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]; // Lá bài cần chèn
    let j = i - 1; // Vị trí so sánh (trong phần đã sorted)

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Dời phần tử lớn sang phải
      j--;
    }

    arr[j + 1] = current;
  }
}

const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
