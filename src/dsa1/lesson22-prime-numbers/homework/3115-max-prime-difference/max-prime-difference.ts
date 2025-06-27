function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

export function maximumPrimeDifference(nums: number[]): number {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      start = i;
      break;
    }
  }
  let end = start;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (isPrime(nums[i])) {
      end = i;
      break;
    }
  }

  return end - start;
}

export function maximumPrimeDifference2(nums: number[]): number {
  /* 
  1 <= nums.length <= 3 * 105
  1 <= nums[i] <= 100
  */
  const n = 101;
  const isPrime: boolean[] = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime[nums[i]]) {
      start = i;
      break;
    }
  }
  let end = start;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (isPrime[nums[i]]) {
      end = i;
      break;
    }
  }

  return end - start;
}

const nums = [4, 2, 9, 5, 3];

console.log(maximumPrimeDifference2(nums));
