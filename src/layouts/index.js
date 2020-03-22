import 'normalize.css/normalize.css';
import '../styles/main.css';
import React from "react";
import Head from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';
import { graphql, StaticQuery } from 'gatsby';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Head title={data.site.siteMetadata.title} />
          <Header siteMetadata={data.site.siteMetadata}/>
          <Main>{children}</Main>
      </>
    )}
  />
);
