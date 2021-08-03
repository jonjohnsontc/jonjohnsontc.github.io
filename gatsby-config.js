/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "jonj.io ~ Home of the Hange Fan Club"
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`
    }
  },
`gatsby-transformer-remark`,
`gatsby-plugin-mdx`],
}
