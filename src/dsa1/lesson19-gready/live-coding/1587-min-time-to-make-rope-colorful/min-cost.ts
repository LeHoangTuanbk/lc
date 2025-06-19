export function minCost2(colors: string, neededTime: number[]): number {
  let res = 0;
  let sameColorsCost: number[] = [];

  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      sameColorsCost.push(neededTime[i]);
      if (i + 1 === colors.length - 1) {
        sameColorsCost.push(neededTime[i + 1]);
      }
    } else {
      if (!sameColorsCost.length) continue;
      sameColorsCost.push(neededTime[i]);
      sameColorsCost.sort((a, b) => a - b);
      for (let j = 0; j < sameColorsCost.length - 1; j++) {
        res += sameColorsCost[j];
      }
      sameColorsCost = [];
    }
  }

  if (sameColorsCost.length) {
    sameColorsCost.sort((a, b) => a - b);
    for (let j = 0; j < sameColorsCost.length - 1; j++) {
      res += sameColorsCost[j];
    }
  }

  return res;
  // For loop and remove the lower time
}

export function minCost(colors: string, neededTime: number[]): number {
  let res = 0;
  let maxLocalCost = neededTime[0];
  const n = colors.length;
  for (let i = 0; i < colors.length - 1; ) {
    let localSum = neededTime[i];
    maxLocalCost = neededTime[i];
    let j = i;
    while (j < n - 1 && colors[j] === colors[j + 1]) {
      maxLocalCost = Math.max(maxLocalCost, neededTime[j + 1]);
      localSum += neededTime[j + 1];
      j++;
    }

    res += localSum - maxLocalCost;
    i = j + 1;
  }

  return res;
  // For loop and remove the lower time
}

/* 
Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3


colors =
"bbbaaa"
neededTime =
[4,9,3,8,8,9]

Use Testcase
Output
12
*/

const colors = 'bbbaaa',
  neededTime = [4, 9, 3, 8, 8, 9];

console.log(minCost(colors, neededTime));
