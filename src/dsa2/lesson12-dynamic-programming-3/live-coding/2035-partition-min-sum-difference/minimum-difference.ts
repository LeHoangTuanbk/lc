export function minimumDifference(nums: number[]): number {
  const m = nums.length;
  const n = m >> 1;

  const total = nums.reduce((a, b) => a + b);
  const target = total / 2;

  const left = nums.slice(0, n);
  const right = nums.slice(n);

  const L = sumsByPick(left);
  const R = sumsByPick(right);

  for (let k = 0; k <= n; k++) {
    R[k].sort((a, b) => a - b);
  }

  let best = Infinity;
  // Each k, pair L[k] with R[n-k]
  for (let k = 0; k <= n; k++) {
    const rightBucket = R[n - k];
    for (const sL of L[k]) {
      const want = target - sL;
      const idx = lowerBound(rightBucket, want);

      if (idx < rightBucket.length) {
        const s1 = sL + rightBucket[idx];
        best = Math.min(best, Math.abs(total - 2 * s1));
      }

      if (idx > 0) {
        const s1 = sL + rightBucket[idx - 1];
        best = Math.min(best, Math.abs(total - 2 * s1));
      }

      if (best == 0) return best;
    }
  }

  return best;
}

function sumsByPick(arr: number[]): number[][] {
  const n = arr.length;

  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  const limit = 1 << n;

  for (let mask = 0; mask < limit; mask++) {
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (getBit(mask, i)) {
        sum += arr[i];
        cnt++;
      }
    }
    buckets[cnt].push(sum);
  }

  return buckets;
}

// First index i such that arr[i] >= x (classic lower_bound).
function lowerBound(arr: number[], x: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (arr[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export function minimumDifferenceBruteForce(nums: number[]): number {
  const m = nums.length;
  if ((m & 1) !== 0) throw new Error('nums.length must be even');
  const n = m >> 1;

  const total = nums.reduce((a, b) => a + b);
  let best = Number.POSITIVE_INFINITY;

  function dfs(i: number, chosen: number, sum: number) {
    if (chosen === n) {
      const diff = Math.abs(total - sum - sum);
      if (diff < best) best = diff;
      return;
    }
    if (i === m) return;
    // Option 1: Take nums[i]
    dfs(i + 1, chosen + 1, sum + nums[i]);

    // Option 2: Skip nums[i]
    dfs(i + 1, chosen, sum);
  }
  dfs(0, 0, 0);

  return best;
}

export function minimumDifferenceBitmaskAll(nums: number[]): number {
  const m = nums.length;
  if ((m & 1) !== 0) throw new Error('nums.length must be even');
  const n = m >> 1;

  const total = nums.reduce((a, b) => a + b);
  let best = Number.POSITIVE_INFINITY;

  const limit = 1 << m;

  for (let mask = 0; mask < limit; mask++) {
    if (countBits(mask) !== n) continue;

    let sum = 0;
    for (let i = 0; i < m; i++) {
      if (getBit(mask, i)) sum += nums[i];
    }
    const diff = Math.abs(total - 2 * sum);
    if (diff < best) best = diff;
    if (best === 0) return 0;
  }

  return best;
}

function getBit(mask: number, i: number) {
  return mask & (1 << i);
}

function countBits(x: number): number {
  let count = 0;
  while (x) {
    x &= x - 1;
    count++;
  }
  return count;
}

const nums = [3, 9, 7, 3];
console.log(minimumDifferenceBruteForce(nums)); // 2
