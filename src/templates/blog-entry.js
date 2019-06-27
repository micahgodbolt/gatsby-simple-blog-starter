import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

export const BlogEntry = props => {
  const post = props.data.mdx

  return (
    <div>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </div>
  )
}

export default BlogEntry

export const pageQuery = graphql`
  query MDXPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
