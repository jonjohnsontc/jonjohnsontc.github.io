import React from "react";
import { PageProps } from "gatsby";

import CircleArc from "./circleArc";

export default function CompTable({}) {
  return (
    <div className="comp-table">
      <div className="comp-header">
        <div className="comp-cat"></div>
        <div className="comp-cat"></div>
        <div className="comp-cat"></div>
        <div className="comp-cat"></div>
        <div className="comp-cat"></div>
      </div>
      <table>
        <th></th>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
