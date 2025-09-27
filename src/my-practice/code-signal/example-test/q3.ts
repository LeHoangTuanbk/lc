export function dropFigure(field: number[][], figure: number[][]): number {
  const H = field.length;
  const W = field[0].length;
  const FH = figure.length;
  const FW = figure[0].length;

  for (let pos = 0; pos <= W - FW; pos++) {
    let row = 0;

    // rơi xuống cho đến khi không thể xuống nữa
    while (true) {
      if (row + FH >= H) break; // nếu xuống thêm nữa vượt đáy
      let collide = false;
      for (let i = 0; i < FH; i++) {
        for (let j = 0; j < FW; j++) {
          if (figure[i][j] === 1 && field[row + i + 1][pos + j] === 1) {
            collide = true;
          }
        }
      }
      if (collide) break;
      row++;
    }

    // tạo field mới và đặt figure
    const newField = field.map((r) => [...r]);
    for (let i = 0; i < FH; i++) {
      for (let j = 0; j < FW; j++) {
        if (figure[i][j] === 1) {
          newField[row + i][pos + j] = 1;
        }
      }
    }

    // check có full row không
    for (let r = 0; r < H; r++) {
      if (newField[r].every((x) => x === 1)) {
        return pos;
      }
    }
  }

  return -1;
}
