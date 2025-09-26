export function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length,
    m = image[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j * 2 < m; j++) {
      const k = m - 1 - j;
      const temp = image[i][j];
      image[i][j] = image[i][k] ^ 1;
      image[i][k] = temp ^ 1;
    }
  }

  return image;
}

const image1 = [
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 1],
];
console.log(flipAndInvertImage(image1));

// const image2 = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];
// console.log(flipAndInvertImage(image2));
