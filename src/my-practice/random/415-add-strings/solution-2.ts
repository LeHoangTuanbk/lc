export function addStrings(num1: string, num2: string): string {
  let res: number[] = [];
  let carry = 0;
  let i = num1.length - 1,
    j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;

    res.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return res.reverse().join('');
}
