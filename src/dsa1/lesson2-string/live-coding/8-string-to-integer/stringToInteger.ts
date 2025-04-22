const MAX = Math.pow(2, 31) - 1;
const MIN = -Math.pow(2, 31);

export function myAtoi2(s: string): number {
  let isPositive = true;
  let res = 0;
  let hasReadNumberCharacter = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (s[i] === '-') {
      if (hasReadNumberCharacter) return isPositive ? res : -res;
      isPositive = false;
      continue;
    }
    if (s[i] === '+') {
      if (hasReadNumberCharacter) return isPositive ? res : -res;
      hasReadNumberCharacter = true;
      continue;
    }

    if (isNumberCharacter(s[i])) {
      hasReadNumberCharacter = true;
      if (res >= MAX || -res <= MIN) return isPositive ? MAX : MIN;
      res = res * 10 + Number(s[i]);

      continue;
    }

    return isPositive ? res : -res;
  }
  return isPositive ? res : -res;
}

function isNumberCharacter(s: string): boolean {
  if (s.charAt(0) >= '0'.charAt(0) && s.charAt(0) <= '9'.charAt(0)) return true;
  return false;
}

export function myAtoi(s: string): number {
  let i = 0;
  let sign = 1;
  let result = 0;

  while (i < s.length && s[i] === ' ') {
    i++;
  }

  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = parseInt(s[i]);

    if (result > Math.floor(MAX / 10) || (result === Math.floor(MAX / 10) && digit > MAX % 10)) {
      return sign === 1 ? MAX : MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}
