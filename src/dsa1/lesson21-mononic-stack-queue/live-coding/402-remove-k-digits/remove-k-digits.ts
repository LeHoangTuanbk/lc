export function removeKdigits(num: string, k: number): string {
  if (k >= num.length) return '0';
  const stack: string[] = [];
  const n = num.length;

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  while (k > 0 && stack.length > 0) {
    stack.pop();
    k--;
  }

  let start = 0;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '0') {
      start++;
    } else {
      break;
    }
  }
  if (start === stack.length) return '0';

  return stack.splice(start).join('');
}

const num = '33526221184202197273',
  k = 19;
console.log(removeKdigits(num, k));

/* 
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

1 4 3 2 2 1 9
Step 1 : i = 0
stack: 1 

Step 2: i = 1
stack: 1 4

Step 3: i 2
num[i] = 3
stack : 1 3
k = 2

Step 4: i = 3
num[i] = 2
stack: 1 2
k = 1

Step 4: 
num[i] = 2
stack: 1 2
k = 0


Step 5,6 : 
stack: 1 2 1 9


Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.


*/
export function removeKdigits2(num: string, k: number): string {
  const n = num.length;
  const digitsToPick = n - k;
  const deque: number[] = [];
  let res = '';

  let j = 0;
  for (let i = 0; i < digitsToPick; i++) {
    const maxJ = n - digitsToPick + i;
    // num = "1432 219", k = 3
    // Step 0: i = 0
    // maxJ = 7 - 4 + 0 = 3
    // num[j] = 3 => remove 4
    //..
    // deque = [1, 2, ] => [2]
    // => 1

    // Step 0: i = 1
    // maxJ = 7 - 4 + 1 = 4
    // num[j] = 3 => remove 4
    //..
    // deque = [2, 2] => [2]
    // => 2

    // 1219
    while (j <= maxJ) {
      while (deque.length && num[j] < num[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(j);
      j++;
    }

    res += num[deque[0]];
    deque.shift();
  }

  res = res.replace(/^0+/, '');

  return res === '' ? '0' : res;
}
