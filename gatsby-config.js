module.exports = {
  siteMetadata: {
    title: `Camilia Coiffure - Salon de coiffure mixte à Lyon`,
    description: `Salon de coiffure mixte à Lyon. Sur rendez-vous au 04 72 80 96 77. Ombré hair, mèches, coloration végétale, coupe homme et femme.`,
    author: `Marine Nhek`,
    username: `@camiliacoiffure`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        ignore: ["/slick-theme.css", "/slick.css"], // Ignore files/folders
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
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/camilia-icon-512.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: {
            removeViewBox: false, // remove viewBox when possible (default)
            cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)`
            removeDimensions: true,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
