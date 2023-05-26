import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => (
  <Helmet>
    <meta name="p:domain_verify" content="c35f4a3ff9f84cc23df833202f6a8cc5" />
    <link rel="shortcut icon" href="images/favicons/favicon.ico" />
    <title>{title}</title>
  </Helmet>
);

export default Head;
