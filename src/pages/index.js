import React from "react";
import PostList from "../components/PostList";
import Layout from "../layouts";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <PostList postList={data.allMarkdownRemark.edges} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { frontmatter: { Date: DESC } }) {
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
