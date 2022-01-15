import React from "react";
import { Helmet } from "react-helmet";
import myPic from "../../static/jj_profile_square.jpg";

function SimpleHeadline(props) {
  return (
    <div>
      <div className={`headline`}>
        <div>{props.logo}</div>
        <div className={`pl-2`}>{props.prompt}</div>
      </div>
      {props.belowHeadline}
    </div>
  );
}

const title = (
  <Helmet>
    <title>About | JonJ.io</title>
  </Helmet>
);

function AboutMe() {
  const statLine = (
    <article className={`ml-2 bio`}>
      <p className={`title`}>Stats</p>
      <ul>
        <li className={`has-text-weight-bold`}>Birthdate:</li>
        <li className={`pb-2`}>May 12th, 1988</li>
        <li className={`has-text-weight-bold`}>Currently Resides In:</li>
        <li className={`pb-2`}>Los Angeles, CA</li>
        <li className={`has-text-weight-bold`}>Check Me Out On:</li>
        <li className={`pb-2`}>
          {" "}
          <a href="https://github.com/jonjohnsontc">Github</a>
        </li>
        <li className={`py-2`}>
          <a href="mailto:jonjohnsontc@live.com">Get in touch! 👋🏽</a>
        </li>
      </ul>
    </article>
  );

  const selectBio = (
    <article className={`has-text-centered bio`}>
      <ul>
        <hr />
        <li className={`is-size-3 py-3`}>About Me</li>
        <li>
          My name is Jon Johnson. I'm a Software Engineer who loves to tinker
          around with tech and learn.
        </li>
        <hr />
        <li className={`is-size-3 py-3`}>Tech I like to work with</li>
        <li className={`pb-3`}>
          AWS, Python, Clojure(script), PostgreSQL, Javascript, Docker, Spark,
          Git
        </li>
        <hr />
        <li className={`is-size-3 py-3`}>About the Content on This Site</li>
        <li className={`pb-3`}>
          This website was built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>. CSS is powered by{" "}
          <a href="https://www.bulma.io">Bulma</a>.
        </li>
        <li className={`pb-3`}>
          If you're interested in figuring out how it's built, you can find the
          source{" "}
          <a href="https://github.com/jonjohnsontc/jonjohnsontc.github.io">
            here
          </a>
        </li>
      </ul>
    </article>
  );
  return (
    <>
      {title}
      <SimpleHeadline
        logo={
          <img src={myPic} alt="JJ Headshot" className={`jj-pic mt-6`}></img>
        }
        prompt={statLine}
        belowHeadline={selectBio}
      />
      <footer className="footer" />
    </>
  );
}

export default function About() {
  return <AboutMe />;
}
