import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./components/Layout"
import Img from "gatsby-plugin-image"
import styles from "./../../src/products.css"

//This is a Page level query

const ComponentName = ({ data }) => {
  //destructuring the data
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section className="page">
        {products.map(product => {
          return (
            <article key={product.id}>
              <Img fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span> ${product.price} </span>
              </h3>
              <Link to={`/products/${product.slug}`}> More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName
