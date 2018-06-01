import React from "react";
import styled from 'styled-components';

const UnstyledFooter = ({ className, siteMetadata }) => (
  <small className={className}>{siteMetadata.title}</small>
);

export default styled(UnstyledFooter)`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 3%;
  box-sizing: border-box;
  text-align: right;
`;