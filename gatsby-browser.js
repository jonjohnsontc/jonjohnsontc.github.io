import "./sass/mystyles.scss";

import React from "react";
import NewPanel from "./src/components/newPanel/newPanel";
import Panel from "./src/components/panel";

export const wrapPageElement = ({ element, props }) => {
  return <NewPanel {...props}>{element}</NewPanel>;
};
