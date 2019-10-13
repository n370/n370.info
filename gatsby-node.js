const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
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
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node, previous, next }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.fields.slug,
            next,
            previous
          }
        });
      });
      resolve();
    });
  });
};
