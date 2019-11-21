import React from "react";
import { Helmet } from "react-helmet";

export default ({ title }) => (
  <Helmet>
    <meta name="p:domain_verify" content="c35f4a3ff9f84cc23df833202f6a8cc5"/>
    <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
    <link rel="shortcut icon" href="images/favicons/favicon.ico"/>
    <title>{title}</title>
  </Helmet>
);
