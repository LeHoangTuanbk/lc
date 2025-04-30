export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const maxRange = 1001;
  let countSort = Array(maxRange).fill(0);

  for (let item of arr1) {
    countSort[item]++;
  }

  let idx = 0;
  for (let item of arr2) {
    while (countSort[item]-- > 0) {
      arr1[idx++] = item;
    }
  }
  for (let i = 0; i < maxRange; i++) {
    while (countSort[i]-- > 0) {
      arr1[idx++] = i;
    }
  }

  return arr1;
}
