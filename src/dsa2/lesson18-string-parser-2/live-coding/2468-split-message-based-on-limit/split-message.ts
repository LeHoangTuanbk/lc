export function splitMessage(message: string, limit: number): string[] {
  let b = 0;
  const MAX = 1e5 + 5;
  let sumIntLength = 0;
  const n = message.length;

  for (let i = 1; i < MAX; i++) {
    sumIntLength += String(i).length;

    const part1 = n; //message length
    const part2 = i * 3; // </>
    const part3 = sumIntLength;
    const part4 = String(i).length * i;

    const totalLen = i * limit;

    if (part1 + part2 + part3 + part4 <= totalLen) {
      b = i;
      break;
    }
  }

  if (b === 0) {
    return [];
  }

  let curIterator = 0;
  const res: string[] = [];
  for (let a = 1; a <= b; a++) {
    let fixedPart = `<${a}/${b}>`;
    let restLen = limit - fixedPart.length;
    let messagePart = message.slice(curIterator, curIterator + restLen);
    curIterator += restLen;
    res.push(messagePart + fixedPart);
  }

  return res;
}

/* 
Example 1:

Input: message = "this is really a very awesome message", limit = 9
Output: ["thi<1/14>","s i<2/14>","s r<3/14>","eal<4/14>","ly <5/14>","a v<6/14>","ery<7/14>"," aw<8/14>","eso<9/14>","me<10/14>"," m<11/14>","es<12/14>","sa<13/14>","ge<14/14>"]
Explanation:
The first 9 parts take 3 characters each from the beginning of message.
The next 5 parts take 2 characters each to finish splitting message. 
In this example, each part, including the last, has length 9. 
It can be shown it is not possible to split message into less than 14 parts.
Example 2:

Input: message = "short message", limit = 15
Output: ["short mess<1/2>","age<2/2>"]
Explanation:
Under the given constraints, the string can be split into two parts: 
- The first part comprises of the first 10 characters, and has a length 15.
- The next part comprises of the last 3 characters, and has a length 8.

*/
