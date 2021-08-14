import React from "react";
import { Link } from "gatsby";

function HomeLink(props) {
  // Checking for SSR
  let current;
  if (typeof window !== "undefined") {
    // If the pathname is greater than 5 characters it's likely
    // a path within one of the top level links, so we
    // regex match for the root path
    if (window.location.pathname.length > 10) {
      current = window.location.pathname.match(/(\/\w+)/)[0];
    } else {
      current = window.location.pathname;
    }
  }

  return (
    <Link
      to={props.link}
      className={
        current === props.link
          ? "is-size-2 nav-active-link"
          : "is-size-2 nav-link"
      }
    >
      {props.name}
    </Link>
  );
}

function Navbar() {
  const changeBodyClass = className => {
    if (typeof document !== "undefined") {
      const body = document.body.className;
      if (body !== className) {
        document.body.className = className;
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  let navbarBurgerClasses = `navbar-burger`;
  return (
    <nav className={`navbar`} role="navigation" aria-label="main-navigation">
      <div className={`navbar-brand`}>
        <div className={`navbar-item`}>
          <HomeLink name="JJ" link="/" />
        </div>
        <a
          role="button"
          className={isActive ? navbarBurgerClasses : navbarBurgerClasses + ` is-active`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleClass}
        >
          <span className={`has-text-link`} aria-hidden="true"></span>
          <span className={`has-text-link`} aria-hidden="true"></span>
          <span className={`has-text-link`} aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={isActive ? `navbar-menu` : `navbar-menu is-active`}
        role="navigation"
      >
        <div className={`navbar-end`}>
          <div className={`navbar-item`}>
            <HomeLink name="About" link="/about" />
          </div>
          <div className={`navbar-item`}>
            <HomeLink name="Blog" link="/blog" />
          </div>
          <div className={`navbar-item`}>
            <HomeLink name="Stuff" link="/stuff" />
          </div>
          <div
            className={`navbar-item has-dropdown is-hoverable`}
            role="navigation"
          >
            <a className={`navbar-link is-size-2`}>Theme</a>
            <div id="dropdown" className={`navbar-dropdown`}>
              <div className={`navbar-item`}>
                <a className={`is-size-3`} onClick={() => changeBodyClass("")}>
                  Gruvbox
                </a>
              </div>
              <hr className={`navbar-divider`} />
              <div className={`navbar-item`}>
                <a
                  className={`is-size-3`}
                  onClick={() => changeBodyClass("booberry")}
                >
                  Booberry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Panel(props) {
  return (
    <div className="app">
      {/* <div role="navigation" aria-label="main-navigation">
        <NavLinks />
      </div> */}
      <Navbar />
      {props.children}
    </div>
  );
}
