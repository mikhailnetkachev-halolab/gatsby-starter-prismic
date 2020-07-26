require('dotenv').config();

const PRISMIC_PREVIEW_STATUS = process.env.PRISMIC_PREVIEW_STATUS === 'true';

module.exports = {
  siteMetadata: {
    title: `Gatsby Prismic Starter`,
    description: `Build new website based on Gatsby and Prismic.`,
    author: `@m.netkachev`,
    siteUrl: `https://theview.ie`,
  },
  plugins: [
    // JS
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@atoms': 'src/components/atoms',
          '@molecules': 'src/components/molecules',
          '@organisms': 'src/components/organisms',
          '@templates': 'src/components/templates',
          '@pages': 'src/pages',
          '@scenes': 'src/scenes',
          '@utils': 'src/utils',
          '@styles': 'src/styles',
          '@assets': 'src/assets',
        },
        extensions: ['js', 'scss', 'sass'],
      },
    },
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // CSS
    `gatsby-plugin-sass`,
    // Resources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // Tools
    `gatsby-plugin-react-helmet`,
    // Third-party
    // Build
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/meta/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/preview`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        previews: PRISMIC_PREVIEW_STATUS,
        omitPrismicScript: !PRISMIC_PREVIEW_STATUS,
        path: '/preview',
        pages: [
          {
            type: 'Post',
            match: '/blog/:uid',
            path: '/blog-preview',
            component: require.resolve('./src/templates/Post'),
          },
        ],
        sharpKeys: [
          /image|photo|picture|illustration|screenshot|background/,
          'profilepic',
        ],
      },
    },
  ],
};
