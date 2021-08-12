import React, { useEffect } from "react";
import { Link } from "gatsby";

function HomeLink(props) {
  // Checking for SSR
  let current;
  if (typeof window !== "undefined") {
    // If the pathname is greater than 5 characters it's likely
    // a path within one of the top level links, so we
    // regex match for the root path
    if (window.location.pathname.length > 10) {
      current = window.location.pathname.match(/(\/\w+)/)[0]
    } else {
      current = window.location.pathname
    }
  }

  return (
    <Link
      to={props.link}
      className={current === props.link ? "nav-active-link" : "nav-link"}
    >
      {props.name}
    </Link>
  );
}

function NavLinks() {
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
  );
}

export default function Panel(props) {
  return (
    <div className="app">
      <div role="navigation" aria-label="main-navigation">
        <NavLinks />
      </div>
      {props.children}
    </div>
  );
}
