import "./sass/mystyles.scss";

import React from "react";
import Panel from "./src/components/newPanel/newPanel";

export const wrapPageElement = ({ element, props }) => {
  return <Panel {...props}>{element}</Panel>;
};
