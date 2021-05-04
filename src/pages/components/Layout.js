import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  console.log(children)
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
