import adminDB from "@/lib/instantAdmin";
import Link from "next/link";

export const dynamic = "force-static";

export default async function Home() {
  console.log(`Rendering: /: ${new Date().toISOString()}`);
  const { posts } = await adminDB.query({ posts: {} });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);
  return (
    <div>
      <header className="mb-2">
        <div className="flex space-x-2 font-medium">
          <Link href="/" className="text-black visited:text-black">
            Stepan Parunashvili
          </Link>
        </div>
      </header>
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-gray-500">My life's work</h2>
          <p>
            <span>
              <Link
                className="font-medium"
                href="https://instantdb.com"
                target="_blank"
              >
                Instant
              </Link>
              : Build real-time and offline apps
            </span>
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="text-gray-500">Projects</h2>
          <p>
            <Link href="https://consistent.fit" target="_blank">
              Consistent
            </Link>
            : Make fitness part of your identity
          </p>
          <p>
            <Link href="https://zeneca.io" target="_blank">
              Zeneca
            </Link>
            : Share your favorite books
          </p>
          <p>
            <Link href="https://jobsearch.dev" target="_blank">
              Jobsearch.dev
            </Link>
            : Senior and staff interview prep
          </p>
        </div>
        <div className="inline-flex space-x-2">
          <h2 className="text-gray-500">Socials: </h2>
          <Link href="https://twitter.com/stopachka" target="_blank">
            twitter
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="https://twitter.com/stopachka" target="_blank">
            favorite books
          </Link>
        </div>
        <div className="space-y-1">
          <h2 className="text-gray-500">Essays</h2>
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
