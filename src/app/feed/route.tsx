import db from "@/lib/instantAdmin";
import RSS from "rss";

export async function GET() {
  const { posts } = await db.query({ posts: {} });
  const [latestUpdatedMs] = posts.map(post => post.updatedAt).toSorted().reverse();

  const url = 'https://stopa.io';
  const rss = new RSS({
    title: "Stepan Parunashvili",
    description: "Read Essays by Stepan Parunashvili",
    site_url: url,
    feed_url: `${url}/feed.xml`,
    language: 'en',
    pubDate: new Date(latestUpdatedMs),
  });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);

}
