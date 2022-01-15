import "./src/styles/mystyles.css";
import "prismjs/themes/prism-tomorrow.css";

import React from "react";
import Panel from "./src/components/panel";

export const wrapPageElement = ({ element, props }) => {
  return <Panel {...props}>{element}</Panel>;
};
