"use client";

import Link from "next/link";
import { FC } from "react";
import { DisqusComments } from "./DisqusComments";
import styles from "./Post.module.css";

export const Post: FC<any> = ({ post, previousPost, nextPost, children }) => {
  return (
    <div className={styles.main}>
      <h1>{post.metadata.Title}</h1>
      <div className={styles.content}> {children}</div>
      <div className={styles.pagination}>
        <div>
          {previousPost && (
            <Link href={`/blog/${previousPost.path}`}>
              Previous: {previousPost.metadata.Title}
            </Link>
          )}
        </div>
        <div>
          {nextPost && (
            <Link href={`/blog/${nextPost.path}`}>
              Next: {nextPost.metadata.Title}
            </Link>
          )}
        </div>
      </div>
      <br />
      <br />
      <DisqusComments post={post} />
    </div>
  );
};
