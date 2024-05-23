import db from "@/lib/instantAdmin";
import Link from "next/link";

export const dynamic = 'force-static';

export default async function Home() {
  console.log(`Rendering: /: ${new Date().toISOString()}`);
  const { posts } = await db.query({ posts: {} });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);
  return (
    <main className="space-y-4">
      {orderedPosts.map((post) => {
        return (
          <div>
            <Link href={`/post/${post.number}`} className="underline">
              {post.title}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
