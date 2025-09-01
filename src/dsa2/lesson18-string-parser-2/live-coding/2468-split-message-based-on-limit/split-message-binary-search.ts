export function splitMessage(message: string, limit: number): string[] {
  const n = message.length;

  const canSplit = (b: number): boolean => {
    let cur = 0;
    for (let a = 1; a <= b; a++) {
      const suffix = `<${a}/${b}>`;
      const len = limit - suffix.length;
      if (len <= 0) return false;

      const remaining = message.length - cur;
      const take = Math.min(len, remaining);
      cur += take;
    }
    return cur >= message.length;
  };

  let low = 1,
    high = n,
    b = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canSplit(mid)) {
      b = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (b === -1) return [];

  let cur = 0;
  const res: string[] = [];
  for (let a = 1; a <= b; a++) {
    const suffix = `<${a}/${b}>`;
    const len = limit - suffix.length;
    const chunk = message.slice(cur, cur + len);
    cur += len;
    res.push(chunk + suffix);
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
