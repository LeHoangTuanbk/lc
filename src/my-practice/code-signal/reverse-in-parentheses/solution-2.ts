export function reverseInParentheses(s: string) {
  function helper(i: number): [string, number] {
    let res: string[] = [];
    while (i < s.length && s[i] !== ')') {
      if (s[i] === '(') {
        const [inner, nextIdx] = helper(i + 1);
        res.push(inner.split('').reverse().join(''));
        i = nextIdx;
      } else {
        res.push(s[i]);
      }
      i++;
    }
    return [res.join(''), i];
  }

  const [ans] = helper(0);
  return ans;
}

const s = 'foo(bar(baz))blim';
console.log(reverseInParentheses(s));
