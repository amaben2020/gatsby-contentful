import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"
const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <div>
      {" "}
      <h1> Single Product : {title} </h1>
      <div>
        <Img fixed={fixed} />
        price: ${price.toFixed(2)}
        <div>
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query MySingleQuery($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      id
      price
      slug
      title
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
