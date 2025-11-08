export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  if (s.length < 4 || s.length > 12) {
    return result;
  }

  function backtrack(start: number, path: string[]): void {
    if (path.length === 4) {
      if (start === s.length) {
        result.push(path.join('.'));
      }
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) {
        break;
      }

      const segment = s.substring(start, start + len);
      if (segment[0] === '0' && segment.length > 1) {
        continue;
      }

      const num = Number(segment);
      if (num > 255) {
        continue;
      }

      path.push(segment);
      backtrack(start + len, path);
      path.pop();
    }
  }

  backtrack(0, []);

  return result;
}
