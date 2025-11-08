function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const n = s.length;

  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d !== n) continue;

          const part1 = s.substring(0, a);
          const part2 = s.substring(a, a + b);
          const part3 = s.substring(a + b, a + b + c);
          const part4 = s.substring(a + b + c);

          if (isValid(part1) && isValid(part2) && isValid(part3) && isValid(part4)) {
            result.push(`${part1}.${part2}.${part3}.${part4}`);
          }
        }
      }
    }
  }

  return result;
}

function isValid(segment: string): boolean {
  if (segment.length > 1 && segment[0] === '0') return false;
  const num = parseInt(segment, 10);
  return num >= 0 && num <= 255;
}
