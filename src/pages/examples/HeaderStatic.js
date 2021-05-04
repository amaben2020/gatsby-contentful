import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <h4>{data.site.info.title} </h4>}
  ></StaticQuery>
)

export default HeaderStatic
