import React from "react"
import Layout from "./components/Layout"
import Header from "./examples/Header"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <div>
      <Layout>
        Examples page
        <Header />
        <h5> Author: {author}</h5>
      </Layout>
    </div>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      internal {
        content
        description
        ignoreType
        mediaType
      }
      info: siteMetadata {
        person {
          name
          age
        }
        title
        description
        data
        author
      }
    }
  }
`

export default examples
