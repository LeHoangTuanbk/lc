// Time: nlogn
export function smallerNumbersThanCurrent2(nums: number[]): number[] {
  let n = nums.length;
  let temp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    temp[i][0] = nums[i];
    temp[i][1] = i;
  }
  temp.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  let res: number[] = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (temp[i][0] != temp[i - 1][0]) {
      res[temp[i][1]] = i;
    } else {
      res[temp[i][1]] = res[temp[i - 1][1]];
    }
  }
  return res;
}

export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const countingSort = Array(101).fill(0);
  for (const num of nums) {
    countingSort[num]++;
  }
  const lessCount = Array(101).fill(0);
  for (let i = 1; i < 101; i++) {
    lessCount[i] = lessCount[i - 1] + countingSort[i - 1];
  }
  return nums.map((num) => lessCount[num]);
}
