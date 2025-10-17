const MOD = 1_000_000_000 + 7;
export function totalStrength(strength: number[]): number {
  const nums = strength;
  const n = strength.length;
  // prefix sum
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  const pprefix = new Array(n + 2).fill(0);
  for (let i = 0; i <= n; i++) {
    pprefix[i + 1] = pprefix[i] + prefixSum[i];
  }
  // next smaller, prev smaller
  const nextSmaller = new Array(n).fill(n);
  let st: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && nums[i] <= nums[st.at(-1)]) {
      st.pop();
    }
    nextSmaller[i] = st.length === 0 ? n : st.at(-1);
    st.push(i);
  }

  st = [];
  const preSmaller = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && nums[i] < nums[st.at(-1)]) {
      st.pop();
    }
    preSmaller[i] = st.length === 0 ? -1 : st.at(-1);
    st.push(i);
  }
  // calculate sum
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const l = preSmaller[i];
    const r = nextSmaller[i];

    const rightSum = (pprefix[r + 1] - pprefix[i + 1] - (r - i) * prefixSum[i + 1]) % MOD;
    const leftSum = (pprefix[i + 1] - pprefix[l + 1] - (i - l) * prefixSum[l + 1]) % MOD;
    const contrib = ((nums[i] * (rightSum - leftSum + MOD)) % MOD) % MOD;

    sum = (sum + contrib) % MOD;
  }
  return sum;
}

const strength = [1, 3, 1, 2];

console.log(totalStrength(strength));
