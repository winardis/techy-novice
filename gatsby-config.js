module.exports = {
  siteMetadata: {
    title: `Techy Novice`,
    author: `Luong Dang Hai`,
    description: `A blog where a tech geek wrote down his own findings`,
    siteUrl: `https://techynovice.com/`,
    social: {
      twitter: `jarvisluong`,
      github: 'jarvisluong',
      email: 'contact@luongdanghai.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: 'jarvisluong',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-89689359-3`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Techy Novice`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/thinking_emoji.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
