import Link from "next/link";
import { FC } from "react";
import styles from "./PostList.module.css";

export const PostList: FC<any> = ({ posts }) => (
  <div className={styles.main}>
    {posts.map(({ metadata, path }: any) => {
      return (
        <Link className={styles.link} href={`blog/${path}`} key={path}>
          <span className={styles.date}>{metadata.Date}</span>
          <h5 className={styles.title}>{metadata.Title}</h5>
        </Link>
      );
    })}
  </div>
);
