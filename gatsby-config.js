module.exports = {
  siteMetadata: {
    title: `Camilia Coiffure`,
    description: `Salon de coiffure mixte à Lyon. Mèches, coloration, ombre hair, tie & dye, coupe homme/femme. Sur rendez-vous au 04 72 80 96 77.`,
    author: `@camiliacoiffure`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/camilia-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: {
            removeViewBox: true, // remove viewBox when possible (default)
            cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
