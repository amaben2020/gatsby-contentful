import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import img from "./../../images/image-3.jpg"
import Layout from "../components/Layout"

const getData = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <Layout>
      <section className="images">
        <article className="single-image">
          {" "}
          <h3>Basic Image</h3>
          <img src={img} style={{ width: "100%" }} />
        </article>
        <article className="single-image">
          {" "}
          <h3>Fixed Image Blur </h3>
          <Image fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="single-image">
          {" "}
          <h3>Fluid Image/ SVG</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
        <article>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </section>
    </Layout>
  )
}

export default Images
