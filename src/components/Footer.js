import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby-link';

const UnstyledFooter = ({ className, siteMetadata }) => (
  <div className={className}>
    <div>
      <small>{siteMetadata.title}</small>
      <br />
      <br />
      <small>El Viejo Pancho 1513, CP 20000, Uruguay</small>
    </div>
    <div>
      <Link href="/about"><small>About me</small></Link>
      <Link href="/colophon"><small>Colophon</small></Link>
    </div>
  </div>
);

export default styled(UnstyledFooter)`
  width: 100%;
  padding: 10em 0 5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-right: 1em;
  }
`;
