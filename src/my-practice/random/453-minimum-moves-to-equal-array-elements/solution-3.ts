export function minMoves(nums: number[]): number {
  let min = Math.min(...nums);
  let moves = 0;
  for (const num of nums) {
    moves += num - min;
  }
  return moves;
}
