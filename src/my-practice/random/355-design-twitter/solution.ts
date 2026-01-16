import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

class Twitter {
  private time = 0;
  private tweets = new Map<number, Array<[number, number]>>();
  private followees = new Map<number, Set<number>>();

  postTweet(userId: number, tweetId: number): void {
    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }
    this.tweets.get(userId)!.push([this.time++, tweetId]);
  }

  getNewsFeed(userId: number): number[] {
    const res: number[] = [];

    if (!this.followees.has(userId)) {
      this.followees.set(userId, new Set());
    }
    // luôn follow chính mình
    this.followees.get(userId)!.add(userId);

    const pq = new MaxPriorityQueue<{
      time: number;
      tweetId: number;
      userId: number;
      idx: number;
    }>((x) => x.time);

    for (const uid of this.followees.get(userId)!) {
      const list = this.tweets.get(uid);
      if (list && list.length > 0) {
        const idx = list.length - 1;
        const [time, tweetId] = list[idx];
        pq.enqueue({ time, tweetId, userId: uid, idx });
      }
    }

    while (!pq.isEmpty() && res.length < 10) {
      const { time, tweetId, userId, idx } = pq.dequeue();
      res.push(tweetId);

      if (idx > 0) {
        const [t, id] = this.tweets.get(userId)![idx - 1];
        pq.enqueue({ time: t, tweetId: id, userId, idx: idx - 1 });
      }
    }

    return res;
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.followees.has(followerId)) {
      this.followees.set(followerId, new Set());
    }
    this.followees.get(followerId)!.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.followees.has(followerId) && followerId !== followeeId) {
      this.followees.get(followerId)!.delete(followeeId);
    }
  }
}
