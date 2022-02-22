// Making this a JSX file to see if the dev ergonomics are better
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { getWidth } from "../utils";

import "../styles/components/container.css";
import "../styles/components/infoblock.css";
import "../styles/typeography.css";
import "../styles/about.css";

export default function About() {
  const imageSize = React.useCallback(() => {
    if (typeof document !== "undefined") {
      console.log(getWidth() / 20);
      return getWidth() / 20;
    } else {
      return 300;
    }
  }, []);
  return (
    <div className="ccontainer">
      <main>
        <div className="info-block">
          <div className="info-content">
            <h1 className="text-header">Stats</h1>
            <div className="info-layout-helper">
              <StaticImage
                className="info-image"
                src="../../static/jj_profile_square.jpg"
                alt="my big ass face"
                placeholder="blurred"
                imgStyle={{ borderRadius: "50%", maxWidth: 2206 }}
              ></StaticImage>
              <div className="info-content">
                <ul className="about-stats">
                  <li>Strength</li>
                  <li>Fortitude</li>
                  <li>Love</li>
                  <li>Moxy</li>
                  <li>Vitality</li>
                </ul>
                <div className="contact-pane">
                  <p>Find me on github</p>
                  <p>Get in Touch!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-block">
          <div className="info-content">
            <h1 className="text-header">About Me</h1>
            <p>
              My name is Jon Johnson. I'm a Software Engineer who loves to
              tinker around with tech and learn.
            </p>
          </div>
        </div>
        <div className="info-block">
          <div className="info-content">
            <h1 className="text-header">Work Experience</h1>
            <ul>
              <li>Arby's - Fry Guy</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
