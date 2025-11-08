export function letterCasePermutation(s: string): string[] {
  let result: string[] = [''];

  for (const char of s) {
    const newResult: string[] = [];

    for (const str of result) {
      if (char >= '0' && char <= '9') {
        newResult.push(str + char);
      } else {
        newResult.push(str + char.toLowerCase());
        newResult.push(str + char.toUpperCase());
      }
    }

    result = newResult;
  }

  return result;
}
