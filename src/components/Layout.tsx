"use client";

import { FC, useEffect } from "react";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export const Layout: FC<any> = ({ children }) => {
  const title = "|\\|370.info";

  useEffect(() => {
    window.scrollTo({ x: 0, y: 0 } as any);
  }, []);

  return (
    <div className={styles.main}>
      <Head title={title} />
      <Header title={title} />
      <div>{children}</div>
      <Footer title={title} />
    </div>
  );
};
