import React from "react";
import CircleArc from "./circleArc";

import "../styles/components/circlestat.css";

type Props = {
  value: number;
};

export default function CircleStat({ value }: Props) {
  let shape: JSX.Element;
  if (value === 100) {
    shape = (
      <svg className="donut-stat" xmlns="http://www.w3.org/2000/svg">
        {/* donut circle */}
        <circle className="donut" r={50} cx={60} cy={80} />
      </svg>
    );
  } else {
    const rot = 300;
    const sweep = value * 3;
    shape = (
      <CircleArc
        className="circle-stat"
        cX={100}
        cY={60}
        rX={50}
        rY={50}
        rot={rot}
        sweep={sweep}
        t1={0}
      />
    );
  }

  return (
    <>
      <p className="circle-stat-val">{value}</p>
      {shape}
    </>
  );
}
