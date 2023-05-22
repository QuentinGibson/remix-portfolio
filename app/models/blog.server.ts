import { prisma } from "~/db.server";

export interface blogPost {
  id: string;
  slug: string;
  title: string;
  date: Date;
  content: string;
  category: string;
  image: string;
}

export async function createBlog(postData: any) {
  const post = await prisma.post.create({data: postData})
  return {post}
}