function isNumberCharacter(c: string) {
  return c >= '0' && c <= '9';
}

export function decodeString(s: string): string {
  const n = s.length;

  function helper(i: number): { nextIdx: number; decodedString: string } {
    let res = '';
    let num = 0;

    while (i < n) {
      const c = s[i];

      if (isNumberCharacter(c)) {
        num = num * 10 + Number(c);
      } else if (c === '[') {
        const { nextIdx, decodedString } = helper(i + 1);
        res += decodedString.repeat(num);
        i = nextIdx;
        num = 0;
      } else if (c === ']') {
        return { nextIdx: i, decodedString: res };
      } else {
        res += c;
      }

      i++;
    }

    return {
      nextIdx: i,
      decodedString: res,
    };
  }

  return helper(0).decodedString;
}

const s = '3[a]2[bc]';
console.log(decodeString(s));
/* 
Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

*/
