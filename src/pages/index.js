import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = props => {
  const { data } = props
  const posts = data.allMdx.edges
  return (
    <div>
      <SEO title="Home" />
      <h1>Welcome to {data.site.siteMetadata.title}</h1>
      <ul>
        {posts.map((post, i) => {
          const {
            node: {
              frontmatter: { title, date, slug },
              excerpt,
            },
          } = post
          return (
            <li key={i}>
              <h3>
                <Link to={"/blog/" + slug}>{title}</Link>
              </h3>
              <small>{date}</small>
              <p> {excerpt} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
