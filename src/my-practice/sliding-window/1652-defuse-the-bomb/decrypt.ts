export function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  const decrypt = new Array(n).fill(0);
  code.concat(code);
  let currentSum = 0;

  if (k > 0) {
    let i = 1;
    for (; i <= k; i++) {
      currentSum += code[i];
    }
    decrypt[0] = currentSum;
    for (let j = 1; j < n; j++) {
      currentSum += code[i] - code[i - k];
      decrypt[j] = currentSum;
      i++;
    }
  }

  if (k < 0) {
    k = Math.abs(k);
    let i = n - k;
    for (; i < n; i++) {
      currentSum += code[i];
    }
    decrypt[0] = currentSum;
    for (let j = 1; j < n; j++) {
      currentSum += code[i] - code[i - k];
      decrypt[j] = currentSum;
      i++;
    }
  }

  return decrypt;
}

// const code1 = [5, 7, 1, 4], // i = 4; // 5, 7, 1, 4
//   k = 3;
// console.log(decrypt(code1, k));

const code2 = [2, 4, 9, 3],
  k2 = -2;
console.log(decrypt(code2, k2));
/* 
Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
Example 2:

Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 
Example 3:

Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

*/
