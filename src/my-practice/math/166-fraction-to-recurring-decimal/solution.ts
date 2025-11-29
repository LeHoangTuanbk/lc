export function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return '0';
  let result = '';

  if (numerator < 0 !== denominator < 0) {
    result += '-';
  }

  let n = Math.abs(numerator);
  let d = Math.abs(denominator);

  const integerPart = Math.floor(n / d);
  result += String(integerPart);

  let remainder = n % d;
  if (remainder === 0) return result;
  result += '.';

  const map = new Map<number, number>();
  let decimal = '';

  while (remainder !== 0) {
    if (map.has(remainder)) {
      const idx = map.get(remainder);
      const repeat = decimal.slice(idx);
      const nonRepeat = decimal.slice(0, idx);
      result += nonRepeat + '(' + repeat + ')';
      return result;
    }

    map.set(remainder, decimal.length);
    remainder *= 10;
    const digit = Math.floor(remainder / d);
    decimal += String(digit);
    remainder %= d;
  }

  return result + decimal;
}
