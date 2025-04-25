import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-link";

const UnstyledFooter = ({ className, siteMetadata }) => (
  <div className={className}>
    <div className="info">
      <small>{siteMetadata.title}</small>
      <br />
      <br />
      <small>El Viejo Pancho 1513, CP 20000, Uruguay</small>
    </div>
    <div className="links">
      <Link href="/cv">
        <small><em>Curriculum Vitae</em></small>
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

export default styled(UnstyledFooter)`
  width: 100%;
  padding: 5em 0 2.5em 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 1em 0 0 0;
    display: block;
  }

  em {
    font-style: normal;
    font-weight: 300;
  }

  small {
    font-size: 14px;
  }

  .info,
  .links {
    width: 100%;
    margin: 2em 0;
  }

  @media (min-width: 400px) {
    padding: 10em 0 5em 0;
    flex-direction: row;

    a {
      margin: 0 1em 0 0;
      display: unset;
    }

    small {
      font-size: unset;
    }

    .info,
    .links {
      width: unset;
      margin: unset;
    }
  }
`;
