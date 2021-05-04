import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/blog"> Blog </Link>
      </li>
      <li>
        <Link to="/examples"> Examples </Link>
      </li>
      <li>
        <Link to="/images"> Images </Link>
      </li>
      <li>
        <Link to="/products"> Products </Link>
      </li>
    </div>
  )
}

export default Navbar
