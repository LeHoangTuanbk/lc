export function complexNumberMultiply(num1: string, num2: string): string {
  const [a, b] = convertToComplex(num1);
  const [c, d] = convertToComplex(num2);
  return `${a * c - b * d}+${a * d + b * c}i`;
}

function convertToComplex(num: string): [number, number] {
  const s = num.split('+');
  const a = Number(s[0]);
  const b = Number(s[1].slice(0, s[1].length - 1));
  return [a, b];
}
const num1 = '1+1i',
  num2 = '1+1i';
console.log(complexNumberMultiply(num1, num2));
