export function findMinimumConference(interval: number[][]): number {
  if (!interval.length) return 0;

  const starts = interval.map((i) => i[0]).sort((a, b) => a - b);
  const ends = interval.map((i) => i[1]).sort((a, b) => a - b);

  let usedRooms = 0;
  let endPtr = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPtr]) {
      usedRooms++;
    } else {
      endPtr++;
    }
  }

  return usedRooms;
}

/* 
[0,                    ,30],
  [5,    10], 
             [15, 20],

0 5 15
10 20 30
        
*/
