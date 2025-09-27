export function sortByHeight(a: number[]) {
  const sortedValue = a.filter((item) => item !== -1).sort((a, b) => a - b);
  let idx = 0;
  return a.map((item) => (item !== -1 ? sortedValue[idx++] : item));
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
