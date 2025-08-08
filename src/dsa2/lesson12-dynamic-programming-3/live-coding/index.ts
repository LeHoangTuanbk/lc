function minimumDifference(nums: number[]): number {
  const n = nums.length / 2;

  let sum = 0;
  for (const e of nums) sum += e;

  const target = sum / 2;

  //Generate left side
  // const leftPartitionSum: number[][] = Array(n + 1);

  // for (let i = 0; i <= n; i++) leftPartitionSum.push([]);
  const leftPartitionSum: number[][] = Array.from({ length: n + 1 }, () => []);

  for (let mask = 0; mask < 1 << n; ++mask) {
    let sumLeft = 0,
      cnt = 0;
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) != 0) {
        sumLeft += nums[i];
        cnt++;
      }
    }
    leftPartitionSum[cnt].push(sumLeft);
  }

  for (let i = 0; i <= n; i++) {
    leftPartitionSum[i].sort((a, b) => a - b);
  }

  //Gen right side + find best left
  let best = Infinity;
  for (let mask = 0; mask < 1 << n; ++mask) {
    let sumRight = 0,
      cnt = 0;
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) != 0) {
        sumRight += nums[i + n];
        cnt++;
      }
    }

    // find best left
    const leftSums: number[] = leftPartitionSum[n - cnt];
    //binary search here
    let idx = binarySearch(leftSums, target - sumRight);
    if (idx < 0) idx = -idx - 1;
    if (idx < leftSums.length) {
      const sumArr1 = leftSums[idx] + sumRight;
      const diff = Math.abs(sum - 2 * sumArr1);
      best = Math.min(best, diff);
    }
    if (idx > 0) {
      --idx;
      const sumArr1 = leftSums[idx] + sumRight;
      const diff = Math.abs(sum - 2 * sumArr1);
      best = Math.min(best, diff);
    }
  }
  return best;
}

function binarySearch(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }

  // Nếu không tìm thấy, trả về vị trí chèn vào theo quy tắc:
  // giống Arrays.binarySearch trong Java (trả về -insertion_point - 1)
  return -lo - 1;
}
/* 
Bài này em đọc slide mới hiểu đến dùng bitmask để generate ra tất cả 2 ^ n khả năng rồi tìm minDiff. Chưa hiểu mấy cái sau ạ

Theo em hiểu thì cách trên có time là 2 ^n * n ^ logn * log n anh nhở? 
*/
