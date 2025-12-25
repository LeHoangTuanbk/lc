export function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {
  type State = {
    total: number;
    bestView: number;
    bestId: string;
  };

  const map = new Map<string, State>();
  let maxTotal = 0;

  for (let i = 0; i < creators.length; i++) {
    const c = creators[i];
    const id = ids[i];
    const v = views[i];

    if (!map.has(c)) {
      map.set(c, { total: v, bestView: v, bestId: id });
    } else {
      const s = map.get(c);

      s.total += v;

      if (v > s.bestView || (v === s.bestView && id < s.bestId)) {
        s.bestView = v;
        s.bestId = id;
      }
    }

    maxTotal = Math.max(maxTotal, map.get(c).total);
  }

  const res: string[][] = [];
  for (const [creator, s] of map) {
    if (s.total === maxTotal) {
      res.push([creator, s.bestId]);
    }
  }
  return res;
}

const creators = ['alice', 'bob', 'alice', 'chris'],
  ids = ['one', 'two', 'three', 'four'],
  views = [5, 10, 5, 4];
console.log(mostPopularCreator(creators, ids, views));
