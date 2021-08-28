import React from "react";
import { Link } from "gatsby";
import { Palette } from "./palette";

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
      onClick={props.onClick}
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
      }
    }
  };

  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  let navbarBurgerClasses = `navbar-burger nav-ally`;
  return (
    <nav
      className={`navbar is-family-sans-serif`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className={`navbar-brand`}>
        <div className={`navbar-item`}>
          <HomeLink name="JON JOHNSON" link="/" onClick={toggleClass} />
        </div>
        <button
          className={
            isActive ? navbarBurgerClasses : navbarBurgerClasses + ` is-active`
          }
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleClass}
        >
          <span className={`has-text-link`} aria-hidden="true"></span>
          <span className={`has-text-link`} aria-hidden="true"></span>
          <span className={`has-text-link`} aria-hidden="true"></span>
        </button>
      </div>
      <div
        className={isActive ? `navbar-menu` : `navbar-menu is-active`}
        role="navigation"
      >
        <div className={`navbar-end`}>
          <div className={`navbar-item`}>
            <HomeLink name="About" link="/about" onClick={toggleClass} />
          </div>
          <div className={`navbar-item`}>
            <HomeLink name="Blog" link="/blog" onClick={toggleClass} />
          </div>
          <div className={`navbar-item`}>
            <HomeLink name="Stuff" link="/stuff" onClick={toggleClass} />
          </div>
          <div
            className={`navbar-item has-dropdown is-hoverable`}
            role="navigation"
          >
            <button className={`navbar-link is-size-2 nav-ally`}>
              <span>
                <Palette />
              </span>
            </button>
            <div className={`navbar-dropdown`}>
              <div className={`navbar-item`}>
                <button
                  className={`is-size-5 nav-ally nav-button`}
                  onClick={() => {
                    changeBodyClass("");
                    setActive(!isActive);
                  }}
                >
                  Gruvbox
                </button>
              </div>
              <hr className={`navbar-divider`} />
              <div className={`navbar-item`}>
                <button
                  className={`is-size-5 nav-ally nav-button`}
                  onClick={() => {
                    changeBodyClass("booberry");
                    setActive(!isActive);
                  }}
                >
                  Booberry
                </button>
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
      <Navbar />
      {props.children}
    </div>
  );
}
