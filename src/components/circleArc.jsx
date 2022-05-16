import React from "react";

import "../styles/components/circlearc.css";

// Design 'inspiration' (i stole it and made it a React component)
// taken from http://xahlee.info/js/svg_circle_arc.html
export default function CircleArc(props) {
  const cX = props.cX;
  const cY = props.cY;
  const rX = props.rX;
  const rY = props.rY;
  const t1 = props.t1;
  const rot = props.rot;
  let sweep = props.sweep;

  const cos = Math.cos;
  const sin = Math.sin;
  const pi = Math.PI;

  const fMatrixTimes = ([[a, b], [c, d]], [x, y]) => [
    a * x + b * y,
    c * x + d * y,
  ];
  const fRotateMatrix = x => [
    [cos(x), -sin(x)],
    [sin(x), cos(x)],
  ];
  const fVecAdd = ([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2];

  sweep = sweep % (2 * pi);
  const rotMatrix = fRotateMatrix(rot);
  const [sX, sY] = fVecAdd(
    fMatrixTimes(rotMatrix, [rX * cos(t1), rY * sin(t1)]),
    [cX, cY]
  );
  const [eX, eY] = fVecAdd(
    fMatrixTimes(rotMatrix, [rX * cos(t1 + sweep), rY * sin(t1 + sweep)]),
    [cX, cY]
  );

  const fA = sweep > pi ? 1 : 0;
  const fS = sweep > 0 ? 1 : 0;
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path
        className="arc"
        fill="none"
        stroke="black"
        d={`M ${sX} ${sY} A ${[
          rX,
          rY,
          (rot / (2 * pi)) * 360,
          fA,
          fS,
          eX,
          eY,
        ].join(" ")}`}
      />
    </svg>
  );
}
