module.exports = {
  siteMetadata: {
    title: `Camilia Coiffure - Salon de coiffure mixte à Lyon`,
    description: `Salon de coiffure mixte à Lyon. Sur rendez-vous au 04 72 80 96 77. Ombré hair, mèches, coloration végétale, coupe homme et femme.`,
    author: `Marine Nhek`,
    username: `@camiliacoiffure`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `camilia_coiffure`,
      },
    },
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
        name: `Camilia Coiffure`,
        short_name: `Camilia Coiffure`,
        start_url: `/`,
        background_color: `#db4068`,
        theme_color: `#db4068`,
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
            removeViewBox: false, // remove viewBox when possible (default)
            cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)`
            removeDimensions: true,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
