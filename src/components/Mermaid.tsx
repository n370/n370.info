"use client";

import { FC, useEffect, useRef } from "react";
import mermaid from "mermaid";
import styles from "./Mermaid.module.css";

export const Mermaid: FC<any> = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      main().catch(console.error);
    }

    async function main() {
      mermaid.initialize({ startOnLoad: false });
      const { svg } = await mermaid.render("graph", children.props.children);
      (ref.current as any).innerHTML = svg;
    }
  }, [ref, children]);

  return <div className={styles.main} ref={ref}></div>;
};
