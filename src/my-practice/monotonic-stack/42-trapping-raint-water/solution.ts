export function trap(height: number[]): number {
  const n = height.length;
  const nge = new Array(n).fill(n);
  const st: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && height[st.at(-1)] < height[i]) {
      st.pop();
    }
    nge[i] = st.length === 0 ? n : st.at(-1);
    st.push(i);
  }

  let res = 0;
  const counted = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    const ngeOfI = nge[i];
    if (ngeOfI === n || counted[i]) continue;
    for (let j = i; j < ngeOfI; j++) {
      counted[j] = true;
      res += height[i] - height[j];
    }
  }

  return res;
}

const height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height2));

const height1 = [4, 2, 0, 3, 2, 5];
console.log(trap(height1));
