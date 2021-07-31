import React from "react"

export function Splash(props) {
  let colo

  return (
    <div className={`hero`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns is-vcentered`}>
            <div className={`column`}>{props.logo}</div>
            <div className={`column`}>{props.prompt}</div>
          </div>
          {props.belowHeadline}
        </div>
      </div>
    </div>
  )
}
