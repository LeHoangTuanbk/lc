function distance(p1: number[], p2: number[]) {
  return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
}

export function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  const dis12 = distance(p1, p2);
  const dis23 = distance(p2, p3);
  const dis34 = distance(p3, p4);
  const dis41 = distance(p4, p1);

  const cos = p1;

  return dis12 === dis23 && dis23 === dis34 && dis34 === dis41 && dis41 === dis12;
}
const p1 = [0, 0],
  p2 = [1, 1],
  p3 = [1, 0],
  p4 = [0, 1];

console.log(validSquare(p1, p2, p3, p4));
