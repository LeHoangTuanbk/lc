// Count bits in a number
const countBits = (x: number): number => {
  let count = 0;
  while (x > 0) {
    count += x & 1;
    x >>= 1;
  }
  return count;
};

// Helper function to check bit
const bit = (mask: number, pos: number): boolean => {
  return ((mask >> pos) & 1) === 1;
};

// Step 1: Generate all valid masks for a single row
const isGood = (mask: number): boolean => {
  for (let j = 0; j < n - 1; j++) {
    if (bit(mask, j) && bit(mask, j + 1)) {
      return false; // Two adjacent students in same row
    }
  }
  return true;
};

// Step 2: Check if two consecutive rows are compatible
const isGoodPair = (mask1: number, mask2: number): boolean => {
  for (let i = 0; i < n; i++) {
    if (bit(mask2, i)) {
      // If lower row has student at column i
      // Check upper left and upper right
      if (i > 0 && bit(mask1, i - 1)) return false;
      if (i < n - 1 && bit(mask1, i + 1)) return false;
    }
  }
  return true;
};

export function maxStudents(seats: string[][]): number {
  const m = seats.length;
  const n = seats[0].length;

  // Generate all valid masks for a row
  const goodMasks: number[] = [];
  for (let mask = 0; mask < 1 << n; mask++) {
    if (isGood(mask)) {
      goodMasks.push(mask);
    }
  }

  // Build adjacency between valid masks
  const adj: number[][] = Array(goodMasks.length)
    .fill(0)
    .map(() => []);
  for (let i = 0; i < goodMasks.length; i++) {
    for (let j = 0; j < goodMasks.length; j++) {
      if (isGoodPair(goodMasks[i], goodMasks[j])) {
        adj[i].push(j);
      }
    }
  }

  // Precompute row masks (available seats)
  const rowMasks: number[] = [];
  for (let i = 0; i < m; i++) {
    let mask = 0;
    for (let j = 0; j < n; j++) {
      if (seats[i][j] === '.') {
        // Good seat
        mask |= 1 << j;
      }
    }
    rowMasks.push(mask);
  }

  // Step 3: DP with memoization
  const memo: number[][] = Array(m)
    .fill(0)
    .map(() => Array(goodMasks.length).fill(-1));

  const dp = (i: number, prevIdx: number): number => {
    if (i === m) return 0;
    if (memo[i][prevIdx] !== -1) return memo[i][prevIdx];

    let res = 0;
    const prevMask = goodMasks[prevIdx];

    for (const nextIdx of adj[prevIdx]) {
      const nextMask = goodMasks[nextIdx];
      // Check if all students in nextMask sit on available seats
      if ((nextMask & ~rowMasks[i]) === 0) {
        const count = countBits(nextMask);
        res = Math.max(res, dp(i + 1, nextIdx) + count);
      }
    }

    return (memo[i][prevIdx] = res);
  };

  // Try all possible first row configurations
  let result = 0;
  for (let i = 0; i < goodMasks.length; i++) {
    const mask = goodMasks[i];
    if ((mask & ~rowMasks[0]) === 0) {
      // All students sit on available seats
      result = Math.max(result, dp(1, i) + countBits(mask));
    }
  }

  return result;
}

/* 
Input: seats = [["#",".","#","#",".","#"],
                [".","#","#","#","#","."],
                ["#",".","#","#",".","#"]]
Output: 4
Explanation: Teacher can place 4 students in available seats so they don't cheat on the exam. 

*/
