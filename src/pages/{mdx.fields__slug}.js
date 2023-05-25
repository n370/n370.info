import "katex/dist/katex.css";
import "prismjs/themes/prism.css";
import React from "react";
import Post from "../components/Post";
import { graphql } from "gatsby";

const PostPage = ({ data, pageContext, children }) => {
  const { previous, next } = data.allMdx.edges.find(
    (edge) => edge.node.id === pageContext.id
  );
  return (
    <Post postData={data.mdx} next={next} previous={previous}>
      {children}
    </Post>
  );
};

export default PostPage;

export const query = graphql`
  query BlogPostQuery($id: String) {
    allMdx {
      edges {
        previous {
          fields {
            slug
          }
          frontmatter {
            Title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            Title
          }
        }
        node {
          id
        }
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        Title
      }
    }
  }
`;
