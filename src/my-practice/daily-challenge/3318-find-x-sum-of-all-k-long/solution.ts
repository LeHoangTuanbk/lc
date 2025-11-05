export function findXSum(nums: number[], k: number, x: number): number[] {
  const n = nums.length;
  const res: number[] = Array(n - k + 1).fill(0);
  const preSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  const freq = new Map<number, number>();

  for (let i = 0; i < n - k + 1; i++) {
    for (let j = i; j < i + k; j++) {
      freq.set(nums[j], (freq.get(nums[j]) ?? 0) + 1);
    }

    if (freq.size <= x) {
      res[i] = preSum[i + k] - preSum[i];
    } else {
      const freqArr = [...freq.entries()]
        .sort((a, b) => {
          if (a[1] === b[1]) return b[0] - a[0];
          else return b[1] - a[1];
        })
        .slice(0, x);

      res[i] = freqArr.reduce((sum, [val, cnt]) => sum + val * cnt, 0);
    }

    freq.clear();
  }

  return res;
}

function test1() {
  const nums = [1, 1, 2, 2, 3, 4, 2, 3],
    k = 6,
    x = 2;
  console.log(findXSum(nums, k, x));
}

function test2() {
  const nums = [3, 8, 7, 8, 7, 5],
    k = 2,
    x = 2;
  console.log(findXSum(nums, k, x));
}

test1();
// test2();
