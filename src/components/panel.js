import React from "react"
import { Link } from "gatsby"

function HomeLink(props) {
  return (
    <Link to={props.link} className="nav-link">
      {props.name}
    </Link>
  )
}

function NavLinks(props) {
  return (
    <ul id="nav">
      <li className="nav-item">
        <HomeLink name="JJ" link="/" />
      </li>
      <li className="nav-item">
        <HomeLink name="About" link="/about" />
      </li>
      <li className="nav-item">
        <HomeLink name="Blog" link="/blog" />
      </li>
      <li className="nav-item">
        <HomeLink name="Stuff" link="/stuff" />
      </li>
    </ul>
  )
}

export default function Panel(props) {
  return (
    <div className="app">
      <div className={`content`} role="navigation" aria-label="main-navigation">
        <NavLinks />
      </div>
      {props.children}
    </div>
  )
}
