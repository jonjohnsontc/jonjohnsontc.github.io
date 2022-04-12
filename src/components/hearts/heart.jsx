import React from "react";

import "../../styles/components/heartbar.css";

/**
 * Generates boostrap themed full heart svg
 * @param {number} xMod
 * @param {number} yMod
 * @returns {JSX.Element}
 */
export function FullHeart(xMod, yMod) {
  xMod = xMod ? xMod : 0;
  yMod = yMod ? yMod : 0;
  return (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={`
        M${11.9998 + xMod} ${4.12207 + yMod}
        L${10.9243 + xMod} ${3.01657 + yMod}
        C${8.39984 + xMod} ${0.421573 + yMod} ${3.77084 + xMod} ${
        1.31707 + yMod
      } ${2.09984 + xMod} ${4.57957 + yMod}
        C${1.31534 + xMod} ${6.11407 + yMod} ${1.13834 + xMod} ${
        8.32957 + yMod
      } ${2.57084 + xMod} ${11.1571 + yMod}
        C${3.95084 + xMod} ${13.8796 + yMod} ${6.82184 + xMod} ${
        17.1406 + yMod
      } ${11.9998 + xMod} ${20.6926 + yMod}
        C${17.1778 + xMod} ${17.1406 + yMod} ${20.0473 + xMod} ${
        13.8796 + yMod
      } ${21.4288 + xMod} ${11.1571 + yMod}
        C${22.8613 + xMod} ${8.32807 + yMod} ${22.6858 + xMod} ${
        6.11407 + yMod
      } ${21.8998 + xMod} ${4.57957 + yMod}
        C${20.2288 + xMod} ${1.31707 + yMod} ${15.5998 + xMod} ${
        0.420073 + yMod
      } ${13.0753 + xMod} ${3.01507 + yMod}
        L${11.9998 + xMod} ${4.12207 + yMod}
        Z
        M${11.9998 + xMod} ${22.5001 + yMod}
        C${-10.9997 + xMod} ${7.30207 + yMod} ${4.91834 + xMod} ${
        -4.55993 + yMod
      } ${11.7358 + xMod} ${1.71457 + yMod}
        C${11.8258 + xMod} ${1.79707 + yMod} ${11.9143 + xMod} ${
        1.88257 + yMod
      } ${11.9998 + xMod} ${1.97107 + yMod}
        C${12.0845 + xMod} ${1.88265 + yMod} ${12.1725 + xMod} ${
        1.79759 + yMod
      } ${12.2638 + xMod} ${1.71607 + yMod}
        C${19.0798 + xMod} ${-4.56293 + yMod} ${34.9993 + xMod} ${
        7.30057 + yMod
      } ${11.9998 + xMod} ${22.5001 + yMod} Z
        `}
    />
  );
}
// TODO: I want to generalize this more, there's got to be some way to do that
export function HeartOutline(xMod, yMod) {
  xMod = xMod ? xMod : 0;
  yMod = yMod ? yMod : 0;
  return (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={`
  M${11.9997 + xMod} ${1.97108 + yMod}
  C${18.6567 + xMod} ${-4.87192 + yMod} ${35.3007 + xMod} ${7.10258 + yMod} ${
        11.9997 + xMod
      } ${22.5001 + yMod}
  C${-11.3013 + xMod} ${7.10408 + yMod} ${5.34267 + xMod} ${-4.87192 + yMod} ${
        11.9997 + xMod
      } ${1.97108 + yMod}
  Z
  `}
    />
  );
}
