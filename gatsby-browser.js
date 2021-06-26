import "./src/styles/mystyles.css"

import React from "react"
import Panel from "./src/components/panel"

export const wrapPageElement = ({ element,props }) => {
    return  (
    <Panel className="side-panel">{element}</Panel>
    )
}