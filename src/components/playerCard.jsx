import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import HeartBar from "./hearts/heartBar";

import "../styles/components/container.css";
import "../styles/components/infoblock.css";
import "../styles/typeography.css";
import "../styles/about.css";

export default function PlayerCard() {
  return (
    <div className="info-block">
      <div className="info-content">
        <StaticImage
          className="info-image"
          src="../../static/jj_profile_circle.png"
          alt="my big ass face"
          placeholder="blurred"
          imgStyle={{ maxWidth: 2206 }}
        ></StaticImage>
        <div className="info-content">
          <div className="about-stats-outer-container">
            <h1 className="text-subheader">Stats</h1>
            <div className="about-stats-container">
              <ul className="about-stats">
                <li>
                  Strength
                  <HeartBar level={60} />
                </li>
                <li>
                  Fortitude <HeartBar level={80} />
                </li>
                <li>
                  Love <HeartBar level={100} />
                </li>
                <li>
                  Moxy <HeartBar level={90} />{" "}
                </li>
                <li>
                  Vitality <HeartBar level={70} />{" "}
                </li>
              </ul>
            </div>
            <div className="about-contact-pane">
              <ul>
                <li>Find me on github</li>
                <li>Get in Touch!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
