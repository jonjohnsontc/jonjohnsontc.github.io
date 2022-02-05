const { reporter } = require("gatsby-cli/lib/reporter/reporter");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);
  const blogPostTemplate2 = require.resolve(`./src/templates/mdxBlogTemplate.js`)
  // Initial Blog Template
  const blogHero = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { slug: { ne: "/stuff/" }, format: { ne: "component" } } }
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
  `)

// Component Header blog template
  const mdxBlogTemplate = await graphql(`
  {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { slug: { ne: "/stuff/" }, format: { eq: "component" } } }
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
  `)

  if (blogHero.errors || mdxBlogTemplate.errors ) {
    reporter.panicOnBuild("Error while running GraphQL query");
    return
  }
  blogHero.data.allMdx.edges.forEach(({ node }) => {
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

  mdxBlogTemplate.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate2,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });

};