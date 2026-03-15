import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer: FC<any> = ({ title }) => (
  <div className={styles.main}>
    <div className={styles.info}>
      <small>{title}</small>
      <br />
      <br />
    </div>
    <div className={styles.links}>
      <Link href="/cv">
        <small>
          <em>Curriculum Vitae</em>
        </small>
      </Link>
      <Link href="/blog">
        <small>Blog</small>
      </Link>
      <Link href="/">
        <small>About me</small>
      </Link>
      <Link href="/colophon">
        <small>Colophon</small>
      </Link>
    </div>
  </div>
);
