type Linear = {
  coefX: number;
  constant: number;
};

function parseExpr(expr: string): Linear {
  let coefX = 0,
    constant = 0;

  let i = 0,
    sign = 1;
  while (i < expr.length) {
    if (expr[i] === '+') {
      sign = 1;
      i++;
      continue;
    }
    if (expr[i] === '-') {
      sign = -1;
      i++;
      continue;
    }

    let num = 0;
    let hasNum = false;

    while (i < expr.length && expr[i] >= '0' && expr[i] <= '9') {
      num = num * 10 + (expr.charCodeAt(i) - 48);
      hasNum = true;
      i++;
    }

    if (i < expr.length && expr[i] === 'x') {
      coefX += sign * (hasNum ? num : 1);
      i++;
    } else {
      constant += sign * num;
    }
  }
  return {
    coefX,
    constant,
  };
}

function solveEquation(equation: string): string {
  const [left, right] = equation.split('=');
  const L = parseExpr(left);
  const R = parseExpr(right);

  const a = L.coefX - R.coefX;
  const b = L.constant - R.constant;

  if (a === 0 && b === 0) return 'Infinite solutions';
  if (a === 0) return 'No solution';

  return `x=${-b / a}`;
}
