export function divideString(s: string, k: number, fill: string): string[] {
  const output: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    output.push(s.slice(i, i + k));
  }
  let restFill = k - output.at(-1).length;
  output[output.length - 1] = output.at(-1) + fill.repeat(restFill);
  return output;
}
/* 
Example 2:

Input: s = "abcdefghij", k = 3, fill = "x"
Output: ["abc","def","ghi","jxx"]
Explanation:
Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".

Có cái lấy ví dụ để minh hoạ cho thuật toán mình code em trình bày step by step vẫn rối thì làm sao ạ? 
*/
