export function mostCompetitive(nums: number[], k: number): number[] {
  const n = nums.length;
  let remove = n - k;

  const st: number[] = [];
  for (const digit of nums) {
    while (st.length > 0 && remove > 0 && digit < st.at(-1)) {
      st.pop();
      remove--;
    }
    st.push(digit);
  }

  while (remove > 0) {
    st.pop();
    remove--;
  }

  return st;
}

const nums = [2, 4, 3, 3, 5, 4, 9, 6],
  k = 4;
console.log(mostCompetitive(nums, k));
