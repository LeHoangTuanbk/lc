const operators: string[] = ['+', '-', '*', '/'];

function isOperand(s: string) {
  return !operators.includes(s);
}

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    // operand
    if (isOperand(token)) {
      stack.push(parseInt(token));
      continue;
    }
    // operator
    const a = stack.pop();
    const b = stack.pop();
    switch (token) {
      case '+': {
        stack.push(b + a);
        break;
      }
      case '-': {
        stack.push(b - a);
        break;
      }
      case '*': {
        stack.push(b * a);
        break;
      }
      case '/': {
        stack.push(Math.trunc(b / a));
        break;
      }
    }
  }
  return stack.pop();
}

const tokens = ['2', '1', '+', '3', '*'];
console.log(evalRPN(tokens));
/* 
Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/
