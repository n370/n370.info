import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";

const UnstyledHeader = ({ className, siteMetadata }) => {
  return (
    <div className={className}>
      <Link to="/"><h3>{siteMetadata.title}</h3></Link>
      <Link to="/about"><h4>about me</h4></Link>
    </div>
  )
}

export default styled(UnstyledHeader)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: 20px 3%;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`;