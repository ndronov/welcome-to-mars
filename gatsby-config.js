/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/welcome-to-mars',
  siteMetadata: {
    title: `welcome-to-mars`,
    description: `A convenient and beautiful authentication form`,
    author: `Nikita Dronov`,
    siteUrl: `https://ndronov.github.io/welcome-to-mars`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8c8c8c`,
        display: `minimal-ui`,
        icon: `src/images/icons8-mars-64.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
