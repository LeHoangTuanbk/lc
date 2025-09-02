function precedence(op: string): number {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

function tokenize(expr: string): string[] {
  const tokens: string[] = [];
  let i = 0;
  while (i < expr.length) {
    const ch = expr[i];
    if (ch === ' ') {
      i++;
      continue;
    }

    if (/\d/.test(ch)) {
      let num = '';
      while (i < expr.length && /\d/.test(expr[i])) {
        num += expr[i];
        i++;
      }
      tokens.push(num);
    } else if ('+-*/()'.includes(ch)) {
      tokens.push(ch);
      i++;
    }
  }

  return tokens;
}

export function infixToPostfix(expr: string): string[] {
  const output: string[] = [];
  const ops: string[] = [];
  const tokens = tokenize(expr);
  if (!tokens.length) return [];
  for (const token of tokens) {
    if (/\d+/.test(token)) {
      output.push(token);
    } else if (token === '(') {
      ops.push(token);
    } else if (token === ')') {
      while (ops.length && ops.at(-1) !== '(') {
        output.push(ops.pop());
      }
      ops.pop(); //discard (
    } else {
      // operator
      while (ops.length && precedence(ops.at(-1)) >= precedence(token)) {
        output.push(ops.pop());
      }
      ops.push(token);
    }
  }
  while (ops.length) {
    output.push(ops.pop());
  }

  return output;
}

export function evaluatePostfix(postfix: string[]): number {
  const stack: number[] = [];

  for (const token of postfix) {
    if (/\d+/.test(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }

  return stack[0];
}

export function evaluateInfix(expr: string) {
  return evaluatePostfix(infixToPostfix(expr));
}

console.log(evaluateInfix('3 + 4 * 2 / (1 - 5)'));
