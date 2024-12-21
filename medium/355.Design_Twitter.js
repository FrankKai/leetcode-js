type userId = number;
interface tweetIdInfo {
  tweetId: number;
  order: number;
}
interface User {
  tweetIds: tweetIdInfo[];
  follows: userId[];
  followers: userId[];
}
class Twitter {
  private userMap: Map<userId, User>;
  private order: number;
  constructor() {
    this.userMap = new Map<userId, User>();
    this.order = 0; // 自定order保证顺序
  }

  postTweet(userId: number, tweetId: number): void {
    const {
      tweetIds = [],
      follows = [],
      followers = [],
    } = this.userMap.get(userId) || {};
    this.userMap.set(userId, {
      tweetIds: [...tweetIds, { tweetId, order: ++this.order }],
      follows,
      followers,
    });
  }

  getNewsFeed(userId: number): number[] {
    const { tweetIds = [], follows = [] } = this.userMap.get(userId) || {};
    let allTweetIds = [...tweetIds];
    for (const follow of follows) {
      const followTweetIds = this.userMap.get(follow)?.tweetIds || [];
      allTweetIds = [...allTweetIds, ...followTweetIds];
    }
    allTweetIds.sort((x, y) => y.order - x.order);
    return allTweetIds.slice(0, 10).map((item) => item.tweetId);
  }

  follow(followerId: number, followeeId: number): void {
    // 新增关注者
    const {
      tweetIds = [],
      follows = [],
      followers = [],
    } = this.userMap.get(followerId) || {};
    this.userMap.set(followerId, {
      tweetIds,
      follows: Array.from(new Set([...follows, followeeId])), // 重复关注需要去重
      followers,
    });

    // 新增粉丝
    const {
      tweetIds: tweetIdsC,
      follows: followsC,
      followers: followersC,
    } = this.userMap.get(followeeId) || {
      tweetIds: [],
      follows: [],
      followers: [],
    };
    this.userMap.set(followeeId, {
      tweetIds: tweetIdsC,
      follows: followsC,
      followers: Array.from(new Set([...followersC, followerId])), // 重复关注需要去重
    });
  }

  unfollow(followerId: number, followeeId: number): void {
    // 减少关注者
    const {
      tweetIds = [],
      follows = [],
      followers = [],
    } = this.userMap.get(followerId) || {};
    this.userMap.set(followerId, {
      tweetIds,
      follows: follows.filter((id) => id !== followeeId),
      followers,
    });

    // 减少粉丝
    const {
      tweetIds: tweetIdsC,
      follows: followsC,
      followers: followersC,
    } = this.userMap.get(followeeId) || {
      tweetIds: [],
      follows: [],
      followers: [],
    };
    this.userMap.set(followeeId, {
      tweetIds: tweetIdsC,
      follows: followsC,
      followers: followersC.filter((id) => id !== followerId),
    });
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */