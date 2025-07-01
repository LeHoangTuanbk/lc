export function getXORSum(arr1: number[], arr2: number[]): number {
  const a = arr1.reduce((pre, cur) => pre ^ cur, 0);
  const b = arr2.reduce((pre, cur) => pre ^ cur, 0);
  return a & b;
}
