export function splitMessage(message: string, limit: number): string[] {
  let b = 1;
  const MAX = 1e5 + 5;
  let sumIntLength = 0;
  for (let i = 1; i < MAX; i++) {
    sumIntLength += String(i).length;
    let part1 = message.length;
    let part2 = i * 3;
    let part3 = sumIntLength;
    let part4 = String(i).length * i;

    let totalLen = i * limit;
    if (part1 + part2 + part3 + part4 >= totalLen) {
      b = i;
    } else break;
  }
  if (b === 0) {
    return [];
  }

  let curIterator = 0;
  const output: string[] = [];
  for (let a = 1; a < b + 1; a++) {
    let fixedPart = `<${a}/${b}>`;
    let restLen = limit - fixedPart.length;

    let messagePart = message.slice(curIterator, curIterator + restLen);
    curIterator += restLen;

    output.push(messagePart + fixedPart);
  }

  return output;
}

/* 
Em đã thấy idea binary search nghĩ ra ở đây tự nhiên hơn rồi ạ. Thanks anh! 
*/
