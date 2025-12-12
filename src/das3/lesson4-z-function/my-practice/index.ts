// Chạy từ trái sang phải và dùng kỹ thuật [l, r] window gọi là Z-box:
// 	•	[l, r] là khoảng đang biết chắc khớp prefix (S[l…r] = S[0…r-l]).

export function zFunction(s: string): number[] {
  const n = s.length;
  const Z = new Array(n).fill(0);
  let l = 0,
    r = 0;

  for (let i = 1; i < n; i++) {
    if (i <= r) {
      const k = i - l;
      Z[i] = Math.min(Z[k], r - i + 1);
    }
    while (i + Z[i] < n && s[Z[i]] === s[i + Z[i]]) {
      Z[i]++;
    }
    if (i + Z[i] - 1 > r) {
      l = i;
      r = i + Z[i] - 1;
    }
  }
  return Z;
}

export function zFunction3(s: string): number[] {
  const Z = new Array(s.length).fill(0);
  let left = 0,
    right = 0;

  for (let k = 1; k < s.length; k++) {
    if (k > right) {
      left = right = k;

      while (right < s.length && s[right] === s[right - left]) {
        right++;
      }
      Z[k] = right - left;
      right--;
    } else {
      const k1 = k - left;
      if (Z[k1] < right - k + 1) {
        Z[k] = Z[k1];
      } else {
        left = k;
        while (right < s.length && s[right] === s[right - left]) {
          right++;
        }
        Z[k] = right - left;
        right--;
      }
    }
  }
  return Z;
}

const s = 'aabcaabxaaaz';
console.log(zFunction(s));
console.log(zFunction3(s));
/* 
[
  0, 1, 0, 0, 3,
  1, 0, 0, 2, 2,
  1, 0
]
*/
