import React from "react"
import Logo from "../components/logo"

export default function Home() {
  return (
    <div>
      <div className={`columns is-centered`}>
        <div className={`column is-half`}>
          <Logo width="300" height="300" />
        </div>
      </div>
    </div>
  )
}