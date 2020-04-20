import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";

const UnstyledHeader = ({ className, siteMetadata }) => {
  return (
    <div className={className}>
      <Link to="/"><h3>{siteMetadata.title}</h3></Link>
      <div className="social">
        <a href="https://dev.to/n370">
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="|\|370's DEV Profile" height="30" width="30" />
        </a>
        <a href="https://www.codementor.io/n370">
          <img src="https://cdn.codementor.io/badges/book_session_github.svg" />
        </a>
      </div>
    </div>
  )
}

export default styled(UnstyledHeader)`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: 20px 3%;
  box-sizing: border-box;
  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
    a {
      text-decoration: none;

      img {
        vertical-align: text-bottom;
      }
    }
  }
`;
