module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'dggkzf1i',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token:
          'skiswe9tOVTFhJFEOZRmvb5QhVWLxiXQDUKUarZdFkPwDCP8lwgVquFrmOruQcSuIeG18xTKjfUDtk8NrcQIeZJUI8pyd9cJFuap1GNZMH0F2fJq1t8RaDj2SfWo7Zgj0Tdg7cMKoEOztsifxDponVrI0kxmaKLYpMS9t3VY0UJ0Fszjf024'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
