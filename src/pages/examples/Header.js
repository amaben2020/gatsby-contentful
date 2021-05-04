import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderStatic from "./HeaderStatic"

const getData = graphql`
  {
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
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1> Title: {title} </h1>
      <h3> Name: {name} </h3>
      <HeaderStatic />
    </div>
  )
}

export default Header
