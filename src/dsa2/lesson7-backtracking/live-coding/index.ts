/* 
Theo mình hiểu thì các state của nó giống

Template code theo trên đỡ nhầm hẳn. 

Trong lúc interview thì có hay bị hỏi làm sao để cắt bớt các nhánh để tối ưu solution hay cứ duyệt hết là được ạ? Tại em thấy cắt nhánh nhiều khi khá khó ạ. 
*/
export function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const parenthesis = '()';
  function backtrack(start: number, s: string[]) {
    if (s.length === n * 2) {
      if (isWellFormParenthesis(s)) {
        result.push(s.join(''));
        return;
      }
    }
    for (const c of parenthesis) {
      s.push(c);
      if (isWellFormParenthesis(s)) {
        backtrack(start + 1, s);
      }
      s.pop();
    }
  }

  backtrack(0, []);
  return result;
}

function isWellFormParenthesis(s: string[]): boolean {
  const stack: string[] = [];
  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.at(-1) != '(') {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
/* 
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

*/
