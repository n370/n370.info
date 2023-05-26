import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const UnstyledAboutPage = () => (
  <Layout>
    <h1>About</h1>
    <div className="social">
      <a rel="noreferrer" target="_blank" href="https://dev.to/n370">
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="|\|370's DEV Profile"
          height="30"
          width="30"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.codementor.io/@n370?refer=badge"
      >
        <img
          src="https://www.codementor.io/m-badges/n370/get-help.svg"
          alt="Codementor badge"
        />
      </a>
    </div>
  </Layout>
);

export default styled(UnstyledAboutPage)`
  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
    a {
      text-decoration: none;

      img {
        vertical-align: text-bottom;
      }
    }
  }
`;
