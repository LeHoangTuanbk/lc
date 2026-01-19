export function originalDigits(s: string): string {
  let chars = new Map<string, number>();
  for (const c of s) {
    if (!chars.has(c)) {
      chars.set(c, 0);
    }
    chars.set(c, chars.get(c) + 1);
  }
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let res = '';
  let i = 0;
  while (i <= 9) {
    const digit = digits[i];
    let hasNumber = true;
    const cloneMap = new Map(chars);

    for (const c of digit) {
      if (!cloneMap.has(c)) {
        hasNumber = false;
        break;
      }
      cloneMap.set(c, cloneMap.get(c) - 1);
      if (cloneMap.get(c) === 0) {
        cloneMap.delete(c);
      }
    }

    if (hasNumber) {
      res += String(i);
      chars = cloneMap;
    } else {
      i++;
    }
  }
  return res;
}

const s = 'zero one two threefourfivesixseveneightnine';
console.log(originalDigits(s));
