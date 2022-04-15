import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Face() {
  return (
    <div className="info-content">
      <StaticImage
        className="info-image"
        src="../images/about/jj_profile.png"
        alt="my big ass face"
        placeholder="blurred"
      />
    </div>
  );
}
