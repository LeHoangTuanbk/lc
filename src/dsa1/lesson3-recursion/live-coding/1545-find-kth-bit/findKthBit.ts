// Time: O(2^n)
function findKthBit2(n: number, k: number): string {
  function revert(s: string): string {
    return s.split('').reverse().join('');
  }

  function invert(s: string) {
    return s
      .split('')
      .map((c) => {
        if (c === '0') return '1';
        return '0';
      })
      .join('');
  }
  function calculateSn(n: number): string {
    if (n == 1) return '0';
    return calculateSn(n - 1) + '1' + revert(invert(calculateSn(n - 1)));
  }
  const s = calculateSn(n);
  return s[k - 1];
}

// Time: O(n), Space: O(n)
function findKthBit3(n: number, k: number): string {
  function reverse(s: string): string {
    return s.split('').reverse().join('');
  }

  function invert(s: string) {
    return s
      .split('')
      .map((c) => {
        if (c === '0') return '1';
        return '0';
      })
      .join('');
  }
  function calculateSn(n: number): string {
    let snArray: string[] = new Array(n + 1);
    snArray[1] = '0';
    snArray[2] = '011';
    for (let i = 3; i <= n; i++) {
      snArray[i] = snArray[i - 1] + '1' + reverse(invert(snArray[i - 1]));
    }
    return snArray[n];
  }
  const s = calculateSn(n);
  return s[k - 1];
}
// Time: O(n), Space: O(n)
function findKthBit(n: number, k: number): string {
  function compute(n: number, k: number, inverse: boolean): string {
    if (n == 1) return inverse ? '1' : '0';
    let lenSn = Math.pow(2, n) - 1;
    const mid = Math.floor(lenSn / 2) + 1;
    if (mid == k) return inverse ? '0' : '1';
    if (mid > k) return compute(n - 1, k, inverse);
    k -= mid;
    k = mid - k;
    return compute(n - 1, k, !inverse);
  }

  return compute(n, k, false);
}
