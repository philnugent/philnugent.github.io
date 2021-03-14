import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

const Menu = () => (

    <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/markdown/">Markdown Posts</ListLink>
        <ListLink to="/posts/">Posts</ListLink>
        <ListLink to="/map/">Map</ListLink>
    </ul>

)

export default Menu