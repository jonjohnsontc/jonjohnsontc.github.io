import React from "react";

import "../../styles/components/heartbar.css";

export default function HeartBar(props) {
  const level = props.level;
  const hearts = ["#heart", "#heart-half", "#heart-fill"];
  const compareTo = (num, comp) => {
    if (num >= comp) {
      return 2;
    } else if (num === comp - 10) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <svg className="bi" height={32}>
      <use xlinkHref={`./icons.svg${hearts[compareTo(level, 20)]}`} />
      <use xlinkHref={`./icons.svg${hearts[compareTo(level, 40)]}`} x={18} />
      <use xlinkHref={`./icons.svg${hearts[compareTo(level, 60)]}`} x={36} />
      <use xlinkHref={`./icons.svg${hearts[compareTo(level, 80)]}`} x={54} />
      <use xlinkHref={`./icons.svg${hearts[compareTo(level, 100)]}`} x={72} />
    </svg>
  );
}
