/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Welcome to my website ~ Jon Johnson",
    url: "https://www.jonj.io",
    description:
      "I'm a Software Engineer and creator of a few random things. I also love to write about what I'm working on from time to time. Hope you enjoy checking things out.",
    image: "/ms-icon-310x310.png",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stuff`,
        path: `${__dirname}/src/stuff`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx-frontmatter`
  ],
};
