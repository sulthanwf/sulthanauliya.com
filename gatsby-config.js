module.exports = {
  siteMetadata: {
    title: `Sulthan Auliya`,
    description: `Hi, my name is Sulthan Auliya and welome to my website. I am a software developer based in New Zealand.`,
    author: `@sulthanwf`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sa-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,700`, `Titillium Web`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBSZX7euFaAJR6dqfAgabrKNXtz5NUQCmY",
          authDomain: "sulthanauliya-93b5b.firebaseapp.com",
          projectId: "sulthanauliya-93b5b",
          storageBucket: "sulthanauliya-93b5b.appspot.com",
          messagingSenderId: "928005354940",
          appId: "1:928005354940:web:170e9e9493bf2f2c19e7b9",
          measurementId: "G-JGZ3032DSX",
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
