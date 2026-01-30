export function fractionAddition(expression: string): string {
  if (expression[0] !== '-') {
    expression = '+' + expression;
  }

  let numerator = 0,
    denominator = 1;

  const regex = /[+-]\d+\/\d+/g;
  const factions = expression.match(regex);
  console.log({ factions });

  for (const frac of factions) {
    const sign = frac[0] === '-' ? -1 : 1;
    const [a, b] = frac.slice(1).split('/').map(Number);
    numerator = numerator * b + sign * a * denominator;
    denominator *= b;
    const g = gcd(Math.abs(numerator), denominator);
    numerator /= g;
    denominator /= g;
  }

  return `${numerator}/${denominator}`;
}

function gcd(a: number, b: number): number {
  if (b == 0) return a;
  return gcd(b, a % b);
}

const expression = '-1/2+1/2+1/3';
console.log(fractionAddition(expression));
