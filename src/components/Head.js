import React from "react";
import { Helmet } from "react-helmet";

export default ({ title }) => (
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
    <link rel="shortcut icon" href="images/favicons/favicon.ico"/>
    <title>{title}</title>
  </Helmet>
);