import React from 'react'

const ExternalLink = ({ children, ...rest }) => (
  <a rel="noreferrer" target="__blank" {...rest}>
    {children}
  </a>
);

export default ExternalLink;
