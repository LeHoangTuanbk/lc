function findKthIter(k: number, operations: number[]): string {
  let level = operations.length;
  let add = 0;

  while (level > 0) {
    const mid = 2 ** (level - 1);
    const opIndex = level - 1;

    if (k <= mid) {
      level -= 1;
    } else {
      if (operations[opIndex] === 1) add += 1;
      k -= mid;
      level -= 1;
    }
  }

  return String.fromCharCode(97 + (add % 26));
}

export function kthCharacter(k: number, operations: number[]): string {
  return findKthIter(k, operations);
}

const k = 12145134613,
  operations = [
    0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1,
    1, 1, 1,
  ];
console.log(kthCharacter(k, operations));

/* 
Example 2:

Input: k = 10, operations = [0,1,0,1]

Output: "b"

Explanation:

Initially, word == "a". Alice performs the four operations as follows:

Appends "a" to "a", word becomes "aa".
Appends "bb" to "aa", word becomes "aabb".
Appends "aabb" to "aabb", word becomes "aabbaabb".
Appends "bbccbbcc" to "aabbaabb", word becomes "aabbaabbbbccbbcc".

*/
