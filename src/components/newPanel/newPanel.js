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

  let navClasses = "nav-link";
  if (current === props.link) {
    navClasses += " nav-link--active";
  }

  return (
    <Link to={props.link} className={navClasses} onClick={props.onClick}>
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
  const ddClass = `disc-${props.name.toLowerCase()}`;
  return (
    <MenuItem onClick={props.onClick}>
      <div>
        <div className={ddClass}>
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
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        disableScrollLock={true}
        MenuListProps={{ sx: { backgroundColor: "var(--white-ter)" } }}
        PaperProps={{
          elevation: 3,
          sx: {
            overflow: "visible", // necessary to see the 'arrow'
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "var(--arrow-offset)",
              width: 10,
              height: 10,
              bgcolor: "var(--white-ter)",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
              boxShadow:
                "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);",
            },
          },
        }}
      >
        <DropdownItem name="Gruvbox" onClick={e => handleItemClick("", e)} />
        <DropdownItem
          name="Booberry"
          onClick={e => handleItemClick("booberry", e)}
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
        <li id="waving-hand">
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
