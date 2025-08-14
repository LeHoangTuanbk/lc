export function calculateIII(s: string): number {
  let i = 0;

  function helper(): number {
    const stack: number[] = [];
    let num = 0;
    let sign = '+';

    while (i < s.length) {
      const ch = s[i];
      i++;

      if (ch === ' ') continue;

      if (ch >= '0' && ch <= '9') {
        num = num * 10 + (ch.charCodeAt(0) - 48);
      }

      if (ch === '(') {
        num = helper();
      }

      if (['+', '-', '*', '/', ')'].includes(ch) || i === s.length) {
        if (sign === '+') stack.push(num);
        else if (sign === '-') stack.push(-num);
        else if (sign === '*') stack.push(stack.pop()! * num);
        else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));

        sign = ch;
        num = 0;
      }

      if (ch === ')') break;
    }

    return stack.reduce((a, b) => a + b, 0);
  }

  return helper();
}

/* 
Thấy slide có vẻ có idea recursion, anh có thể nói qua thêm idea recursion được không? 

*/

console.log(calculateIII('((1+2)+(3+4))*2')); //20
