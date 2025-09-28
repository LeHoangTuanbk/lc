# Solve the Matrix Puzzle

## Problem Statement

### Title
**Solve the Matrix Puzzle**

### Description
You are given a matrix of size **4 × (4·n)**, where `n ≥ 1`.  
This matrix is divided into **n non-overlapping 4×4 submatrices**, arranged side by side horizontally.

Each 4×4 block is supposed to contain **all the integers from 1 to 16 exactly once**. However, in every block **exactly one cell is missing**, and is marked with `-1`.  

Your tasks are:
1. For each block, determine the missing integer.  
2. Replace the `-1` with the missing integer.  
3. Sort all the 4×4 blocks in **increasing order of their missing integer**.  
4. Reconstruct and return the final matrix after sorting the blocks, keeping the arrangement left-to-right.

---

### Input
- A 2D integer array `grid` of dimensions `4 × (4·n)`.  
- Each 4×4 block contains exactly 15 unique integers from the set `{1, 2, …, 16}` and one `-1`.

### Output
- A 2D integer array of the same size `4 × (4·n)` after:
  - Filling in the missing numbers.
  - Sorting the blocks by their missing value.
  - Reconstructing the matrix.

---

### Constraints
- `1 ≤ n ≤ 250` (so total columns ≤ 1000).  
- Each block strictly follows the rule: 15 unique numbers from `1..16` and one `-1`.  
- Time complexity should be **O(n·16)** ≈ **O(n)**.

---

### Example 1
**Input:**
```
grid =
[
  [1, 2, 3, 4],
  [5, 6, 7, -1],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
```

**Output:**
```
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
```

---

### Example 2
**Input:**
```
grid =
[
  [1, 2, 3, 4,   1, 2, 3, 4],
  [5, 6, 7, -1,  5, 6, -1, 8],
  [9, 10, 11, 12, 9, 10, 11, 12],
  [13, 14, 15, 16, 13, 14, 15, 16]
]
```

**Explanation:**  
- Left block missing = 8.  
- Right block missing = 7.  
- After sorting, right block comes before left block.  

**Output:**
```
[
  [1, 2, 3, 4,   1, 2, 3, 4],
  [5, 6, 7, 8,   5, 6, 7, 8],
  [9, 10, 11, 12, 9, 10, 11, 12],
  [13, 14, 15, 16, 13, 14, 15, 16]
]
```
