import db from "@/lib/instantAdmin";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function POST() {
  const secret = headers().get('Secret');
  if (secret !== process.env.SECRET) {
    return Response.json({ message: "Hey, watcha doing?" }, { status: 400 });
  }
  revalidatePath("/");
  const { posts } = await db.query({ posts: {} });
  posts.forEach((post) => {
    revalidatePath(`/post/${post.number}`);
  });
  return Response.json({ message: "🫡" });
}
