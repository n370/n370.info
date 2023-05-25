import "normalize.css/normalize.css";
import "../styles/main.css";
import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Main from "../components/Main";
import { graphql, useStaticQuery } from "gatsby";

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Header siteMetadata={data.site.siteMetadata} />
      <Main>{children}</Main>
    </>
  );
};
