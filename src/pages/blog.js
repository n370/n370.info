import React from "react";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <PostList postList={data.allMdx.edges} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMdx(sort: { frontmatter: { Date: DESC } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            Title
            Date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
