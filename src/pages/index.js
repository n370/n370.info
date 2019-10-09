import React from "react";
import PostList from "../components/PostList";
import Layout from "../layouts";
import { graphql } from 'gatsby';

export default ({data}) => (
  <Layout>
    <PostList postList={data.allMarkdownRemark.edges} />;
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
