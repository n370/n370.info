import "katex/dist/katex.css";
import "prismjs/themes/prism.css";
import React from "react";
import Post from "../components/Post";
import { graphql } from "gatsby";

const PostPage = ({ data, pageContext }) => {
  return (
    <Post
      postData={data.markdownRemark}
      next={pageContext.next}
      previous={pageContext.previous}
    />
  );
};

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        Title
      }
    }
  }
`;
