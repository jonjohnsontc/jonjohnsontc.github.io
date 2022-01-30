exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  // Initial Blog Template
  return graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { slug: { ne: "/stuff/" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
            }
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          id: node.id,
        },
      });
    });
  });
// 

};
