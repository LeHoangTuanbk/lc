export function getSkyline(buildings: number[][]): number[][] {
  if (buildings.length === 0) return [];
  if (buildings.length === 1) {
    const [left, right, height] = buildings[0];
    return [
      [left, height],
      [right, 0],
    ];
  }

  const mid = Math.floor(buildings.length / 2);
  const leftSkyline = getSkyline(buildings.slice(0, mid));
  const rightSkyline = getSkyline(buildings.slice(mid));

  return mergeSkylines(leftSkyline, rightSkyline);
}

function mergeSkylines(left: number[][], right: number[][]): number[][] {
  const result: number[][] = [];
  let i = 0,
    j = 0;
  let h1 = 0,
    h2 = 0,
    currHeight = 0;

  while (i < left.length && j < right.length) {
    const point1 = left[i];
    const point2 = right[j];
    let x: number,
      x1 = point1[0],
      x2 = point2[0];

    if (x1 < x2) {
      x = x1;
      h1 = point1[1];
      i++;
    } else if (x2 < x1) {
      x = x2;
      h2 = point2[1];
      j++;
    } else {
      x = x1;
      h1 = point1[1];
      h2 = point2[1];
      i++;
      j++;
    }

    const newHeight = Math.max(h1, h2);
    if (newHeight !== currHeight) {
      result.push([x, newHeight]);
      currHeight = newHeight;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}
