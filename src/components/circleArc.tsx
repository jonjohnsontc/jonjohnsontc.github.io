import React from "react";

import "../styles/components/circlearc.css";

type Props = {
  // x,y coords for center of arc
  cX: number;
  cY: number;
  // rX, rY are major/minor radius lengths
  rX: number;
  rY: number;
  // start angle
  t1: number;
  // rotation
  rot: number;
  // length of line (max 358)
  sweep: number;
  className: string;
};

// Design 'inspiration' (i stole it and made it a React component)
// taken from http://xahlee.info/js/svg_circle_arc.html
export default function CircleArc({ cX, cY, rX, rY, t1, rot, sweep }: Props) {
  const cos = Math.cos;
  const sin = Math.sin;
  const pi = Math.PI;

  const fMatrixTimes = ([[a, b], [c, d]]: number[][], [x, y]: number[]) => [
    a * x + b * y,
    c * x + d * y,
  ];
  const fRotateMatrix = (x: number) => [
    [cos(x), -sin(x)],
    [sin(x), cos(x)],
  ];
  const fVecAdd = ([a1, a2]: number[], [b1, b2]: number[]) => [
    a1 + b1,
    a2 + b2,
  ];

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
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          className="arc"
          fill="none"
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
    </>
  );
}
