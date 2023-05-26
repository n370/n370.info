import React, { useEffect } from "react";
import Head from "./Head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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

  useEffect(() => {
    window.scrollTo({ x: 0, y: 0 })
  }, [])

  return (
    <div className={className}>
      <Head title={data.site.siteMetadata.title} />
      <Header siteMetadata={data.site.siteMetadata} />
      <Main>{children}</Main>
      <Footer siteMetadata={data.site.siteMetadata} />
    </div>
  );
};

export default styled(UnstyledLayout)`
  padding: 0 3%;

  :not(.gatsby-highlight) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    small {
      font-family: "Lexend", sans-serif;
    }

    ${[1,2,3,4,5,6].map((n, i, l) => {
      const fontSize = 3.2
      const margin = 1.3
      const val = (n) => `${n * (1 / l.length) * (l.length - i)}em`
      return `
        h${n} {
          font-size: ${val(fontSize)};
          margin: ${val(margin)} 0 ;
        }
      `
    })}

    p,
    span :not(.gatsby-highlight) & {
      margin: 2em 0;
      font-family: "PT Serif", serif;
      font-size: 1.25em;
      line-height: 1.45;
    }
  }
`
