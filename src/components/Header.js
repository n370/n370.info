import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-link";

const UnstyledHeader = ({ className, siteMetadata }) => {
  return (
    <div className={className}>
      <Link to="/">
        <h5>{siteMetadata.title}</h5>
      </Link>
    </div>
  );
};

export default styled(UnstyledHeader)`
  height: var(--header-height);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  top: 0;
  width: 100%;
`;
