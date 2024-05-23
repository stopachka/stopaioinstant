import db from "@/lib/instantAdmin";
import Link from "next/link";

export const dynamic = 'force-static';

export default async function Home() {
  console.log(`Rendering: /: ${new Date().toISOString()}`);
  const { posts } = await db.query({ posts: {} });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);
  return (
    <div>
      <header className="mb-2">
        <div className="flex space-x-2 font-medium">
          <Link href="/" className="text-black visited:text-black">
            Stepan <span className="hidden md:inline">Parunashvili</span>
          </Link>
          <Link href="https://twitter.com/stopachka" target="_blank">
            Twitter
          </Link>
        </div>
      </header>
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="font-bold text-gray-500">Startup</h2>
          <p><Link href="https://instantdb.com" target="_blank" >Instant</Link>: Build real-time and offline apps</p>
        </div>
        <div className="space-y-1">
          <h2 className="font-bold text-gray-500">Projects</h2>
          <p><Link href="https://consistent.fit" target="_blank">Consistent</Link>: Make fitness part of your identity</p>
          <p><Link href="https://zeneca.io/stopa" target="_blank">Zeneca</Link>: Share your favorite books</p>
          <p><Link href="https://jobsearch.dev" target="_blank">Jobsearch.dev</Link>: Senior and staff interview prep</p>
        </div>
        <div>
          <h2 className="font-bold mb-1 text-gray-500">Essays</h2>
          <div className="space-y-4">
            {orderedPosts.map((post) => {
              return (
                <div>
                  <Link href={`/post/${post.number}`} className="underline">
                    {post.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
