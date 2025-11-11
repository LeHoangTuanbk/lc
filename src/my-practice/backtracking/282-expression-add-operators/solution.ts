export function addOperators(num: string, target: number): string[] {
  const res: string[] = [];

  function backtrack(index: number, path: string, value: number, prev: number) {
    if (index === num.length) {
      if (value === target) res.push(path);
      return;
    }

    for (let i = index; i < num.length; i++) {
      if (i !== index && num[index] === '0') break;

      const str = num.slice(index, i + 1);
      const curr = parseInt(str);

      if (index === 0) {
        backtrack(i + 1, str, curr, curr);
      } else {
        backtrack(i + 1, `${path}+${str}`, value + curr, curr);
        backtrack(i + 1, `${path}-${str}`, value - curr, -curr);
        backtrack(i + 1, `${path}*${str}`, value - prev + prev * curr, prev * curr);
      }
    }
  }
  backtrack(0, '', 0, 0);

  return res;
}
