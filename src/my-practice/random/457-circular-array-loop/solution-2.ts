export function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length;

  const nextIdex = (i: number) => (((i + nums[i]) % n) + n) % n;

  const isValid = (i: number, dir: boolean): boolean => nums[i] !== 0 && nums[i] > 0 === dir;

  const hasCycleFrom = (start: number): boolean => {
    let slow = start,
      fast = start;
    const dir = nums[start] > 0;

    while (true) {
      const nextSlow = nextIdex(slow);
      if (!isValid(nextSlow, dir)) return false;

      const nextFast = nextIdex(fast);
      if (!isValid(nextFast, dir)) return false;

      const nextFast2 = nextIdex(nextFast);
      if (!isValid(nextFast2, dir)) return false;

      slow = nextSlow;
      fast = nextFast2;

      if (slow === fast) {
        if (slow === nextIdex(slow)) return false;
        return true;
      }
    }
  };

  const makeInvalidPath = (start: number): void => {
    let i = start;
    const dir = nums[start] > 0;

    while (isValid(i, dir)) {
      const next = nextIdex(i);
      nums[i] = 0;
      i = next;
    }
  };

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;

    if (hasCycleFrom(i)) return true;
    makeInvalidPath(i);
  }
  return false;
}
