import React from "react";

import { getWidth } from "../utils";
/*
  I'd like to change the fill of the palette based one of two scenarios:
   - The theme changes
   - The button that surrounds the palette in the newPanel.js is clicked

  - I'd like the Palette to also represent a range of colors, based on the theme
    (e.g., each splotch in the color wheel/palette is different)
*/
export function Palette(props) {
  const changeSize = React.useCallback(() => {
    if (typeof document !== "undefined") {
      const minWidth =
        getWidth() / 30 > 10.5 ? (getWidth() / 30).toString() : "10.5";

      return minWidth;
    } else {
      return "30";
    }
  }, []);

  const changeTheme = React.useCallback(() => {
    const gruvbox = {
      cyan: "#076678",
      yellow: "#d79921",
      purple: "#b16286",
      red: "#cc241d",
      primary: "#b16286",
    };
    const booberry = {
      cyan: "#0468bf",
      yellow: "#bfa017",
      purple: "#7139bf",
      red: "#f2275d",
      primary: "#7139bf",
    };

    if (typeof document !== "undefined") {
      if (document.body.className === "") {
        return gruvbox;
      } else if (document.body.className === "booberry") {
        return booberry;
      }
    } else {
      return gruvbox;
    }
  }, []);

  const fill = changeTheme();

  return (
    <svg
      width={changeSize()}
      height={changeSize()}
      viewBox="0 0 201 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="palette"
    >
      <path
        d="M201 99.5C201 138.678 177.558 131.651 156.19 125.246C143.464 121.427 131.467 117.82 125.625 124.375C118.05 132.87 119.658 146.999 121.216 160.693C123.439 180.282 125.575 199 100.5 199C80.623 199 61.1924 193.164 44.6652 182.231C28.1381 171.298 15.2568 155.758 7.65015 137.577C0.0435447 119.396 -1.94669 99.3897 1.93112 80.0885C5.80894 60.7874 15.3806 43.0582 29.4358 29.1429C43.491 15.2276 61.3984 5.75114 80.8935 1.91191C100.389 -1.92732 120.596 0.0431115 138.96 7.57403C157.324 15.1049 173.02 27.8581 184.063 44.2208C195.106 60.5835 201 79.8208 201 99.5V99.5ZM100.5 186.563C108.176 186.563 108.716 184.436 108.728 184.374C109.708 182.558 110.286 178.603 109.608 170.456C109.432 168.366 109.143 165.854 108.842 163.105C108.188 157.334 107.435 150.606 107.359 144.922C107.234 136.128 108.402 124.897 116.203 116.141C120.839 110.955 126.818 108.953 132.183 108.455C137.258 107.982 142.383 108.778 146.755 109.749C151.064 110.706 155.574 112.062 159.632 113.281L159.983 113.38C164.33 114.686 168.25 115.855 171.956 116.689C180.159 118.529 183.312 117.721 184.405 116.987C184.882 116.664 188.438 113.94 188.438 99.5C188.438 82.2807 183.28 65.4481 173.617 51.1307C163.955 36.8133 150.221 25.6543 134.152 19.0648C118.084 12.4752 100.402 10.7511 83.3443 14.1104C66.2861 17.4697 50.6171 25.7616 38.3188 37.9376C26.0206 50.1135 17.6453 65.6265 14.2522 82.515C10.8591 99.4034 12.6006 116.909 19.2564 132.817C25.9122 148.726 37.1833 162.323 51.6446 171.89C66.1058 181.456 83.1076 186.563 100.5 186.563V186.563Z"
        fill={fill.primary}
      />
      <ellipse cx="50" cy="86.1342" rx="19" ry="18.8109" fill={fill.cyan} />
      <ellipse cx="100" cy="43.5624" rx="19" ry="18.8109" fill={fill.purple} />
      <ellipse cx="151" cy="81.184" rx="19" ry="18.8109" fill={fill.red} />
      <ellipse cx="75" cy="142.567" rx="19" ry="18.8109" fill={fill.yellow} />
    </svg>
  );
}
