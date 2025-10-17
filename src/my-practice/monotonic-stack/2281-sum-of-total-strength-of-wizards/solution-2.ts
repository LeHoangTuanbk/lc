const MOD = 1_000_000_007n;

export function totalStrength(st: number[]): number {
  const N = st.length;
  const a = st.map(BigInt);

  // prefix[i] = sum of st[0..i-1]
  const prefix = new Array<bigint>(N + 1).fill(0n);
  for (let i = 0; i < N; i++) {
    prefix[i + 1] = (prefix[i] + a[i]) % MOD;
  }

  // prefix_sum[i] = sum of prefix[0..i-1]
  const prefixSum = new Array<bigint>(N + 2).fill(0n);
  for (let i = 0; i <= N; i++) {
    prefixSum[i + 1] = (prefixSum[i] + prefix[i]) % MOD;
  }

  // left[i] = first index to the left < st[i]
  const left = new Array<number>(N).fill(-1);
  const stack: number[] = [];
  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  // right[i] = first index to the right <= st[i]
  const right = new Array<number>(N).fill(N);
  stack.length = 0;
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length > 0 && a[stack[stack.length - 1]] > a[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? N : stack[stack.length - 1];
    stack.push(i);
  }

  let res = 0n;

  for (let i = 0; i < N; i++) {
    const l = left[i];
    const r = right[i];

    const leftCount = BigInt(i - l);
    const rightCount = BigInt(r - i);

    const rightSum = (prefixSum[r + 1] - prefixSum[i + 1] + MOD) % MOD;
    const leftSum = (prefixSum[i + 1] - prefixSum[l + 1] + MOD) % MOD;

    const total = (((rightSum * leftCount - leftSum * rightCount + MOD * 2n) % MOD) * a[i]) % MOD;
    res = (res + total) % MOD;
  }

  return Number(res);
}

const strength = [1, 3, 1, 2];

console.log(totalStrength(strength));
