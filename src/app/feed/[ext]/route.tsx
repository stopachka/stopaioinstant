import db from "@/lib/instantAdmin";

function parseExt(ext: string): 'xml' | 'atom' | 'json' | undefined {
  switch (ext) {
    case 'xml':
    case 'atom':
    case 'json':
      return ext;
    default:
      return undefined;
  }
}

export async function GET({ params }: { params: { ext: string } }) {
  const ext = parseExt(params.ext);
  if (!ext) {
    return Response.json(
      {
        message: "Invalid extension",
        given: params.ext,
        expected: ['xml', 'atom', 'json']
      },
      { status: 400 }
    );
  }

  const { posts } = await db.query({ posts: {} });
  const [latestUpdatedMs] = posts.map(post => post.updatedAt).toSorted().reverse();
  const url = 'https://stopa.io';
  const feed = new RSS({
    title: "Stepan Parunashvili",
    description: "Read Essays by Stepan Parunashvili",
    site_url: url,
    feed_url: `${url}/feed.xml`,
    language: 'en',
    pubDate: new Date(latestUpdatedMs),
  });
  const orderedPosts = posts.toSorted((a, b) => b.number - a.number);
  orderedPosts.forEach(post => {
    feed.item({
      title: post.title,
      url: `/post/${post.number}`,
      date: new Date(post.createdAt),
      description: post.title
    });
  });
  switch (ext) {
    case 'xml':
      return new Response(feed.xml(), {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    case 'json':
      return Response.json(feed.json(), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }


}
