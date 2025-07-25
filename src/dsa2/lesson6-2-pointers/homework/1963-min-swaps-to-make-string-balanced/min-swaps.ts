export function minSwaps(s: string): number {
  let balance = 0;
  let maxImbalance = 0;

  for (const char of s) {
    if (char === '[') balance++;
    else balance--;

    if (balance < 0) {
      maxImbalance = Math.max(maxImbalance, -balance);
    }
  }

  return Math.ceil(maxImbalance / 2);
}

const Parenthesis = {
  Open: '[',
  Close: ']',
};

export function minSwaps2(s: string): number {
  const str = s.split('');
  let left = 0,
    right = str.length - 1;

  let open = 0,
    close = 0,
    swapCount = 0;

  while (left < right) {
    if (str[left] === Parenthesis.Open) {
      open++;
      left++;
    } else if (str[right] === Parenthesis.Close) {
      close++;
      right--;
    } else if (str[left] === Parenthesis.Close && open > 0) {
      open--;
      left++;
    } else if (str[right] === Parenthesis.Open && close > 0) {
      close--;
      right--;
    } else {
      // left: close, khong co open, luc do right cung se la open
      // right: open, khong co close, luc do left close
      [str[left], str[right]] = [str[right], str[left]];
      swapCount++;
    }
  }

  return swapCount;
}
/* 
Example 1:

Input: s = "][][" [[]] ]
Output: 1
Explanation: You can make the string balanced by swapping index 0 with index 3.
The resulting string is "[[]]".
Example 2:

Input: s = "]]] [[["
Output: 2
Explanation: You can do the following to make the string balanced:
- Swap index 0 with index 4. s = "[]][][".
- Swap index 1 with index 5. s = "[[][]]".
The resulting string is "[[][]]".
Example 3:

Input: s = "[]"
Output: 0
Explanation: The string is already balanced.

*/
