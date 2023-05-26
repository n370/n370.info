import React from "react";
import Head from "./Head";
import Header from "./Header";
import Main from "./Main";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const UnstyledLayout = ({ className, children }) => {
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
    <div className={className}>
      <Head title={data.site.siteMetadata.title} />
      <Header siteMetadata={data.site.siteMetadata} />
      <Main>{children}</Main>
    </div>
  );
};

export default styled(UnstyledLayout)`
  padding: 0 3%;
`
