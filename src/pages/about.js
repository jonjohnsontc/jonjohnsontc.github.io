import React from "react"
import { Splash } from "../components/page"
import myPic from "../../static/jj_profile_square.jpg"

// TODO: There's got to be a better way to center the
//       logo and prompt
function AboutHeadline(props) {
  return (
    <div>
      <hr />
      <div className={`pt-2 columns is-centered is-vcentered`}>
        <div className={`column`}></div>
        <div className={`column`}></div>
        <div className={`column`}></div>
        <div className={`column`}></div>
        {props.logo}
        <div className={`column`}>{props.prompt}</div>
        <div className={`column`}></div>
        <div className={`column`}></div>
        <div className={`column`}></div>
        <div className={`column`}></div>
      </div>
      {props.belowHeadline}
    </div>
  )
}

function AboutMe() {
  const statLine = (
    <article className={`ml-2`}>
      <p className={`title`}>Stats</p>
      <ul>
        <li className={`has-text-weight-bold`}>Birthdate:</li>
        <li className={`pb-2`}>May 12th, 1988</li>
        <li className={`has-text-weight-bold`}>Currently Resides In:</li>
        <li className={`pb-2`}>Los Angeles, CA</li>
        <li className={`has-text-weight-bold`}>Dependents:</li>
        <li className={`pb-2`}>Two Cats</li>
        <li className={`py-2`}>
          {" "}
          <a href="mailto:jonjohnsontc@live.com">Get in touch!👋🏽</a>
        </li>
      </ul>
    </article>
  )

  const selectBio = (
    <article className={`has-text-centered`}>
      <ul>
        <hr />
        <li className={`is-size-3 py-3`}>About Me</li>
        <li>
          I'm a software engineer who loves tackling problems in the media
          space.
        </li>
        <li>I used to work in music, and have a lot of experience helping </li>
        <li>And I enjoy writing tests!</li>
        <hr />
        <li className={`is-size-3 py-3`}>Tech I like to work with</li>
        <li className={`pb-3`}>
          AWS, Python, Clojure(script), PostgreSQL, Javascript, Docker, Spark,
          Git
        </li>
      </ul>
    </article>
  )
  return (
    <AboutHeadline
      logo={<img src={myPic} className={`jj-pic`}></img>}
      prompt={statLine}
      belowHeadline={selectBio}
    />
  )
}

export default function About() {
  return <AboutMe />
}
