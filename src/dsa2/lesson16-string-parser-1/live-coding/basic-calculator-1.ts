export function calculate(s: string): number {
  const stack: number[][] = [];
  let curNum = 0;
  let sign = 1;
  const isDigit = (ch: string) => ch >= '0' && ch <= '9';
  let scopeSum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (isDigit(s[i])) {
      curNum = curNum * 10 + (s[i].charCodeAt(0) - 48);
      continue;
    }

    if (s[i] === '+' || s[i] === '-' || s[i] === '(') {
      scopeSum += sign * curNum;
      curNum = 0;
    }

    if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '(') {
      stack.push([scopeSum, sign]);
      scopeSum = 0;
      sign = 1;
    } else if (s[i] === ')') {
      scopeSum += sign * curNum;
      curNum = 0;

      const [preSum, preSign] = stack.at(-1);
      stack.pop();

      scopeSum = preSum + preSign * scopeSum;
    }
  }

  scopeSum += sign * curNum;
  return scopeSum;
}

const s = '(1+(4+5+2)-3)+(6+8)';
console.log(calculate(s));
