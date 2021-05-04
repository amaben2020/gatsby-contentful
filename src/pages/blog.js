import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
const blog = () => {
  return (
    <Layout>
      <Link to="/products"> To products</Link>
      Blog
    </Layout>
  )
}

export default blog
