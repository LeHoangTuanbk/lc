export function canSeePersonsCount(heights: number[]): number[] {
  const st: number[] = [];
  const n = heights.length;
  const res: number[] = Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && heights[i] > heights[st.at(-1)]) {
      st.pop();
    }

    res[i] = st.length === 0 ? n - 1 - i : st.at(-1) - i;
    st.push(i);
  }

  return res;
}

const heights = [10, 6, 8, 5, 11, 9];
console.log(canSeePersonsCount(heights)); //  [3,1,2,1,1,0]
