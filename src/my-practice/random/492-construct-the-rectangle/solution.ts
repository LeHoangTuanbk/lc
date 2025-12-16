export function constructRectangle(area: number): number[] {
  const squareRoot = Math.floor(Math.sqrt(area));
  for (let i = squareRoot; i >= 1; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
}

const area = 37;
console.log(constructRectangle(area));
export type User = {
  id: string;
  name: string;
  email: string;
};
