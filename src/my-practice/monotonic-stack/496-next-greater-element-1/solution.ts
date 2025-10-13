export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }

  const st: number[] = [];
  const n = nums2.length;
  const nextGreaterIndex = Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && nums2[i] > nums2[st.at(-1)]) {
      st.pop();
    }
    nextGreaterIndex[i] = st.length > 0 ? st.at(-1) : -1;
    st.push(i);
  }

  const n1 = nums1.length;
  const res: number[] = Array(n1).fill(-1);
  for (let i = 0; i < n1; i++) {
    const num = nums1[i];
    const indexInNums2 = map.get(num);
    const nextGreaterIdx = nextGreaterIndex[indexInNums2];
    if (nextGreaterIdx !== -1) res[i] = nums2[nextGreaterIdx];
  }

  return res;
}

const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
