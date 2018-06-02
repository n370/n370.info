import "katex/dist/katex.css";
import "prismjs/themes/prism.css";
import React from "react";
import Post from '../components/Post';

export default ({ data, pathContext }) => {
  return <Post
      postData={data.markdownRemark}
      next={pathContext.next}
      previous={pathContext.previous} />;
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        uuid
        title
      }
    }
  }
`;
