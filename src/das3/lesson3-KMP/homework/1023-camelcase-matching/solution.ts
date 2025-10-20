function check(query: string, pattern: string): boolean {
  const n = query.length;
  let i = 0,
    j = 0;
  while (i < query.length) {
    if (query[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (query[i] >= 'A' && query[i] <= 'Z') return false;
      i++;
    }
  }
  return j === pattern.length;
}

export function camelMatch(queries: string[], pattern: string): boolean[] {
  const n = queries.length;
  const res = Array(n).fill(false);
  for (let i = 0; i < queries.length; i++) {
    res[i] = check(queries[i], pattern);
  }

  return res;
}

const queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'],
  pattern = 'FB';
console.log(camelMatch(queries, pattern));
/* 
Example 1:

Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
Explanation: "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
"FootBall" can be generated like this "F" + "oot" + "B" + "all".
"FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".

*/
