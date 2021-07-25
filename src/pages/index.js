import React from "react"
import Logo from "../components/logo"

function Greeting() {
  return (
    <p className={`title is-family`}>Hi, I'm Jon!</p>
  )
}

function Bio() {
  return (
    <p className="subtitle">I'm a Software Engineer and creator of weird things. I also love to write about what
      I'm working on from time to time. Hope you enjoy checking things out :0)
    </p>

  )
}

export default function Home() {
  return (
    <div>
      <div className={`hero`}>
        <div className={`hero-body`}>
          <div className={`container`}>
            <div className={`columns is-centered is-vcentered`}>
              <div className={`column`}>
                <Logo width="300" height="300" />
              </div>
              <div className={`column`}> 
                <Greeting/>
              </div>
            </div>
            <Bio/>
          </div>
        </div>
      </div>
    </div>
  )
}