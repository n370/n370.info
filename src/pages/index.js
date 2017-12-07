import React from "react";
import Link from "gatsby-link";
import Wrapper from '../components/Wrapper';

const styles = {
  post: {
    marginBottom: '30px'
  },
  date: {
    color: '#BBB'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

export default ({data}) =>  {
  return (
    <Wrapper>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}
          style={styles.link}
          key={node.id}>
          <div style={styles.post}>
            <span style={styles.date}>{node.frontmatter.date}</span>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Wrapper>
  );
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