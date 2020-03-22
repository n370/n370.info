import React from "react";
import PostList from "../components/PostList";
import Layout from "../layouts";
import { graphql } from 'gatsby';

export default ({data}) => (
  <Layout>
    <PostList postList={data.allMarkdownRemark.edges} />
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___Date],
        order: DESC
      }
    ) {
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
`
