import { PostList } from "@/components/PostList";
import styles from "./page.module.css";
import { getBlogPosts } from "./utils";

export const BlogPage = () => {
  const posts = getBlogPosts()

  return <PostList posts={posts} />;
};

export default BlogPage;
