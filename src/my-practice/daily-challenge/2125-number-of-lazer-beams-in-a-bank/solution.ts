export function numberOfBeams(bank: string[]): number {
  const securityDevices = bank
    .map((item) => {
      return item
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    })
    .filter((item) => item !== 0);
  let res = 0;
  for (let i = 0; i < securityDevices.length - 1; i++) {
    res += securityDevices[i] * securityDevices[i + 1];
  }
  return res;
}

const bank = ['011001', '000000', '010100', '001000'];
console.log(numberOfBeams(bank));

/* 
Input: bank = ["011001","000000","010100","001000"]
Output: 8

*/
