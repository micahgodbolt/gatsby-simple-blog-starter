const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogEntry = path.resolve("src/templates/blog-entry.js")
  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMdx.edges

    posts.forEach(post => {
      if (post.node.frontmatter && post.node.frontmatter.slug) {
        createPage({
          path: "/blog/" + post.node.frontmatter.slug,
          component: blogEntry,
          context: {
            id: post.node.id,
          },
        })
      }
    })

    return null
  })
}
