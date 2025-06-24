export function removeDuplicateLetters(s: string): string {
  const stack: string[] = [];
  const used = new Set<string>();
  const lastCount: Record<string, number> = {};

  for (const ch of s) {
    lastCount[ch] = (lastCount[ch] ?? 0) + 1;
  }

  for (const ch of s) {
    lastCount[ch]--;

    if (used.has(ch)) continue;

    while (stack.length && stack[stack.length - 1] > ch && lastCount[stack[stack.length - 1]] > 0) {
      used.delete(stack.pop());
    }

    stack.push(ch);
    used.add(ch);
  }

  return stack.join('');
}
/* 
Example 1:

Input: s = "bcabc"
Output: "abc"


"bac"

stack = []
used = {}

lastCount = {
  b: 2,
  c: 2,
  a: 1
}

Step 0: b

lastCount = {
  b: 1,
  c: 2,
  a: 1
}

stack = [b]

ussd = {b}

Step 1: c

lastCount = {
  b: 1,
  c: 1,
  a: 1
}

stack = [b,c ]

used = {b,c}

Step 2: a

lastCount = {
  b: 1,
  c: 1,
  a: 0
}

stack = [ a ]

used = { a }

Step 3: b

lastCount = {
  b: 0,
  c: 1,
  a: 0
}

stack = [a,b ]

used = {a,b }


Example 2:

Input: s = "bcdbc"
Output: "bcd"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"

bcab: b remove first b cab or second b: bca

bca c: bca bac bac

find the first element ma khong bi duplicated => a, make min monotonic stack

naive: remove duplicated letters and then sort: nlogn
greedy removal: Remove cai lam cho so do nho hon khi traverse*/
