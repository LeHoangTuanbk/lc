export function countSmaller(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = Array(n).fill(0);

  const arr: [number, number][] = nums.map((value, index) => [value, index]);

  function mergeSort(arr: [number, number][]): [number, number][] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergeAndCount(left, right);
  }

  function mergeAndCount(left: [number, number][], right: [number, number][]): [number, number][] {
    const merged: [number, number][] = [];
    let i = 0,
      j = 0;
    let rightCount = 0;

    while (i < left.length && j < right.length) {
      if (left[i][0] > right[j][0]) {
        rightCount++;

        merged.push(right[j]);
        j++;
      } else {
        result[left[i][1]] += rightCount;

        merged.push(left[i]);
        i++;
      }
    }

    while (i < left.length) {
      result[left[i][1]] += rightCount;
      merged.push(left[i]);
      i++;
    }
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
    return merged;
  }

  mergeSort(arr);
  return result;
}
