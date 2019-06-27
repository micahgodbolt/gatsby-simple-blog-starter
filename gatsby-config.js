module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: `Read my awesome blog posts.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "blog",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
