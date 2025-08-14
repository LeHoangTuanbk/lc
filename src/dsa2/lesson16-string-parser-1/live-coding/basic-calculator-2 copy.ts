export function calculate(s: string): number {
  const stack: number[] = [];
  let curNum = 0;
  let operator = '+';
  const isDigit = (ch: string) => ch >= '0' && ch <= '9';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (isDigit(s[i])) {
      curNum = curNum * 10 + (s[i].charCodeAt(0) - 48);
    }
    if ((!isDigit(s[i]) && s[i] !== ' ') || i === s.length - 1) {
      process(curNum, operator, stack);
      operator = s[i];
      curNum = 0;
    }
  }

  process(curNum, operator, stack);

  let result = 0;
  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
  }
  return result;
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
      break;
    }
  }
}
/* 
s = '5+100/20-20*10';
*/
const s = '3+2*2';
console.log(calculate(s));
