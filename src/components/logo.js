import React from "react";

export default function Logo(props) {
  let colors = [
    "#EB5757",
    "#F2C94C",
    "#27AE60",
    "#6FCF97",
    "#2D9CDB",
    "#56CCF2",
    "#A041FF",
    "#F2994A",
    "#BDBDBD",
    "#4F4F4F",
  ];

  // This controls the fill for the two J's
  let color1 = colors[Math.floor(Math.random() * colors.length)] || "#A041FF";
  let color2 = colors[Math.floor(Math.random() * colors.length)] || "#F2994A";

  let width = props.width || "209";
  let height = props.height || "209";

  return (
    <button id="jj">
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 209 209"
      >
        <g filter="url(#filter0_d)">
          
          {/* TODO: I'm no longer using the circle. I should probably delete it */}
          <circle cx="104.5" cy="100.5" r="100.5"></circle>
        </g>
        <path
          fill="url(#paint0_linear)"
          d="M70.516 46.625h24.609v70.242c0 6.516-1.523 12.328-4.57 17.438-3 5.109-7.22 9.07-12.657 11.883-5.39 2.812-11.414 4.218-18.07 4.218-11.156 0-19.828-2.812-26.016-8.437-6.187-5.625-9.28-13.594-9.28-23.907h24.75c0 4.688.796 8.086 2.39 10.196 1.64 2.109 4.36 3.164 8.156 3.164 3.422 0 6.047-1.266 7.875-3.797 1.875-2.578 2.813-6.164 2.813-10.758V46.625zm81 0h24.609v70.242c0 6.516-1.523 12.328-4.57 17.438-3 5.109-7.219 9.07-12.657 11.883-5.39 2.812-11.414 4.218-18.07 4.218-11.156 0-19.828-2.812-26.016-8.437-6.187-5.625-9.281-13.594-9.281-23.907h24.75c0 4.688.797 8.086 2.391 10.196 1.64 2.109 4.359 3.164 8.156 3.164 3.422 0 6.047-1.266 7.875-3.797 1.875-2.578 2.813-6.164 2.813-10.758V46.625z"
        ></path>
        <defs>
          <filter
            id="filter0_d"
            width="209"
            height="209"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="117.16"
            x2="104.013"
            y1="76.722"
            y2="186.002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1}></stop>
            <stop offset="0.609" stopColor={color2}></stop>
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
