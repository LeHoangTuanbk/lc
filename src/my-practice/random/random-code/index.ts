// export function lemonadeChange(bills: number[]): boolean {
//   const currentMoney = {
//     5: 0,
//     10: 0,
//     20: 0,
//   };
//   for (const bill of bills) {
//     if (bill === 5) {
//       currentMoney[5]++;
//     } else if (bill === 10) {
//       if (currentMoney[5] === 0) return false;
//       currentMoney[5]--;
//       currentMoney[10]++;
//     } else if (bill === 20) {
//       if (currentMoney[5] >= 1 && currentMoney[10] >= 1) {
//         currentMoney[20]++;
//         currentMoney[5]--;
//         currentMoney[10]--;
//         continue;
//       }
//       if (currentMoney[5] >= 3) {
//         currentMoney[20]++;
//         currentMoney[5] -= 3;
//         continue;
//       }
//       return false;
//     }
//   }
//   return true;
// }

// const bills = [5, 5, 5, 5, 10, 5, 10, 10, 10, 20];
// console.log(lemonadeChange(bills));
function binaryGap(n: number): number {
  const binary = n.toString(2);
  let i = -1,
    j = 0;
  let maxLength = 0;
  while (j < binary.length) {
    if (binary[j] === '1') {
      if (i === -1) {
        i = j;
      } else {
        maxLength = Math.max(maxLength, j - i);
        i = j;
      }
    }
    j++;
  }
  return maxLength;
}

const n = 22;
console.log(binaryGap(n));
