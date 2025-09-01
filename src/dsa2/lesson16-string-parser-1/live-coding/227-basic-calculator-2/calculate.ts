function isDigit(ch: string) {
  return ch >= '0' && ch <= '9';
}

export function calculate(s: string): number {
  const stack: number[] = [];
  let curNum = 0;
  let operator = '+';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (isDigit(s[i])) {
      curNum = curNum * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
      continue;
    }
    process(curNum, operator, stack);
    operator = s[i];
    curNum = 0;
  }

  process(curNum, operator, stack);

  return stack.reduce((acc, value) => acc + value, 0);
}

function process(num: number, ops: string, stack: number[]) {
  switch (ops) {
    case '+': {
      stack.push(num);
      break;
    }
    case '-': {
      stack.push(-num);
      break;
    }
    case '*': {
      const temp = stack.at(-1);
      stack.pop();
      stack.push(temp * num);
      break;
    }
    case '/': {
      const temp = stack.at(-1);
      stack.pop();
      stack.push(Math.trunc(temp / num));
    }
  }
}

const s = ' 3/2 ';
console.log(calculate(s));
/* 
Example 1:

Input: s = "30+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5

*/
