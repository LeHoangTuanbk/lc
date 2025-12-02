from typing import List, Tuple
import collections
import math

class Solution:
    def waysToBuildRooms(self, arr: List[int]) -> int:
        MOD: int = 10**9 + 7

        g: collections.defaultdict[int, List[int]] = collections.defaultdict(list)
        for cur, pre in enumerate(arr):
            g[pre].append(cur)

        def dfs(cur: int) -> Tuple[int, int]:
            # returns: (ways, size)
            if not g[cur]:
                return 1, 1

            ans: int = 1   # số cách xây subtree
            l: int = 0     # tổng số node đã merge trước đó

            for nxt in g[cur]:
                tmp, r = dfs(nxt)
                ans = (ans * tmp * math.comb(l + r, r)) % MOD
                l += r

            return ans, l + 1  # size = tổng node + 1 (node hiện tại)

        return dfs(0)[0]