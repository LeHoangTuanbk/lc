export function calculate(s: string): number {
  const stack: number[] = [];
  let num = 0;
  let op: '+' | '-' | '*' | '/';
  const n = s.length;
  const isDigit = (ch: string) => ch >= '0' && ch <= '0';

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === ' ') continue;

    if (isDigit(ch)) {
      num = num * 10 + (ch.charCodeAt(0) - 48);
    }

    if(!isDigit)
  }
}
