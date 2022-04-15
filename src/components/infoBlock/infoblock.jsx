import React from "react";
import "../../styles/components/infoblock.css";

export default function InfoBlock(props) {
  return <div className="info-block">{props.children}</div>;
}
