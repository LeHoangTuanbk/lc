from sortedcontainers import SortedList
class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        s0 = [SortedList(range(n)) for _ in range(m)]
        s1 = [SortedList(range(m)) for _ in range(n)]
        q = deque([(0, 0, 1)])

        while q:
            i, j, d = q.popleft()
            if (i, j) == (m-1, n-1):
                return d
            for k in list(s0[i].irange(j+1, min(j+1+grid[i][j], n) - 1)):
                q.append((i, k, d+1))
                s0[i].remove(k)
                s1[k].remove(i)
            for k in list(s1[j].irange(i+1, min(i+1+grid[i][j], m) - 1)):
                q.append((k, j, d+1))
                s1[j].remove(k)
                s0[k].remove(j)
        return -1