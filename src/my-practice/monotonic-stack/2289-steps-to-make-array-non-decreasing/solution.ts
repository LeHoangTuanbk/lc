export function totalSteps(nums: number[]): number {
  const n = nums.length;
  const st: { val: number; step: number }[] = [];
  let res = 0;

  for (let i = 0; i < n; i++) {
    let curStep = 0;

    while (st.length > 0 && nums[i] >= st.at(-1).val) {
      curStep = Math.max(curStep, st.at(-1).step);
      st.pop();
    }

    if (st.length === 0) curStep = 0;
    else curStep += 1;

    res = Math.max(res, curStep);
    st.push({ val: nums[i], step: curStep });
  }
  return res;
}

const nums = [10, 1, 2, 3, 4, 5, 6, 1, 2, 3];
console.log(totalSteps(nums));
