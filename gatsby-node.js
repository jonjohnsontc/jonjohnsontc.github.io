exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    return graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: {frontmatter: {slug: {ne: "/stuff/"}}}
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
              }
              id
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: blogPostTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
            id: node.id
          },
        })
      })
    })
  }