import 'normalize.css/normalize.css';
import '../styles/main.css';
import React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import Header from '../components/Header';

export default ({ children, data }) => (
    <div>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
            <link rel="shortcut icon" href="images/favicons/favicon.ico"/>
        </Helmet>
        <Header siteMetadata={data.site.siteMetadata}/>
        {children()}
    </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;