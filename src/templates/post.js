import "katex/dist/katex.css";
import "prismjs/themes/prism.css";
import React from "react";
import ReactDisqusThread from 'react-disqus-thread';
import Wrapper from '../components/Wrapper';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusThread
        shortname="n370"
        identifier={post.frontmatter.title} />
    </Wrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;