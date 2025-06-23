export function removeKdigits(num: string, k: number): string {
  if (k >= num.length) return '0';
  const stack: string[] = [];
  const n = num.length;

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1].charAt(0) >= num[i].charAt(0) && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
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
