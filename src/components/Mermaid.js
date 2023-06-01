import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import styled from "styled-components";

const UnstyledMermaid = ({ className, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      main().catch(console.error);
    }

    async function main() {
      mermaid.initialize({ startOnLoad: false });
      const { svg } = await mermaid.render("graph", children.props.children);
      ref.current.innerHTML = svg;
    }
  }, [ref, children]);

  return <div className={className} ref={ref}></div>;
};

export default styled(UnstyledMermaid)`
  display: flex;
  justify-content: center;
  background: var(--secondary-background-color);
  padding: 1em 0.5em;
  border-radius: calc(13px * 0.2);
`;
