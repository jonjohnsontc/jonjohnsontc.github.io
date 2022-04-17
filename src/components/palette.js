import React from "react";

import "../styles/components/palette.css";

/*
  I'd like to change the fill of the palette based one of two scenarios:
   - The theme changes
   - The button that surrounds the palette in the newPanel.js is clicked

  - I'd like the Palette to also represent a range of colors, based on the theme
    (e.g., each splotch in the color wheel/palette is different)
*/
export function Palette(props) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="palette">
      <use xlinkHref={`./icons.svg#palette`} />
    </svg>
  );
}
