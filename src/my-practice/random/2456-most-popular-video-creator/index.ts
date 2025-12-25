export function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {
  type video = {
    totalView: number;
    video: [string, number][];
  };
  const map = new Map<string, video>();
  const n = creators.length;
  for (let i = 0; i < n; i++) {
    const creator = creators[i];
    if (!map.has(creator)) {
      map.set(creator, { totalView: views[i], video: [[ids[i], views[i]]] });
    } else {
      const creatorVideoInfo = map.get(creator);
      map.set(creator, {
        totalView: views[i] + creatorVideoInfo.totalView,
        video: [...creatorVideoInfo.video, [ids[i], views[i]]],
      });
    }
  }

  const freqs = [...map.entries()].sort((a, b) => b[1].totalView - a[1].totalView);
  const max = freqs[0][1].totalView;

  const items: typeof freqs = [];
  for (const item of freqs) {
    if (item[1].totalView === max) {
      items.push(item);
    }
  }

  return items.map((item) => [
    item[0],
    item[1].video
      .sort((a, b) => {
        if (b[1] === a[1]) return a[0].localeCompare(b[0]);
        return b[1] - a[1];
      })
      .map((video) => video[0])[0],
  ]);
}

const creators = ['a', 'a'],
  ids = ['aa', 'a'],
  views = [5, 5];
console.log(mostPopularCreator(creators, ids, views));
