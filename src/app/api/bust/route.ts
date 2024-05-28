import adminDB from "@/lib/instantAdmin";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function POST() {
  const token = headers().get('token');
  if (!token) {
    return Response.json({ message: "Hey, where's the token?" }, { status: 400 });
  }
  const user = await adminDB.auth.verifyToken(token);
  if (user.email !== "stepan.p@gmail.com") {
    return Response.json({ message: "Hey, watcha doing?" }, { status: 400 });
  }
  revalidatePath("/");
  revalidatePath("/feed.rss");
  revalidatePath("/feed.atom");
  const { posts } = await adminDB.query({ posts: {} });
  posts.forEach((post) => {
    revalidatePath(`/post/${post.number}`);
  });
  return Response.json({ message: "🫡" });
}
