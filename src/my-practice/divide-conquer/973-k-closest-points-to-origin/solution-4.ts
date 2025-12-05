export function kClosest(points: number[][], k: number): number[][] {
  const newPoints: Array<{ point: number[]; dist: number }> = points.map((p) => ({
    dist: p[0] * p[0] + p[1] * p[1],
    point: p,
  }));

  quickSelect(newPoints, 0, points.length - 1, k);

  return newPoints.slice(0, k).map((e) => e.point);
}

function quickSelect(
  arr: Array<{ point: number[]; dist: number }>,
  left: number,
  right: number,
  k: number,
) {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  if (pivotIndex === k) {
    return;
  } else if (pivotIndex > k) {
    quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function partition(
  arr: Array<{ point: number[]; dist: number }>,
  left: number,
  right: number,
): number {
  let i = left,
    pivot = arr[right];
  for (let j = left; j < right; j++) {
    if (arr[j].dist < pivot.dist) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}
const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
console.log(kClosest(points, k));
