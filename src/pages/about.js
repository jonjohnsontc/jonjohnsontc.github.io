import React from "react"
import { Splash } from "../components/page"
import myPic from "../../static/jj_profile_square.jpg"

function AboutMe() {
  const statLine = (
    <article>
      <p className={`title`}>Stats</p>
      <ul>
        <li className={`has-text-weight-bold`}>Birthdate:</li>
        <li className={`pb-2`}>May 12th, 1988</li>
        <li className={`has-text-weight-bold`}>Currently Resides In:</li>
        <li className={`pb-2`}>Los Angeles, CA</li>
        <li className={`has-text-weight-bold`}>Dependents:</li>
        <li className={`pb-2`}>Two Cats</li>
        <li className={`py-2`}>Get in touch</li>
      </ul>
    </article>
  )

  const selectBio = (
    <article className={`has-text-centered`}>
      <ul>
      <li className={`is-size-3 py-3`}>Typical tech stack</li>
      <li>AWS, Python, Clojure(script), PostgreSQL, Javascript, Docker, Spark, Git</li>
      <li className={`is-size-3 py-3`}>About Me</li>
      <li>I'm a software engineer who loves tackling problems in the media space. </li>
      <li>I used to work in music, and have a lot of experience helping </li>
      <li>And I enjoy writing tests!</li>
      </ul>
    </article>
  )
  return (
    <Splash
      logo={<img src={myPic} className="jj-pic"></img>}
      prompt={statLine} 
      belowHeadline={selectBio}
    />
  )
}

export default function About() {
  return <AboutMe />
}
