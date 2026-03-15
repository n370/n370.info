import { Post } from "@/components/Post";
import { notFound } from "next/navigation";
import { getBlogPosts } from "../../utils";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    yearOfPublication: post.yearOfPublication,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  return {
    title: post.metadata.Title,
    description: "",
  };
}

export const BlogPostPage = async ({ params }: any) => {
  const { slug } = await params;
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const postIndex = posts.findIndex((post) => post.slug === slug);
  const previousPost = posts[postIndex - 1];
  const nextPost = posts[postIndex + 1];

  const { default: Mdx } = await import(
    `@/app/blog/posts/${post.yearOfPublication}/${post.fileName}`
  );

  return (
    <Post post={post} previousPost={previousPost} nextPost={nextPost}>
      <Mdx />
    </Post>
  );
};

export default BlogPostPage;
