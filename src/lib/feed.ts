import { Feed } from "feed";
import db from "./instantAdmin";

export async function generateFeed(): Promise<Feed> {
  const { posts } = await db.query({ posts: {} });
  const [latestUpdatedMs] = posts
    .map((post) => post.updatedAt)
    .toSorted()
    .reverse();
  const url = "https://stopa.io";
  const feed = new Feed({
    title: "Stepan Parunashvili",
    description: "Read Essays by Stepan Parunashvili",
    id: url,
    link: url,
    language: "en",
    favicon: `${url}/favicon.ico`,
    updated: new Date(latestUpdatedMs),
    copyright: `© ${new Date().getFullYear()} Stepan Parunashvili`,
    feedLinks: {
      atom: `${url}/feed.atom`,
      rss2: `${url}/feed.rss`,
    },
  });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);
  orderedPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      link: `${url}/post/${post.number}`,
      date: new Date(post.createdAt),
    });
  });

  return feed;
}
