import React from "react";
import Layout from "../components/Layout";
import ExternalLink from "../components/ExternalLink";
import styled from "styled-components";

const UnstyledColophonPage = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <p>
          This webpage was built using JavaScript and the{" "}
          <ExternalLink href="https://www.gatsbyjs.com/docs">
            Gatsby
          </ExternalLink>{" "}
          framework. It is hosted on{" "}
          <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink>{" "}
          and its MIT licensed source code is available on{" "}
          <ExternalLink href="https://www.github.com/n370/n370.info">
            GitHub
          </ExternalLink>
          .
        </p>
      </div>
    </Layout>
  );
};

export default styled(UnstyledColophonPage)`
  font-size: 14px;
  text-align: center;
  margin: 0;

  @media (min-width: 400px) {
    margin: 0 20%;
  }
`;
