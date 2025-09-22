export function findKthPositive(arr: number[], k: number): number {
  const N = 1001;
  const mark = Array(N).fill(false);
  for (const num of arr) {
    mark[num] = true;
  }

  let i = 1;

  while (true) {
    if (!mark[i]) {
      k--;
      if (k == 0) return i;
    }
    i++;
  }
}

// 1 2 3 4 5 6 7 8 9 10 11
const arr = [8, 17, 23, 34, 37, 42],
  k = 16;

console.log(findKthPositive(arr, k));

/* 
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

*/
