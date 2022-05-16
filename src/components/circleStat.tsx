import React from "react";
import CircleArc from "./circleArc";

type Props = {
  value: number;
};

export default function CircleStat({ value }: Props) {
  let shape: JSX.Element;
  if (value === 100) {
    shape = (
      <svg
        className="circle-stat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        {/* donut circle */}
        <circle className="donut" />

        {/* transparent circle */}
        <circle />
      </svg>
    );
  } else {
    const rot = 300;
    const sweep = value * 3;
    shape = (
      <CircleArc
        className="circle-stat"
        cX={150}
        cY={150}
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
      <p className="circle-stat">{value}</p>
      {shape}
    </>
  );
}
