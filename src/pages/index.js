import React from "react";
import PostList from "../components/PostList";

export default ({data}) => {
  return <PostList postList={data.allMarkdownRemark.edges} />;
}

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