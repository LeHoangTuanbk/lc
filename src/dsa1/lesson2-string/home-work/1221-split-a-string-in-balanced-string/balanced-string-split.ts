export function balancedStringSplit(s: string): number {
  let numberOfBalancedString = 0;
  let numberOfL = 0;
  let numberOfR = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      numberOfL++;
    }
    if (s[i] === 'R') {
      numberOfR++;
    }
    if (numberOfL === numberOfR) {
      numberOfBalancedString++;
      numberOfR = numberOfL = 0;
    }
  }
  return numberOfBalancedString;
}
