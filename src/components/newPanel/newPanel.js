import React from "react";
import { Link } from "gatsby";
import { Menu, MenuItem } from "@mui/material";
import { Palette } from "../palette";
import { getWidth } from "../../utils";
import "./styles.css";

function PanelLink(props) {
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
      className={current === props.link ? "nav-link--active" : "nav-link"}
      onClick={props.onClick}
    >
      {props.name}
    </Link>
  );
}

const changeBodyClass = className => {
  if (typeof document !== "undefined") {
    const body = document.body.className;
    if (body !== className) {
      document.body.className = className;
    }
  }
};

function DropdownItem(props) {
  return (
    <MenuItem onClick={props.onClick}>
      <div>
        <div className={props.background}>
          <img />
        </div>
        <h2>{props.name}</h2>
      </div>
    </MenuItem>
  );
}

function PaletteDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (className, e) => {
    e.preventDefault();
    changeBodyClass(className);
    setAnchorEl(null);
  };
  return (
    <div className="palette-dropdown">
      <button className="nav-button" onClick={handleClick}>
        <Palette />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <DropdownItem
          name="Gruvbox"
          onClick={e => handleItemClick("", e)}
          background={"gruvbox"}
        />
        <DropdownItem
          name="Booberry"
          onClick={e => handleItemClick("booberry", e)}
          background={"booberry"}
        />
      </Menu>
    </div>
  );
}

function Navbar() {
  const [isActive, setActive] = React.useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // This might work better in the palette component directly
  const paletteSize = React.useCallback(() => {
    if (typeof document != "undefined") {
      return (getWidth() / 35).toString();
    } else {
      return "40";
    }
  }, []);

  return (
    <nav className="nav" role="navigation" aria-label="main-navigation">
      <ul>
        <li>
          <PanelLink name="👋🏽" link="/" onClick={toggleClass} />
        </li>
        <li>
          <PanelLink name="about" link="/about" onClick={toggleClass} />
        </li>
        <li>
          <PanelLink name="blog" link="/blog" onClick={toggleClass} />
        </li>
        <li>
          <PanelLink name="stuff" link="/stuff" onClick={toggleClass} />
        </li>
        <li>
          <PaletteDropdown size={paletteSize} />
        </li>
      </ul>
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
