import { FC } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header: FC<any> = ({ title }) => {
  return (
    <div className={styles.main}>
      <Link href="/">
        <h5>{title}</h5>
      </Link>
    </div>
  );
};
