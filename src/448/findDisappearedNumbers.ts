function findDisappearedNumbers1(nums: number[]): number[] {
  const lengthOfNums = nums.length;
  const array1ToN: boolean[] = Array(lengthOfNums + 1).fill(0);
  for (let i = 0; i < lengthOfNums; i++) {
    array1ToN[nums[i]] = true;
  }
  let res: number[] = [];
  for (let i = 1; i <= lengthOfNums; i++) {
    if (!array1ToN[i]) {
      res.push(i + 1);
    }
  }
  return res;
}

function findDisappearedNumbers(nums: number[]): number[] {
  const lengthOfNums = nums.length;
  for (let i = 0; i < lengthOfNums; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
  }
  let res: number[] = [];
  for (let i = 0; i < lengthOfNums; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
