function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const flowerbedLength = flowerbed.length;
  if (n > flowerbedLength / 2 + 1) return false;
  if (n == 0) return true;
  let numberOfCanPlant: number = 0;
  if (!flowerbed[0] && !flowerbed[1]) {
    numberOfCanPlant++;
    flowerbed[0] = 1;
  }
  if (!flowerbed[flowerbedLength - 2] && !flowerbed[flowerbedLength - 1]) {
    numberOfCanPlant++;
    flowerbed[flowerbedLength - 1] = 1;
  }
  for (let i = 2; i < flowerbedLength - 2; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      flowerbed[i] = 1;
      numberOfCanPlant++;
      if (numberOfCanPlant >= n) {
        return true;
      }
    }
  }
  return numberOfCanPlant >= n;
}
